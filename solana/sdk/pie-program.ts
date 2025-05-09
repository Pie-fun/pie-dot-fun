import * as anchor from "@coral-xyz/anchor";
import {
  BN,
  BorshCoder,
  EventParser,
  Idl,
  IdlAccounts,
  IdlEvents,
  IdlTypes,
  Program,
} from "@coral-xyz/anchor";
import {
  AddressLookupTableAccount,
  Cluster,
  Commitment,
  ComputeBudgetProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  RpcResponseAndContext,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import { Pie } from "../target/types/pie";
import * as PieIDL from "../target/idl/pie.json";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createCloseAccountInstruction,
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  CurveCalculator,
  getPdaExBitmapAccount,
  getPdaObservationId,
  MAX_SQRT_PRICE_X64,
  MIN_SQRT_PRICE_X64,
  PoolUtils,
  Raydium,
  SYSTEM_PROGRAM_ID,
} from "@raydium-io/raydium-sdk-v2";
import {
  buildClmmRemainingAccounts,
  caculateTotalAmountWithFee,
  checkAndReplaceSwapDataError,
  checkSwapDataError,
  findDepositAndRemoveInPlace,
  getOrCreateNativeMintATA,
  getOrCreateTokenAccountTx,
  getSwapData,
  getTokenAccount,
  getTokenFromTokenInfo,
  isValidTransaction,
  processBuySwapData,
  restoreRawDecimal,
  restoreRawDecimalRoundUp,
  SwapCompute,
  unwrapSolIx,
  wrapSOLInstruction,
} from "./utils/helper";
import {
  addAddressesToTable,
  createLookupTable,
  findAddressesInTable,
} from "./utils/lookupTable";
import { Jito } from "./jito";
import {
  BuySwapData,
  DepositOrWithdrawSolInfo,
  RebalanceInfo,
  TokenInfo,
} from "./types";
import { SYS_DECIMALS } from "./constants";
import { getMayanSwapTx } from "./mayan-wormhole";

export type ProgramState = IdlAccounts<Pie>["programState"];
export type BasketConfig = IdlAccounts<Pie>["basketConfig"];
export type UserFund = IdlAccounts<Pie>["userFund"];

export type BasketComponent = IdlTypes<Pie>["basketComponent"];
export type CreateBasketArgs = IdlTypes<Pie>["createBasketArgs"];

export type CreateBasketEvent = IdlEvents<Pie>["createBasketEvent"];
export type UpdateRebalancerEvent = IdlEvents<Pie>["updateRebalancerEvent"];
export type TransferAdminEvent = IdlEvents<Pie>["transferAdminEvent"];
export type TransferBasketEvent = IdlEvents<Pie>["transferBasketEvent"];
export type ExecuteRebalancingEvent = IdlEvents<Pie>["executeRebalancingEvent"];
export type StartRebalancingEvent = IdlEvents<Pie>["startRebalancingEvent"];
export type StopRebalancingEvent = IdlEvents<Pie>["stopRebalancingEvent"];
export type BuyComponentEvent = IdlEvents<Pie>["buyComponentEvent"];
export type SellComponentEvent = IdlEvents<Pie>["sellComponentEvent"];
export type MintBasketTokenEvent = IdlEvents<Pie>["mintBasketTokenEvent"];
export type RedeemBasketTokenEvent = IdlEvents<Pie>["redeemBasketTokenEvent"];

const PROGRAM_STATE = "program_state";
const USER_FUND = "user_fund";
const BASKET_CONFIG = "basket_config";
const BASKET_MINT = "basket_mint";

const MPL_TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export class PieProgram {
  private idl = Object.assign({}, PieIDL);
  raydium: Raydium;
  eventParser: EventParser;
  jito: Jito;
  account: Keypair;

  constructor(
    public readonly connection: Connection,
    public readonly cluster: Cluster,
    public readonly jitoRpcUrl: string,
    programId: string = PieIDL.address,
    public sharedLookupTable: string = "2ZWHWfumGv3cC4My3xzgQXMWNEnmYGVGnURhpgW6SL7m"
  ) {
    this.idl.address = programId;
    this.jito = new Jito(jitoRpcUrl);
    this.eventParser = new EventParser(
      new PublicKey(programId),
      new BorshCoder(PieIDL as Idl)
    );
    this.account = anchor.web3.Keypair.generate();
  }

  async init() {
    this.raydium = await Raydium.load({
      connection: this.connection as any,
      cluster: this.cluster as any,
      disableFeatureCheck: true,
      blockhashCommitment: "confirmed",
    });
  }

  get program() {
    // return new Program(this.idl as Idl, { connection: this.connection });

    // return new Program(this.idl as Idl,
    //     new anchor.AnchorProvider(
    //         anchor.getProvider().connection,
    //         new anchor.Wallet(this.account),
    //         {}
    //     ));

    return new Program(this.idl as Idl, anchor.AnchorProvider.env());
  }

  get accounts(): any {
    return this.program.account;
  }

  get programStatePDA(): PublicKey {
    return PublicKey.findProgramAddressSync(
      [Buffer.from(PROGRAM_STATE)],
      this.program.programId
    )[0];
  }

  basketConfigPDA({ basketId }: { basketId: BN }): PublicKey {
    return PublicKey.findProgramAddressSync(
      [Buffer.from(BASKET_CONFIG), basketId.toArrayLike(Buffer, "be", 8)],
      this.program.programId
    )[0];
  }

  basketMintPDA({ basketId }: { basketId: BN }): PublicKey {
    return PublicKey.findProgramAddressSync(
      [Buffer.from(BASKET_MINT), basketId.toArrayLike(Buffer, "be", 8)],
      this.program.programId
    )[0];
  }

  userFundPDA({
    user,
    basketId,
  }: {
    user: PublicKey;
    basketId: BN;
  }): PublicKey {
    return PublicKey.findProgramAddressSync(
      [
        Buffer.from(USER_FUND),
        user.toBuffer(),
        basketId.toArrayLike(Buffer, "be", 8),
      ],
      this.program.programId
    )[0];
  }

  metadataPDA({ mint }: { mint: PublicKey }): PublicKey {
    return PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID).toBuffer(),
        mint.toBuffer(),
      ],
      new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID)
    )[0];
  }

  async getProgramState(): Promise<ProgramState | null> {
    try {
      return await this.accounts.programState.fetch(this.programStatePDA);
    } catch (error) {
      return null;
    }
  }

  async getPlatformFeeTokenAccount(): Promise<PublicKey> {
    const programState = await this.getProgramState();
    const platformFeeTokenAccount = getAssociatedTokenAddressSync(
      NATIVE_MINT,
      programState.platformFeeWallet,
      true
    );
    return platformFeeTokenAccount;
  }

  async getCreatorFeeTokenAccount({
    basketId,
  }: {
    basketId: BN;
  }): Promise<PublicKey> {
    const basketConfig = await this.getBasketConfig({ basketId });
    const creatorFeeTokenAccount = getAssociatedTokenAddressSync(
      NATIVE_MINT,
      basketConfig.creator,
      true
    );
    return creatorFeeTokenAccount;
  }

  async getBasketConfig({
    basketId,
  }: {
    basketId: BN;
  }): Promise<BasketConfig | null> {
    const basketConfigPDA = this.basketConfigPDA({ basketId });
    try {
      return await this.accounts.basketConfig.fetch(basketConfigPDA);
    } catch (error) {
      return null;
    }
  }

  async getUserFund({
    user,
    basketId,
  }: {
    user: PublicKey;
    basketId: BN;
  }): Promise<UserFund | null> {
    const userFundPDA = this.userFundPDA({ user, basketId });
    try {
      return await this.accounts.userFund.fetch(userFundPDA);
    } catch (error) {
      return null;
    }
  }

  async getTokenBalance({
    mint,
    owner,
    commitment = "confirmed",
  }: {
    mint: PublicKey;
    owner: PublicKey;
    commitment?: Commitment;
  }): Promise<number> {
    const tokenAccount = getAssociatedTokenAddressSync(mint, owner, true);

    try {
      const balance = await this.connection.getTokenAccountBalance(
        tokenAccount,
        commitment
      );
      return Number(balance.value.amount);
    } catch (error) {
      // Return 0 if the token account doesn't exist
      return 0;
    }
  }

  async getAllTokenAccountWithBalance({ owner }: { owner: PublicKey }): Promise<
    {
      mint: PublicKey;
      owner: PublicKey;
      pubkey: PublicKey;
      tokenAmount: {
        amount: string;
        decimals: number;
        uiAmount: number;
        uiAmountString: string;
      };
    }[]
  > {
    const tokenAccounts = await this.connection.getParsedTokenAccountsByOwner(
      owner,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );

    return tokenAccounts.value.map((tokenAccount) => ({
      mint: tokenAccount.account.data.parsed.info.mint,
      owner: tokenAccount.account.data.parsed.info.owner,
      pubkey: tokenAccount.pubkey,
      tokenAmount: tokenAccount.account.data.parsed.info.tokenAmount,
    }));
  }

  async getBasketVaults({ basketId }: { basketId: BN }): Promise<
    {
      mint: PublicKey;
      balance: number;
    }[]
  > {
    const basketConfig = await this.getBasketConfig({ basketId });

    const tokenMints = [];
    const tokenBalances: Promise<number>[] = [];

    for (const component of basketConfig.components) {
      tokenMints.push(new PublicKey(component.mint));
      tokenBalances.push(
        this.getTokenBalance({
          mint: new PublicKey(component.mint),
          owner: this.basketConfigPDA({ basketId }),
        })
      );
    }

    const resolvedBalances = await Promise.all(tokenBalances);

    return tokenMints.map((mint, index) => ({
      mint,
      balance: resolvedBalances[index],
    }));
  }

  /**
   * Initializes the program.
   * @param admin - The admin account.
   * @returns A promise that resolves to a transaction.
   */
  async initialize({
    initializer,
    admin,
    creator,
    platformFeeWallet,
    platformFeePercentage,
  }: {
    initializer: PublicKey;
    admin: PublicKey;
    creator: PublicKey;
    platformFeeWallet: PublicKey;
    platformFeePercentage: BN;
  }): Promise<Transaction> {
    const tx = await this.program.methods
      .initialize(admin, creator, platformFeeWallet, platformFeePercentage)
      .accounts({ initializer })
      .transaction();

    const { tx: createPlatformFeeTokenAccountTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(NATIVE_MINT),
        initializer,
        platformFeeWallet
      );

    if (isValidTransaction(createPlatformFeeTokenAccountTx)) {
      tx.add(createPlatformFeeTokenAccountTx);
    }

    return tx;
  }

  async initializeSharedLookupTable({
    admin,
  }: {
    admin: Keypair;
  }): Promise<PublicKey> {
    console.log("creating new shared lookup table");
    const newLookupTable = await createLookupTable(this.connection, admin);

    await addAddressesToTable(this.connection, admin, newLookupTable, [
      this.program.programId,
      this.programStatePDA,
      await this.getPlatformFeeTokenAccount(),
      SYSTEM_PROGRAM_ID,
      NATIVE_MINT,
      TOKEN_PROGRAM_ID,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    ]);

    this.sharedLookupTable = newLookupTable.toBase58();
    return newLookupTable;
  }

  async addBaksetToSharedLookupTable({
    basketId,
    admin,
  }: {
    basketId: BN;
    admin: Keypair;
  }): Promise<void> {
    const basketConfigPDA = this.basketConfigPDA({ basketId });
    const basketMintPDA = this.basketMintPDA({ basketId });
    const creatorFeeTokenAccount = await this.getCreatorFeeTokenAccount({
      basketId,
    });
    const basketWsolAccount = await getTokenAccount(
      this.connection,
      NATIVE_MINT,
      basketConfigPDA
    );
    await addAddressesToTable(
      this.connection,
      admin,
      new PublicKey(this.sharedLookupTable),
      [
        basketConfigPDA,
        basketMintPDA,
        creatorFeeTokenAccount,
        basketWsolAccount,
      ]
    );
  }

  /**
   * Transfers the admin role to a new account.
   * @param admin - The current admin account.
   * @param newAdmin - The new admin account.
   * @returns A promise that resolves to a transaction.
   */
  async transferAdmin({
    admin,
    newAdmin,
  }: {
    admin: PublicKey;
    newAdmin: PublicKey;
  }): Promise<Transaction> {
    return await this.program.methods
      .transferAdmin(newAdmin)
      .accounts({ admin })
      .transaction();
  }

  /**
   * Updates the rebalance margin.
   * @param admin - The admin account.
   * @param newMargin - The new margin.
   * @returns A promise that resolves to a transaction.
   */
  async updateRebalanceMargin({
    admin,
    newMargin,
  }: {
    admin: PublicKey;
    newMargin: number;
  }): Promise<Transaction> {
    return await this.program.methods
      .updateRebalanceMargin(new BN(newMargin))
      .accounts({ admin, programState: this.programStatePDA })
      .transaction();
  }

  /**
   * Updates the fee. 10000 = 100% => 1000 = 1%
   * @param admin - The admin account.
   * @param newCreatorFeePercentage - The new creator fee percentage.
   * @param newPlatformFeePercentage - The new platform fee percentage.
   * @returns A promise that resolves to a transaction.
   */
  async updateFee({
    admin,
    newCreatorFeePercentage,
    newPlatformFeePercentage,
  }: {
    admin: PublicKey;
    newCreatorFeePercentage: number;
    newPlatformFeePercentage: number;
  }): Promise<Transaction> {
    return await this.program.methods
      .updateFee(
        new BN(newCreatorFeePercentage),
        new BN(newPlatformFeePercentage)
      )
      .accounts({ admin, programState: this.programStatePDA })
      .transaction();
  }

  /**
   * Updates the platform fee wallet.
   * @param admin - The admin account.
   * @param newPlatformFeeWallet - The new platform fee wallet.
   * @returns A promise that resolves to a transaction.
   */
  async updatePlatformFeeWallet({
    admin,
    newPlatformFeeWallet,
  }: {
    admin: PublicKey;
    newPlatformFeeWallet: PublicKey;
  }): Promise<Transaction> {
    return await this.program.methods
      .updatePlatformFeeWallet(newPlatformFeeWallet)
      .accounts({ admin, programState: this.programStatePDA })
      .transaction();
  }

  async updateWhitelistedCreators({
    admin,
    newWhitelistedCreators,
  }: {
    admin: PublicKey;
    newWhitelistedCreators: PublicKey[];
  }): Promise<Transaction> {
    return await this.program.methods
      .updateWhitelistedCreators(newWhitelistedCreators)
      .accounts({ admin, programState: this.programStatePDA })
      .transaction();
  }

  /**
   * Creates vaults account for all basket.
   * @param creator - The creator account.
   * @param args - The basket arguments.
   * @param basketId - The basket ID.
   * @returns A promise that resolves to a transaction.
   */
  async createBasketVaultAccounts({
    creator,
    args,
    basketId,
  }: {
    creator: PublicKey;
    args: CreateBasketArgs;
    basketId: BN;
  }): Promise<{ vaults: PublicKey[]; tx: Transaction }> {
    const basketConfig = this.basketConfigPDA({ basketId });

    const tx = new Transaction();
    const vaults: PublicKey[] = [];

    for (let i = 0; i < args.components.length; i++) {
      const { tokenAccount: outputTokenAccount, tx: outputTx } =
        await getOrCreateTokenAccountTx(
          this.connection,
          new PublicKey(args.components[i].mint),
          creator,
          basketConfig
        );
      tx.add(outputTx);
      vaults.push(outputTokenAccount);
    }

    return { vaults, tx };
  }

  /**
   * Creates a basket.
   * @param creator - The creator account.
   * @param args - The basket arguments.
   * @param basketId - The basket ID.
   * @returns A promise that resolves to a transaction.
   */
  async createBasket({
    creator,
    args,
    basketId,
  }: {
    creator: PublicKey;
    args: CreateBasketArgs;
    basketId: BN;
  }): Promise<Transaction> {
    const basketMint = this.basketMintPDA({ basketId });

    const createBasketTx = await this.program.methods
      .createBasket(args)
      .accountsPartial({
        creator,
        programState: this.programStatePDA,
        metadataAccount: this.metadataPDA({ mint: basketMint }),
        basketConfig: this.basketConfigPDA({ basketId }),
        basketMint: basketMint,
      })
      .transaction();

    const { tx: createPlatformFeeTokenAccountTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(NATIVE_MINT),
        creator,
        creator
      );

    if (isValidTransaction(createPlatformFeeTokenAccountTx)) {
      createBasketTx.add(createPlatformFeeTokenAccountTx);
    }

    return createBasketTx;
  }

  /**
   * Creates a basket.
   * @param creator - The creator account.
   * @param basketId - The basket ID.
   * @param newRebalancer - New rebalancer in the basket
   * @returns A promise that resolves to a transaction.
   */
  async updateRebalancer({
    creator,
    basketId,
    newRebalancer,
  }: {
    creator: PublicKey;
    basketId: BN;
    newRebalancer: PublicKey;
  }): Promise<Transaction> {
    return await this.program.methods
      .updateRebalancer(newRebalancer)
      .accountsPartial({
        creator,
        basketConfig: this.basketConfigPDA({ basketId }),
      })
      .transaction();
  }

  /**
   * Deposits WSOL into the basket.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount of WSOL to deposit.
   * @returns A promise that resolves to a transaction.
   */
  async depositWsol({
    user,
    basketId,
    amount,
    userWsolAccount,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
    userWsolAccount: PublicKey;
  }): Promise<Transaction> {
    const basketConfig = this.basketConfigPDA({ basketId });
    const tx = new Transaction();

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        NATIVE_MINT,
        user,
        basketConfig
      );

    if (isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const depositWsolTx = await this.program.methods
      .depositWsol(new BN(amount))
      .accountsPartial({
        user,
        programState: this.programStatePDA,
        userFund: this.userFundPDA({ user, basketId }),
        basketConfig: basketConfig,
        userWsolAccount,
        vaultWsolAccount: outputTokenAccount,
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
      })
      .transaction();

    tx.add(depositWsolTx);

    return tx;
  }

  async getMayanBaseSwapTxs({
    fromAddress,
    toAddress,
    baseTokens,
    amount = 0.017,
  }: {
    fromAddress: string;
    toAddress: string;
    baseTokens: string[];
    amount?: number;
  }) {
    // const baseTokens = [
    //   '0x4F9Fd6Be4a90f2620860d680c0d4d5Fb53d1A825',
    //   '0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b',
    //   '0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935',
    //   '0x940181a94a35a4569e4529a3cdfb74e38fd98631',
    //   '0xc0041ef357b183448b235a8ea73ce4e4ec8c265f',
    // ]

    // const baseAddress = '0xe215E8C50690F2a7Dc7C5A9E907acDCe8A033B97'

    const asyncTasks = [];

    asyncTasks.push(this.jito.getTipAccounts());
    asyncTasks.push(this.jito.getTipInformation());
    asyncTasks.push(this.connection.getLatestBlockhash("confirmed"));

    const [tipAccounts, tipInformation, recentBlockhash] = await Promise.all(
      asyncTasks
    );

    const serializedTxs: string[] = [];

    const mayanSwapTxs = [];

    baseTokens.forEach(async (token) => {
      const mayanSwapTx = getMayanSwapTx({
        connection: this.connection,
        amount: amount,
        fromToken: NATIVE_MINT.toBase58(),
        toToken: token,
        fromAddress,
        toAddress,
      });

      mayanSwapTxs.push(mayanSwapTx);
    });

    const mayanSwapTxsResult = await Promise.all(mayanSwapTxs);

    for (let i = 0; i < baseTokens.length; i++) {
      const tx = new Transaction();

      // if (i == 0) {
      //   const { tx: createNativeMintATATx } = await getOrCreateNativeMintATA(
      //     this.connection,
      //     new PublicKey(fromAddress),
      //     new PublicKey(fromAddress)
      //   );

      //   if (isValidTransaction(createNativeMintATATx)) {
      //     tx.add(createNativeMintATATx);
      //   }

      //   const instructions = wrapSOLInstruction(
      //     new PublicKey(fromAddress),
      //     amount * baseTokens.length * LAMPORTS_PER_SOL
      //   );

      //   tx.add(...instructions);
      // }

      const mayanSwapTx = mayanSwapTxsResult[i];

      tx.add(...mayanSwapTx.instructions);

      if (i == baseTokens.length - 1) {
        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: mayanSwapTx.lookupTables,
          signer: new PublicKey(fromAddress),
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });

        serializedTxs.push(serializedTx);
      } else {
        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: mayanSwapTx.lookupTables,
          signer: new PublicKey(fromAddress),
        });

        serializedTxs.push(serializedTx);
      }
    }

    return serializedTxs;
  }

  /**
   * Deposits a component into the basket.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount of component to deposit.
   * @param mint - The mint of the component.
   * @returns A promise that resolves to a transaction.
   */
  async depositComponent({
    user,
    basketId,
    amount,
    mint,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
    mint: PublicKey;
  }): Promise<Transaction> {
    try {
      const basketConfig = this.basketConfigPDA({ basketId });
      const tx = new Transaction();

      const { tokenAccount: userTokenAccount, tx: userTokenTx } =
        await getOrCreateTokenAccountTx(this.connection, mint, user, user);

      if (isValidTransaction(userTokenTx)) {
        tx.add(userTokenTx);
      }

      const { tokenAccount: outputTokenAccount, tx: outputTx } =
        await getOrCreateTokenAccountTx(
          this.connection,
          mint,
          user,
          basketConfig
        );

      if (isValidTransaction(outputTx)) {
        tx.add(outputTx);
      }

      const depositComponentTx = await this.program.methods
        .depositComponent(new BN(amount))
        .accountsPartial({
          user,
          programState: this.programStatePDA,
          userFund: this.userFundPDA({ user, basketId }),
          basketConfig: basketConfig,
          userTokenAccount,
          vaultTokenAccount: outputTokenAccount,
          platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
          creatorTokenAccount: await this.getCreatorFeeTokenAccount({
            basketId,
          }),
        })
        .transaction();

      tx.add(depositComponentTx);

      return tx;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * Buys a component.
   * @param userSourceOwner - The user source owner account.
   * @param basketId - The basket ID.
   * @param maxAmountIn - The maximum amount in.
   * @param amountOut - The amount out.
   * @param ammId - The AMM ID.
   * @returns A promise that resolves to a transaction.
   */
  async buyComponent({
    userSourceOwner,
    basketId,
    maxAmountIn,
    amountOut,
    ammId,
    unwrapSol = true,
  }: {
    userSourceOwner: PublicKey;
    basketId: BN;
    maxAmountIn: number;
    amountOut: number;
    ammId: string;
    unwrapSol?: boolean;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const data = await this.raydium.liquidity.getPoolInfoFromRpc({
      poolId: ammId,
    });
    const inputMint = NATIVE_MINT;
    const basketConfig = this.basketConfigPDA({ basketId });

    const poolKeys = data.poolKeys;
    const baseIn = inputMint.toString() === poolKeys.mintA.address;

    const [mintIn, mintOut] = baseIn
      ? [poolKeys.mintA.address, poolKeys.mintB.address]
      : [poolKeys.mintB.address, poolKeys.mintA.address];

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(mintIn),
      userSourceOwner
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(mintOut),
        userSourceOwner,
        basketConfig
      );

    if (isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const buyComponentTx = await this.program.methods
      .buyComponent(new BN(maxAmountIn), new BN(amountOut))
      .accountsPartial({
        userSourceOwner: userSourceOwner,
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        amm: new PublicKey(ammId),
        userFund: this.userFundPDA({ user: userSourceOwner, basketId }),
        ammAuthority: new PublicKey(poolKeys.authority),
        ammOpenOrders: new PublicKey(poolKeys.openOrders),
        ammCoinVault: new PublicKey(poolKeys.vault.A),
        ammPcVault: new PublicKey(poolKeys.vault.B),
        marketProgram: new PublicKey(poolKeys.marketProgramId),
        market: new PublicKey(poolKeys.marketId),
        marketBids: new PublicKey(poolKeys.marketBids),
        marketAsks: new PublicKey(poolKeys.marketAsks),
        marketEventQueue: new PublicKey(poolKeys.marketEventQueue),
        marketCoinVault: new PublicKey(poolKeys.marketBaseVault),
        marketPcVault: new PublicKey(poolKeys.marketQuoteVault),
        marketVaultSigner: new PublicKey(poolKeys.marketAuthority),
        ammProgram: new PublicKey(poolKeys.programId),
        userTokenSource: inputTokenAccount,
        vaultTokenDestination: outputTokenAccount,
        vaultTokenDestinationMint: new PublicKey(mintOut),
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
      })
      .transaction();

    tx.add(buyComponentTx);

    if (unwrapSol && inputMint === NATIVE_MINT) {
      tx.add(unwrapSolIx(inputTokenAccount, userSourceOwner, userSourceOwner));
    }
    return tx;
  }

  /**
   * Buys a component CPMM.
   * @param user - The user source owner account.
   * @param basketId - The basket ID.
   * @param maxAmountIn - The maximum amount in.
   * @param amountOut - The amount out.
   * @param ammId - The AMM ID.
   * @returns A promise that resolves to a transaction.
   */
  async buyComponentCpmm({
    user,
    basketId,
    amountOut,
    poolId,
  }: {
    user: PublicKey;
    basketId: BN;
    amountOut: number;
    poolId: string;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const data = await this.raydium.cpmm.getPoolInfoFromRpc(poolId);
    const basketConfig = this.basketConfigPDA({ basketId });

    const poolKeys = data.poolKeys;
    const poolInfo = data.poolInfo;
    const rpcData = data.rpcData;

    const baseIn = NATIVE_MINT.toString() === poolKeys.mintA.address;

    const [mintA, mintB] = [
      new PublicKey(poolInfo.mintA.address),
      new PublicKey(poolInfo.mintB.address),
    ];

    const [mintIn, mintOut] = baseIn
      ? [poolKeys.mintA.address, poolKeys.mintB.address]
      : [poolKeys.mintB.address, poolKeys.mintA.address];

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(mintIn),
      user
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(mintOut),
        user,
        basketConfig
      );

    if (isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const swapResult = CurveCalculator.swapBaseOut({
      poolMintA: poolInfo.mintA,
      poolMintB: poolInfo.mintB,
      tradeFeeRate: rpcData.configInfo!.tradeFeeRate,
      baseReserve: rpcData.baseReserve,
      quoteReserve: rpcData.quoteReserve,
      outputMint: mintOut,
      outputAmount: new BN(amountOut),
    });

    const buyComponentCpmmTx = await this.program.methods
      .buyComponentCpmm(swapResult.amountIn, new BN(amountOut))
      .accountsPartial({
        user: user,
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        userFund: this.userFundPDA({ user, basketId }),
        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolInfo.id),
        authority: new PublicKey(poolKeys.authority),
        userTokenSource: inputTokenAccount,
        vaultTokenDestination: outputTokenAccount,
        userTokenSourceMint: baseIn ? mintA : mintB,
        vaultTokenDestinationMint: baseIn ? mintB : mintA,
        inputVault: new PublicKey(poolKeys.vault[baseIn ? "A" : "B"]),
        outputVault: new PublicKey(poolKeys.vault[baseIn ? "B" : "A"]),
        inputTokenProgram: new PublicKey(
          poolInfo[baseIn ? "mintA" : "mintB"].programId ?? TOKEN_PROGRAM_ID
        ),
        outputTokenProgram: new PublicKey(
          poolInfo[baseIn ? "mintB" : "mintA"].programId ?? TOKEN_PROGRAM_ID
        ),
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
        observationState: getPdaObservationId(
          new PublicKey(poolInfo.programId),
          new PublicKey(poolInfo.id)
        ).publicKey,
      })
      .transaction();

    tx.add(buyComponentCpmmTx);
    return tx;
  }

  /**
   * Buys a component using CLMM from Raydium.
   * @param user - The user source owner account.
   * @param basketId - The basket ID.
   * @param maxAmountIn - The maximum amount in.
   * @param amountOut - The amount out.
   * @param poolId - The CLMM pool ID.
   * @returns A promise that resolves to a transaction.
   */
  async buyComponentClmm({
    user,
    basketId,
    amountOut,
    outputMint,
    poolId,
    slippage,
  }: {
    user: PublicKey;
    basketId: BN;
    amountOut: BN;
    outputMint: PublicKey;
    poolId: string;
    slippage: number;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketConfig = this.basketConfigPDA({ basketId });

    const data = await this.raydium.clmm.getPoolInfoFromRpc(poolId);
    const poolInfo = data.poolInfo;
    const poolKeys = data.poolKeys;
    const clmmPoolInfo = data.computePoolInfo;
    const tickCache = data.tickData;
    const { remainingAccounts, ...res } = PoolUtils.computeAmountIn({
      poolInfo: clmmPoolInfo,
      tickArrayCache: tickCache[poolId],
      amountOut,
      baseMint: outputMint,
      slippage,
      epochInfo: await this.raydium.fetchEpochInfo(),
    });

    let sqrtPriceLimitX64: BN;
    sqrtPriceLimitX64 =
      outputMint.toString() === poolInfo.mintB.address
        ? MIN_SQRT_PRICE_X64.add(new BN(1))
        : MAX_SQRT_PRICE_X64.sub(new BN(1));

    const [programId, id] = [
      new PublicKey(poolInfo.programId),
      new PublicKey(poolInfo.id),
    ];

    const [mintAVault, mintBVault] = [
      new PublicKey(poolKeys.vault.A),
      new PublicKey(poolKeys.vault.B),
    ];
    const [mintA, mintB] = [
      new PublicKey(poolInfo.mintA.address),
      new PublicKey(poolInfo.mintB.address),
    ];
    const baseIn = NATIVE_MINT.toString() === poolKeys.mintA.address;

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(NATIVE_MINT),
      user
    );

    const {
      tokenAccount: outputTokenAccount,
      tx: outputTx,
      tokenProgram: outputTokenProgram,
    } = await getOrCreateTokenAccountTx(
      this.connection,
      new PublicKey(baseIn ? mintB : mintA),
      user,
      basketConfig
    );

    if (isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const buyComponentTx = await this.program.methods
      .buyComponentClmm(
        new BN(amountOut),
        res.maxAmountIn.amount,
        sqrtPriceLimitX64
      )
      .accountsPartial({
        user: user,
        userFund: this.userFundPDA({ user, basketId }),
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolKeys.id),
        userTokenSource: inputTokenAccount,
        userTokenSourceMint: NATIVE_MINT,
        vaultTokenDestination: outputTokenAccount,
        vaultTokenDestinationMint: baseIn ? mintB : mintA,
        outputTokenProgram,
        inputVault: baseIn ? mintAVault : mintBVault,
        outputVault: baseIn ? mintBVault : mintAVault,
        observationState: new PublicKey(clmmPoolInfo.observationId),
      })
      .remainingAccounts(
        await buildClmmRemainingAccounts(
          remainingAccounts,
          getPdaExBitmapAccount(programId, id).publicKey
        )
      )
      .transaction();

    tx.add(buyComponentTx);
    return tx;
  }

  /**
   * Sells a component.
   * @param user - The user account.
   * @param inputMint - The input mint.
   * @param basketId - The basket ID.
   * @param amountIn - The amount in.
   * @param minimumAmountOut - The minimum amount out.
   * @param ammId - The AMM ID.
   * @returns A promise that resolves to a transaction.
   */
  async sellComponent({
    user,
    inputMint,
    basketId,
    amountIn,
    minimumAmountOut,
    ammId,
    createNativeMintATA,
    unwrapSol,
  }: {
    user: PublicKey;
    inputMint: PublicKey;
    basketId: BN;
    amountIn: number;
    minimumAmountOut: number;
    ammId: string;
    createNativeMintATA?: boolean;
    unwrapSol?: boolean;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketMint = this.basketMintPDA({ basketId });
    const data = await this.raydium.liquidity.getPoolInfoFromRpc({
      poolId: ammId,
    });

    const poolKeys = data.poolKeys;
    const baseIn = inputMint.toString() === poolKeys.mintA.address;

    const [mintIn, mintOut] = baseIn
      ? [poolKeys.mintA.address, poolKeys.mintB.address]
      : [poolKeys.mintB.address, poolKeys.mintA.address];

    const basketConfig = this.basketConfigPDA({ basketId });

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(mintIn),
      basketConfig
    );

    const { tokenAccount: outputTokenAccount, tx: createNativeMintATATx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(mintOut),
        user,
        user
      );

    if (createNativeMintATA && isValidTransaction(createNativeMintATATx)) {
      tx.add(createNativeMintATATx);
    }

    const sellComponentTx = await this.program.methods
      .sellComponent(new BN(amountIn), new BN(minimumAmountOut))
      .accountsPartial({
        user: user,
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        basketMint: basketMint,
        amm: new PublicKey(ammId),
        userFund: this.userFundPDA({ user, basketId }),
        ammAuthority: new PublicKey(poolKeys.authority),
        ammOpenOrders: new PublicKey(poolKeys.openOrders),
        ammCoinVault: new PublicKey(poolKeys.vault.A),
        ammPcVault: new PublicKey(poolKeys.vault.B),
        marketProgram: new PublicKey(poolKeys.marketProgramId),
        market: new PublicKey(poolKeys.marketId),
        marketBids: new PublicKey(poolKeys.marketBids),
        marketAsks: new PublicKey(poolKeys.marketAsks),
        marketEventQueue: new PublicKey(poolKeys.marketEventQueue),
        marketCoinVault: new PublicKey(poolKeys.marketBaseVault),
        marketPcVault: new PublicKey(poolKeys.marketQuoteVault),
        marketVaultSigner: new PublicKey(poolKeys.marketAuthority),
        ammProgram: new PublicKey(poolKeys.programId),
        userTokenDestination: outputTokenAccount,
        vaultTokenSource: inputTokenAccount,
        vaultTokenSourceMint: new PublicKey(mintIn),
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
      })
      .transaction();
    tx.add(sellComponentTx);

    if (unwrapSol) {
      tx.add(createCloseAccountInstruction(outputTokenAccount, user, user));
    }

    return tx;
  }

  /**
   * Sell a component CPMM.
   * @param user - The user also payer.
   * @param basketId - The basket ID.
   * @param maxAmountIn - The maximum amount in.
   * @param amountOut - The amount out.
   * @param ammId - The AMM ID.
   * @returns A promise that resolves to a transaction.
   */
  async sellComponentCpmm({
    user,
    basketId,
    inputMint,
    amountIn,
    minimumAmountOut,
    poolId,
    createNativeMintATA,
    unwrapSol,
  }: {
    user: PublicKey;
    basketId: BN;
    inputMint: PublicKey;
    amountIn: number;
    minimumAmountOut: number;
    poolId: string;
    createNativeMintATA?: boolean;
    unwrapSol?: boolean;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketConfig = this.basketConfigPDA({ basketId });
    const basketMint = this.basketMintPDA({ basketId });

    const data = await this.raydium.cpmm.getPoolInfoFromRpc(poolId);

    const poolKeys = data.poolKeys;
    const poolInfo = data.poolInfo;
    const baseIn = inputMint.toString() === poolKeys.mintA.address;

    const [mintA, mintB] = [
      new PublicKey(poolInfo.mintA.address),
      new PublicKey(poolInfo.mintB.address),
    ];

    const [mintIn, mintOut] = baseIn
      ? [poolKeys.mintA.address, poolKeys.mintB.address]
      : [poolKeys.mintB.address, poolKeys.mintA.address];

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(mintIn),
      basketConfig
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(mintOut),
        user,
        user
      );

    if (createNativeMintATA && isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const sellComponentTx = await this.program.methods
      .sellComponentCpmm(new BN(amountIn), new BN(minimumAmountOut))
      .accountsPartial({
        user: user,
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        userFund: this.userFundPDA({ user, basketId }),
        basketMint: basketMint,
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
        authority: new PublicKey(poolKeys.authority),
        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolInfo.id),
        vaultTokenSource: inputTokenAccount,
        userTokenDestination: outputTokenAccount,
        vaultTokenSourceMint: baseIn ? mintA : mintB,
        userTokenDestinationMint: baseIn ? mintB : mintA,
        inputVault: new PublicKey(poolKeys.vault[baseIn ? "A" : "B"]),
        outputVault: new PublicKey(poolKeys.vault[baseIn ? "B" : "A"]),
        inputTokenProgram: new PublicKey(
          poolInfo[baseIn ? "mintA" : "mintB"].programId ?? TOKEN_PROGRAM_ID
        ),
        outputTokenProgram: new PublicKey(
          poolInfo[baseIn ? "mintB" : "mintA"].programId ?? TOKEN_PROGRAM_ID
        ),
        observationState: getPdaObservationId(
          new PublicKey(poolInfo.programId),
          new PublicKey(poolInfo.id)
        ).publicKey,
      })
      .transaction();

    tx.add(sellComponentTx);

    if (unwrapSol) {
      tx.add(createCloseAccountInstruction(outputTokenAccount, user, user));
    }
    return tx;
  }

  /**
   * Sell a component CLMM.
   * @param user - The user also payer.
   * @param basketId - The basket ID.
   * @param maxAmountIn - The maximum amount in.
   * @param amountOut - The amount out.
   * @param ammId - The AMM ID.
   * @returns A promise that resolves to a transaction.
   */
  async sellComponentClmm({
    user,
    basketId,
    amountIn,
    inputMint,
    poolId,
    slippage,
    createNativeMintATA,
    unwrapSol,
  }: {
    user: PublicKey;
    basketId: BN;
    amountIn: BN;
    inputMint: PublicKey;
    poolId: string;
    slippage: number;
    createNativeMintATA?: boolean;
    unwrapSol?: boolean;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketConfig = this.basketConfigPDA({ basketId });

    const data = await this.raydium.clmm.getPoolInfoFromRpc(poolId);
    const poolInfo = data.poolInfo;
    const poolKeys = data.poolKeys;
    const clmmPoolInfo = data.computePoolInfo;
    const tickCache = data.tickData;
    const baseIn = inputMint.toString() === poolInfo.mintA.address;

    const { minAmountOut, remainingAccounts } =
      PoolUtils.computeAmountOutFormat({
        poolInfo: clmmPoolInfo,
        tickArrayCache: tickCache[poolId],
        amountIn,
        tokenOut: poolInfo[baseIn ? "mintB" : "mintA"],
        slippage,
        epochInfo: await this.raydium.fetchEpochInfo(),
      });

    let sqrtPriceLimitX64: BN;
    sqrtPriceLimitX64 = baseIn
      ? MIN_SQRT_PRICE_X64.add(new BN(1))
      : MAX_SQRT_PRICE_X64.sub(new BN(1));

    const [programId, id] = [
      new PublicKey(poolInfo.programId),
      new PublicKey(poolInfo.id),
    ];

    // const [mintAVault, mintBVault] = [
    //   new PublicKey(poolKeys.vault.A),
    //   new PublicKey(poolKeys.vault.B),
    // ];
    const [mintA, mintB] = [
      new PublicKey(poolInfo.mintA.address),
      new PublicKey(poolInfo.mintB.address),
    ];

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(inputMint),
      basketConfig
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(NATIVE_MINT),
        user,
        user
      );

    if (createNativeMintATA && isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    // @TODO should be minAmountOut.amount.raw but I get negative value
    const otherAmountThreshold = new BN(0);

    const sellComponentTx = await this.program.methods
      .sellComponentClmm(amountIn, otherAmountThreshold, sqrtPriceLimitX64)
      .accountsPartial({
        user: user,
        programState: this.programStatePDA,
        basketConfig: basketConfig,
        userFund: this.userFundPDA({ user, basketId }),
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
        basketMint: this.basketMintPDA({ basketId }),

        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolInfo.id),
        vaultTokenSource: inputTokenAccount,
        userTokenDestination: outputTokenAccount,
        vaultTokenSourceMint: baseIn ? mintA : mintB,
        userTokenDestinationMint: baseIn ? mintB : mintA,
        inputVault: new PublicKey(poolKeys.vault[baseIn ? "A" : "B"]),
        outputVault: new PublicKey(poolKeys.vault[baseIn ? "B" : "A"]),
        inputTokenProgram: new PublicKey(
          poolInfo[baseIn ? "mintA" : "mintB"].programId ?? TOKEN_PROGRAM_ID
        ),
        observationState: new PublicKey(clmmPoolInfo.observationId),
      })
      .remainingAccounts(
        await buildClmmRemainingAccounts(
          remainingAccounts,
          getPdaExBitmapAccount(programId, id).publicKey
        )
      )
      .transaction();

    tx.add(sellComponentTx);

    if (unwrapSol) {
      tx.add(createCloseAccountInstruction(outputTokenAccount, user, user));
    }
    return tx;
  }

  /**
   * Withdraws a WSOL from the basket.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount of WSOL to deposit.
   * @returns A promise that resolves to a transaction.
   */
  async withdrawWsol({
    user,
    basketId,
    amount,
    userWsolAccount,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
    userWsolAccount: PublicKey;
  }): Promise<Transaction> {
    const basketConfig = this.basketConfigPDA({ basketId });
    const tx = new Transaction();

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        NATIVE_MINT,
        user,
        basketConfig
      );

    if (isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const withdrawWsolTx = await this.program.methods
      .withdrawWsol(new BN(amount))
      .accountsPartial({
        user,
        programState: this.programStatePDA,
        userFund: this.userFundPDA({ user, basketId }),
        basketConfig: basketConfig,
        userWsolAccount,
        vaultWsolAccount: outputTokenAccount,
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
      })
      .transaction();

    tx.add(withdrawWsolTx);

    return tx;
  }

  /**
   * Withdraws a component from the basket.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount of component to withdraw.
   * @param mint - The mint of the component.
   * @returns A promise that resolves to a transaction.
   */
  async withdrawComponent({
    user,
    basketId,
    amount,
    mint,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
    mint: PublicKey;
  }): Promise<Transaction> {
    const basketConfig = this.basketConfigPDA({ basketId });
    const tx = new Transaction();

    const { tokenAccount: vaultTokenAccount } = await getOrCreateTokenAccountTx(
      this.connection,
      mint,
      user,
      basketConfig
    );

    const { tokenAccount: userTokenAccount, tx: createUserTokenAccountTx } =
      await getOrCreateTokenAccountTx(this.connection, mint, user, user);

    if (isValidTransaction(createUserTokenAccountTx)) {
      tx.add(createUserTokenAccountTx);
    }

    const withdrawComponentTx = await this.program.methods
      .withdrawComponent(new BN(amount))
      .accountsPartial({
        user,
        programState: this.programStatePDA,
        userFund: this.userFundPDA({ user, basketId }),
        basketConfig: basketConfig,
        userTokenAccount,
        vaultTokenAccount,
        platformFeeTokenAccount: await this.getPlatformFeeTokenAccount(),
        creatorTokenAccount: await this.getCreatorFeeTokenAccount({ basketId }),
      })
      .transaction();

    tx.add(withdrawComponentTx);

    return tx;
  }

  /**
   * Mints a basket token.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount.
   * @returns A promise that resolves to a transaction.
   */
  async mintBasketToken({
    user,
    basketId,
    amount,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketMint = this.basketMintPDA({ basketId });
    const basketConfig = this.basketConfigPDA({ basketId });
    const userFund = this.userFundPDA({ user, basketId });
    const { tokenAccount: userBasketTokenAccount, tx: userBasketTokenTx } =
      await getOrCreateTokenAccountTx(this.connection, basketMint, user, user);
    if (isValidTransaction(userBasketTokenTx)) {
      tx.add(userBasketTokenTx);
    }
    const mintBasketTokenTx = await this.program.methods
      .mintBasketToken(new BN(amount))
      .accountsPartial({
        user,
        programState: this.programStatePDA,
        basketConfig,
        userFund,
        basketMint,
        userBasketTokenAccount,
      })
      .transaction();
    tx.add(mintBasketTokenTx);
    return tx;
  }

  /**
   * Mints a multichain basket token.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount.
   * @returns A promise that resolves to a transaction.
   */
  async mintMultichainBasketToken({
    user,
    basketId,
    amount,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: string;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketMint = this.basketMintPDA({ basketId });
    const basketConfig = this.basketConfigPDA({ basketId });
    const userFund = this.userFundPDA({ user, basketId });
    const { tokenAccount: userBasketTokenAccount, tx: userBasketTokenTx } =
      await getOrCreateTokenAccountTx(this.connection, basketMint, user, user);
    if (isValidTransaction(userBasketTokenTx)) {
      tx.add(userBasketTokenTx);
    }
    const mintBasketTokenTx = await this.program.methods
      .mintMultichainBasketToken(new BN(amount))
      .accountsPartial({
        user,
        programState: this.programStatePDA,
        basketConfig,
        userFund,
        basketMint,
        userBasketTokenAccount,
      })
      .transaction();
    tx.add(mintBasketTokenTx);
    return tx;
  }
  /**
   * Redeems a basket token.
   * @param user - The user account.
   * @param basketId - The basket ID.
   * @param amount - The amount.
   * @returns A promise that resolves to a transaction.
   */
  async redeemBasketToken({
    user,
    basketId,
    amount,
  }: {
    user: PublicKey;
    basketId: BN;
    amount: number;
  }): Promise<Transaction> {
    const basketMint = this.basketMintPDA({ basketId });
    const basketConfig = this.basketConfigPDA({ basketId });
    const userBasketTokenAccount = getAssociatedTokenAddressSync(
      basketMint,
      user,
      false
    );
    const burnBasketTokenTx = await this.program.methods
      .redeemBasketToken(new BN(amount))
      .accountsPartial({
        programState: this.programStatePDA,
        user,
        basketConfig,
        userFund: this.userFundPDA({ user, basketId }),
        basketMint,
        userBasketTokenAccount: userBasketTokenAccount,
      })
      .transaction();
    return burnBasketTokenTx;
  }

  /**
   * Starts rebalancing.
   * @param rebalancer - The rebalancer account.
   * @param basketId - The basket ID.
   * @returns A promise that resolves to a transaction.
   */
  async startRebalancing({
    rebalancer,
    basketId,
  }: {
    rebalancer: PublicKey;
    basketId: BN;
  }): Promise<Transaction> {
    const basketConfigData = await this.getBasketConfig({ basketId });
    if (!basketConfigData) {
      return null;
    } else {
      if (basketConfigData.isRebalancing) {
        return null;
      } else {
        return await this.program.methods
          .startRebalancing()
          .accountsPartial({
            rebalancer,
            basketConfig: this.basketConfigPDA({ basketId }),
          })
          .transaction();
      }
    }
  }

  /**
   * Stops rebalancing.
   * @param rebalancer - The rebalancer account.
   * @param basketId - The basket ID.
   * @returns A promise that resolves to a transaction.
   */
  async stopRebalancing({
    rebalancer,
    basketId,
  }: {
    rebalancer: PublicKey;
    basketId: BN;
  }): Promise<Transaction> {
    const basketPDA = this.basketConfigPDA({ basketId });

    return await this.program.methods
      .stopRebalancing()
      .accountsPartial({
        rebalancer,
        basketConfig: basketPDA,
      })
      .transaction();
  }

  /**
   * Executes rebalancing.
   * @param rebalancer - The rebalancer account.
   * @param isSwapBaseOut - Whether to swap base out.
   * @param amount - The amount in when swap base in, or the amount out when swap base out.
   * @param otherAmountThreshold - Maximum amount in or minimum amount out.
   * @param ammId - The AMM ID.
   * @param basketId - The basket ID.
   * @param inputMint - The input mint.
   * @param outputMint - The output mint.
   * @param createTokenAccount - Whether to create the output token account.
   * @returns A promise that resolves to a transaction or null.
   */
  async executeRebalancing({
    rebalancer,
    isSwapBaseOut,
    amount,
    otherAmountThreshold,
    ammId,
    basketId,
    inputMint,
    outputMint,
    createTokenAccount = true,
  }: {
    rebalancer: PublicKey;
    isSwapBaseOut: boolean;
    amount: string;
    otherAmountThreshold: string;
    ammId: string;
    basketId: BN;
    inputMint: PublicKey;
    outputMint: PublicKey;
    createTokenAccount?: boolean;
  }): Promise<Transaction | null> {
    const tx = new Transaction();
    const data = await this.raydium.liquidity.getPoolInfoFromRpc({
      poolId: ammId,
    });

    const basketMint = this.basketMintPDA({ basketId });
    const basketConfig = this.basketConfigPDA({ basketId });
    const poolKeys = data.poolKeys;

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(inputMint),
      basketConfig
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(outputMint),
        rebalancer,
        basketConfig
      );

    if (createTokenAccount && isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const amountIn = isSwapBaseOut ? otherAmountThreshold : amount;
    const amountOut = isSwapBaseOut ? amount : otherAmountThreshold;

    const executeRebalancingTx = await this.program.methods
      .executeRebalancing(isSwapBaseOut, new BN(amountIn), new BN(amountOut))
      .accountsPartial({
        rebalancer,
        basketConfig: this.basketConfigPDA({ basketId }),
        basketMint,
        amm: new PublicKey(ammId),
        ammAuthority: new PublicKey(poolKeys.authority),
        ammOpenOrders: new PublicKey(poolKeys.openOrders),
        ammCoinVault: new PublicKey(poolKeys.vault.A),
        ammPcVault: new PublicKey(poolKeys.vault.B),
        marketProgram: new PublicKey(poolKeys.marketProgramId),
        market: new PublicKey(poolKeys.marketId),
        marketBids: new PublicKey(poolKeys.marketBids),
        marketAsks: new PublicKey(poolKeys.marketAsks),
        marketEventQueue: new PublicKey(poolKeys.marketEventQueue),
        marketCoinVault: new PublicKey(poolKeys.marketBaseVault),
        marketPcVault: new PublicKey(poolKeys.marketQuoteVault),
        marketVaultSigner: new PublicKey(poolKeys.marketAuthority),
        ammProgram: new PublicKey(poolKeys.programId),
        vaultTokenSource: inputTokenAccount,
        vaultTokenDestination: outputTokenAccount,
        vaultTokenSourceMint: new PublicKey(inputMint),
        vaultTokenDestinationMint: new PublicKey(outputMint),
      })
      .transaction();
    tx.add(executeRebalancingTx);
    return tx;
  }

  async executeRebalancingCpmm({
    rebalancer,
    isSwapBaseOut,
    amount,
    otherAmountThreshold,
    poolId,
    basketId,
    inputMint,
    outputMint,
    createTokenAccount = true,
  }: {
    rebalancer: PublicKey;
    isSwapBaseOut: boolean;
    amount: string;
    otherAmountThreshold: string;
    poolId: string;
    basketId: BN;
    inputMint: PublicKey;
    outputMint: PublicKey;
    createTokenAccount?: boolean;
  }): Promise<Transaction | null> {
    const tx = new Transaction();
    const data = await this.raydium.cpmm.getPoolInfoFromRpc(poolId);
    const basketMint = this.basketMintPDA({ basketId });
    const basketConfig = this.basketConfigPDA({ basketId });

    const poolKeys = data.poolKeys;
    const poolInfo = data.poolInfo;

    const inputTokenAccount = await getTokenAccount(
      this.connection,
      new PublicKey(inputMint),
      basketConfig
    );

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(outputMint),
        rebalancer,
        basketConfig
      );

    if (createTokenAccount && isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }

    const isInputMintA = inputMint.toBase58() === poolKeys.mintA.address;

    let inputVault;
    let outputVault;
    let inputTokenProgram;
    let outputTokenProgram;
    let inputTokenMint;
    let outputTokenMint;

    if (isInputMintA) {
      inputVault = new PublicKey(poolKeys.vault.A);
      outputVault = new PublicKey(poolKeys.vault.B);
      inputTokenProgram = new PublicKey(poolKeys.mintA.programId);
      outputTokenProgram = new PublicKey(poolKeys.mintB.programId);
      inputTokenMint = new PublicKey(poolKeys.mintA.address);
      outputTokenMint = new PublicKey(poolKeys.mintB.address);
    } else {
      inputVault = new PublicKey(poolKeys.vault.B);
      outputVault = new PublicKey(poolKeys.vault.A);
      inputTokenProgram = new PublicKey(poolKeys.mintB.programId);
      outputTokenProgram = new PublicKey(poolKeys.mintA.programId);
      inputTokenMint = new PublicKey(poolKeys.mintB.address);
      outputTokenMint = new PublicKey(poolKeys.mintA.address);
    }

    const amountIn = isSwapBaseOut ? otherAmountThreshold : amount;
    const amountOut = isSwapBaseOut ? amount : otherAmountThreshold;

    const executeRebalancingTx = await this.program.methods
      .executeRebalancingCpmm(
        isSwapBaseOut,
        new BN(amountIn),
        new BN(amountOut)
      )
      .accountsPartial({
        rebalancer,
        basketConfig: this.basketConfigPDA({ basketId }),
        basketMint,
        authority: new PublicKey(poolKeys.authority),
        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolInfo.id),
        vaultTokenSourceMint: new PublicKey(inputMint),
        vaultTokenDestinationMint: new PublicKey(outputMint),
        vaultTokenSource: inputTokenAccount,
        vaultTokenDestination: outputTokenAccount,
        inputVault,
        outputVault,
        inputTokenProgram,
        outputTokenProgram,
        observationState: getPdaObservationId(
          new PublicKey(poolInfo.programId),
          new PublicKey(poolInfo.id)
        ).publicKey,
      })
      .transaction();
    tx.add(executeRebalancingTx);
    return tx;
  }

  /**
   * Execute rebalancing using Raydium CLMM (Concentrated Liquidity Market Maker) pool
   * @param rebalancer - The rebalancer's public key who has permission to rebalance
   * @param isSwapBaseOut - Whether this is a swap where amount specified is the output amount
   * @param basketId - The ID of the basket being rebalanced
   * @param amount - The amount to swap (either input or output amount depending on isSwapBaseOut)
   * @param slippage - Slippage in basis points
   * @param poolId - The Raydium CLMM pool ID to execute the swap on
   * @param inputMint - The mint address of the input token
   * @param outputMint - The mint address of the output token
   */
  async executeRebalancingClmm({
    rebalancer,
    isSwapBaseOut,
    basketId,
    amount,
    otherAmountThreshold,
    slippage,
    poolId,
    inputMint,
    outputMint,
    createTokenAccount = true,
  }: {
    rebalancer: PublicKey;
    isSwapBaseOut: boolean;
    basketId: BN;
    amount: string;
    otherAmountThreshold: string;
    slippage: number;
    poolId: string;
    inputMint: PublicKey;
    outputMint: PublicKey;
    createTokenAccount?: boolean;
  }): Promise<Transaction> {
    const tx = new Transaction();
    const basketConfigPDA = this.basketConfigPDA({ basketId });

    const data = await this.raydium.clmm.getPoolInfoFromRpc(poolId);
    const poolInfo = data.poolInfo;
    const poolKeys = data.poolKeys;
    const clmmPoolInfo = data.computePoolInfo;
    const tickCache = data.tickData;

    let remainingAccounts;

    // let otherAmountThreshold;
    const isInputMintA = inputMint.toBase58() === poolKeys.mintA.address;
    const sqrtPriceLimitX64 = isInputMintA
      ? MIN_SQRT_PRICE_X64.add(new BN(1))
      : MAX_SQRT_PRICE_X64.sub(new BN(1));
    if (isSwapBaseOut) {
      const computed = PoolUtils.computeAmountIn({
        poolInfo: clmmPoolInfo,
        tickArrayCache: tickCache[poolId],
        amountOut: new BN(amount),
        baseMint: outputMint,
        slippage,
        epochInfo: await this.raydium.fetchEpochInfo(),
      });
      remainingAccounts = computed.remainingAccounts;
    } else {
      const computed = PoolUtils.computeAmountOut({
        poolInfo: clmmPoolInfo,
        tickArrayCache: tickCache[poolId],
        amountIn: new BN(amount),
        baseMint: inputMint,
        slippage,
        epochInfo: await this.raydium.fetchEpochInfo(),
        catchLiquidityInsufficient: true,
      });

      remainingAccounts = computed.remainingAccounts;
      // @TODO should be computed.minAmountOut.amount, but it's not working
      // otherAmountThreshold = new BN(0);
    }

    const { tokenAccount: outputTokenAccount, tx: outputTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        outputMint,
        rebalancer,
        basketConfigPDA
      );

    if (createTokenAccount && isValidTransaction(outputTx)) {
      tx.add(outputTx);
    }
    const executeRabalancingClmmTx = await this.program.methods
      .executeRebalancingClmm(
        isSwapBaseOut,
        new BN(amount),
        new BN(otherAmountThreshold),
        sqrtPriceLimitX64
      )
      .accountsPartial({
        rebalancer,
        basketConfig: this.basketConfigPDA({ basketId }),
        basketMint: this.basketMintPDA({ basketId }),
        vaultWrappedSol: NATIVE_MINT,
        ammConfig: new PublicKey(poolKeys.config.id),
        poolState: new PublicKey(poolKeys.id),
        vaultTokenSource: await getTokenAccount(
          this.connection,
          inputMint,
          basketConfigPDA
        ),
        vaultTokenDestination: outputTokenAccount,
        inputVault: isInputMintA
          ? new PublicKey(poolKeys.vault.A)
          : new PublicKey(poolKeys.vault.B),
        outputVault: isInputMintA
          ? new PublicKey(poolKeys.vault.B)
          : new PublicKey(poolKeys.vault.A),
        inputTokenProgram: isInputMintA
          ? new PublicKey(poolKeys.mintA.programId)
          : new PublicKey(poolKeys.mintB.programId),
        outputTokenProgram: isInputMintA
          ? new PublicKey(poolKeys.mintB.programId)
          : new PublicKey(poolKeys.mintA.programId),
        observationState: new PublicKey(clmmPoolInfo.observationId),
        vaultTokenSourceMint: isInputMintA
          ? new PublicKey(poolKeys.mintA.address)
          : new PublicKey(poolKeys.mintB.address),
        vaultTokenDestinationMint: isInputMintA
          ? new PublicKey(poolKeys.mintB.address)
          : new PublicKey(poolKeys.mintA.address),
      })
      .remainingAccounts(
        await buildClmmRemainingAccounts(
          remainingAccounts,
          getPdaExBitmapAccount(
            new PublicKey(poolInfo.programId),
            new PublicKey(poolInfo.id)
          ).publicKey
        )
      )
      .transaction();
    tx.add(executeRabalancingClmmTx);
    return tx;
  }

  async addRaydiumAmmToAddressLookupTable({
    connection,
    signer,
    ammId,
    lookupTable,
  }: {
    connection: Connection;
    signer: Keypair;
    ammId: string;
    lookupTable?: PublicKey;
  }) {
    const data = await this.raydium.liquidity.getPoolInfoFromRpc({
      poolId: ammId,
    });
    const MAX_LOOKUP_TABLE_ADDRESS = 256;
    const poolKeys = data.poolKeys;

    const addressesKey = [
      new PublicKey(poolKeys.mintA.address),
      new PublicKey(poolKeys.mintB.address),
      new PublicKey(ammId),
      new PublicKey(poolKeys.authority),
      new PublicKey(poolKeys.openOrders),
      new PublicKey(poolKeys.vault.A),
      new PublicKey(poolKeys.vault.B),
      new PublicKey(poolKeys.marketProgramId),
      new PublicKey(poolKeys.marketId),
      new PublicKey(poolKeys.marketBids),
      new PublicKey(poolKeys.marketAsks),
      new PublicKey(poolKeys.marketEventQueue),
      new PublicKey(poolKeys.marketBaseVault),
      new PublicKey(poolKeys.marketQuoteVault),
      new PublicKey(poolKeys.marketAuthority),
      new PublicKey(poolKeys.programId),
    ];

    if (lookupTable) {
      const addressesStored = await findAddressesInTable(
        connection,
        lookupTable
      );
      const addressToAdd = addressesKey.filter(
        (address) => !addressesStored.some((stored) => stored.equals(address))
      );
      if (
        addressToAdd.length + addressesStored.length >=
        MAX_LOOKUP_TABLE_ADDRESS
      ) {
        throw Error("Exceeds 256 addresses of lookup table");
      }
      await addAddressesToTable(connection, signer, lookupTable, addressToAdd);
    } else {
      const newLookupTable = await createLookupTable(connection, signer);
      await addAddressesToTable(
        connection,
        signer,
        newLookupTable,
        addressesKey
      );
      return newLookupTable;
    }

    return lookupTable;
  }

  async addRaydiumCpmmToAddressLookupTable({
    connection,
    signer,
    poolId,
    lookupTable,
  }: {
    connection: Connection;
    signer: Keypair;
    poolId: string;
    lookupTable?: PublicKey;
  }) {
    const data = await this.raydium.cpmm.getPoolInfoFromRpc(poolId);
    const MAX_LOOKUP_TABLE_ADDRESS = 256;

    const poolKeys = data.poolKeys;
    const poolInfo = data.poolInfo;

    const addressesKey = [
      new PublicKey(poolKeys.mintA.address),
      new PublicKey(poolKeys.mintB.address),
      new PublicKey(poolId),
      new PublicKey(poolKeys.authority),
      new PublicKey(poolKeys.config.id),
      new PublicKey(poolInfo.id),
      new PublicKey(poolKeys.vault.A),
      new PublicKey(poolKeys.vault.B),
      new PublicKey(poolKeys.programId),
      getPdaObservationId(
        new PublicKey(poolInfo.programId),
        new PublicKey(poolInfo.id)
      ).publicKey,
    ];

    if (lookupTable) {
      const addressesStored = await findAddressesInTable(
        connection,
        lookupTable
      );
      const addressToAdd = addressesKey.filter(
        (address) => !addressesStored.some((stored) => stored.equals(address))
      );
      if (
        addressToAdd.length + addressesStored.length >=
        MAX_LOOKUP_TABLE_ADDRESS
      ) {
        throw Error("Exceeds 256 addresses of lookup table");
      }
      await addAddressesToTable(connection, signer, lookupTable, addressToAdd);
    } else {
      const newLookupTable = await createLookupTable(connection, signer);
      await addAddressesToTable(
        connection,
        signer,
        newLookupTable,
        addressesKey
      );
      return newLookupTable;
    }

    return lookupTable;
  }

  async addRaydiumClmmToAddressLookupTable({
    connection,
    signer,
    poolId,
    lookupTable,
  }: {
    connection: Connection;
    signer: Keypair;
    poolId: string;
    lookupTable?: PublicKey;
  }) {
    const data = await this.raydium.clmm.getPoolInfoFromRpc(poolId);
    const MAX_LOOKUP_TABLE_ADDRESS = 256;

    const poolKeys = data.poolKeys;
    const poolInfo = data.poolInfo;

    const addressesKey = [
      new PublicKey(poolKeys.mintA.address),
      new PublicKey(poolKeys.mintB.address),
      new PublicKey(poolId),
      new PublicKey(poolKeys.vault.A),
      new PublicKey(poolKeys.vault.B),
      new PublicKey(poolKeys.config.id),
      new PublicKey(poolKeys.programId),
      getPdaObservationId(
        new PublicKey(poolInfo.programId),
        new PublicKey(poolInfo.id)
      ).publicKey,
      new PublicKey(poolKeys.exBitmapAccount),
    ];

    if (lookupTable) {
      const addressesStored = await findAddressesInTable(
        connection,
        lookupTable
      );
      const addressToAdd = addressesKey.filter(
        (address) => !addressesStored.some((stored) => stored.equals(address))
      );
      if (
        addressToAdd.length + addressesStored.length >=
        MAX_LOOKUP_TABLE_ADDRESS
      ) {
        throw Error("Exceeds 256 addresses of lookup table");
      }
      await addAddressesToTable(connection, signer, lookupTable, addressToAdd);
    } else {
      const newLookupTable = await createLookupTable(connection, signer);
      await addAddressesToTable(
        connection,
        signer,
        newLookupTable,
        addressesKey
      );
      return newLookupTable;
    }

    return lookupTable;
  }

  async generateLookupTableAccount(): Promise<AddressLookupTableAccount[]> {
    const lut = (
      await this.connection.getAddressLookupTable(
        new PublicKey(this.sharedLookupTable)
      )
    ).value;
    return [lut];
  }

  /**
   * Creates a bundle of transactions for buying components and minting basket tokens
   * @param params Bundle creation parameters
   * @returns Array of serialized transactions
   */
  async createBuyAndMintBundle({
    user,
    basketId,
    slippage,
    inputAmount,
    mintAmount,
    buySwapData,
    swapsPerBundle,
    tokenInfo,
  }: {
    user: PublicKey;
    basketId: BN;
    slippage: number;
    inputAmount: string;
    mintAmount: string;
    buySwapData: BuySwapData[];
    swapsPerBundle: number;
    tokenInfo: TokenInfo[];
  }): Promise<string[]> {
    let tx = new Transaction();
    const serializedTxs: string[] = [];

    // Create WSOL account and wrap SOL
    const { tokenAccount: wsolAccount, tx: createWsolAtaTx } =
      await getOrCreateTokenAccountTx(
        this.connection,
        new PublicKey(NATIVE_MINT),
        user,
        user
      );

    if (isValidTransaction(createWsolAtaTx)) {
      tx.add(createWsolAtaTx);
    }

    const wrappedSolIx = wrapSOLInstruction(user, Number(inputAmount));
    tx.add(...wrappedSolIx);

    const deposit = findDepositAndRemoveInPlace(buySwapData);

    if (deposit) {
      const depositIx = await this.depositWsol({
        user,
        basketId,
        amount: deposit.amountIn,
        userWsolAccount: wsolAccount,
      });
      tx.add(depositIx);
    }

    const tokenLuts: Promise<
      RpcResponseAndContext<AddressLookupTableAccount>
    >[] = [];

    // create all the buy component transactions
    const buyComponentTxs: Promise<Transaction>[] = buySwapData.map((swap) => {
      const token = getTokenFromTokenInfo(tokenInfo, swap.mint);
      tokenLuts.push(
        this.connection.getAddressLookupTable(new PublicKey(token.lut))
      );
      let buyComponentTx;
      switch (token.type) {
        case "amm":
          buyComponentTx = this.buyComponent({
            userSourceOwner: user,
            basketId,
            maxAmountIn: Number(swap.maxAmountIn),
            amountOut: Number(swap.amountOut),
            ammId: token.poolId,
            unwrapSol: false,
          });
          break;
        case "clmm":
          buyComponentTx = this.buyComponentClmm({
            user,
            basketId,
            amountOut: new BN(swap.amountOut),
            outputMint: new PublicKey(token.mint),
            poolId: token.poolId,
            slippage,
          });
          break;
        case "cpmm":
          buyComponentTx = this.buyComponentCpmm({
            user,
            basketId,
            amountOut: Number(swap.amountOut),
            poolId: token.poolId,
          });
          break;
      }
      return buyComponentTx;
    });

    const asyncTasks = [];
    asyncTasks.push(this.jito.getTipAccounts());
    asyncTasks.push(this.jito.getTipInformation());
    asyncTasks.push(this.generateLookupTableAccount());
    asyncTasks.push(this.connection.getLatestBlockhash("confirmed"));

    const [tokenLutsResult, buyComponentTxsResult, asyncTasksResult] =
      await Promise.all([
        Promise.all(tokenLuts),
        Promise.all(buyComponentTxs),
        Promise.all(asyncTasks),
      ]);

    let [
      tipAccounts,
      tipInformation,
      addressLookupTablesAccount,
      recentBlockhash,
    ] = asyncTasksResult;

    // Process each component
    for (let i = 0; i < buySwapData.length; i++) {
      if (i > 0 && i % swapsPerBundle === 0) {
        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: user,
        });
        serializedTxs.push(serializedTx);

        tx = new Transaction();
        addressLookupTablesAccount = await this.generateLookupTableAccount();
      }

      tx.add(buyComponentTxsResult[i]);

      const lut = tokenLutsResult[i].value;
      addressLookupTablesAccount.push(lut);

      // Handle final transaction in bundle
      if (i === buySwapData.length - 1) {
        const mintBasketTokenTx = await this.mintBasketToken({
          user,
          basketId,
          amount: mintAmount,
        });
        tx.add(mintBasketTokenTx);

        tx.add(createCloseAccountInstruction(wsolAccount, user, user));

        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: user,
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });
        serializedTxs.push(serializedTx);
      }
    }

    return serializedTxs;
  }

  /**
   * Creates a bundle of transactions for redeeming basket tokens and selling components
   * @param params Bundle creation parameters
   * @returns Array of serialized transactions
   */
  async createRedeemAndSellBundle({
    user,
    basketId,
    slippage,
    redeemAmount,
    swapsPerBundle,
    tokenInfo,
  }: {
    user: PublicKey;
    basketId: BN;
    slippage: number;
    redeemAmount: number;
    swapsPerBundle: number;
    tokenInfo: TokenInfo[];
  }): Promise<string[]> {
    const swapData = [];
    const swapBackupData = [];
    const basketConfigData = await this.getBasketConfig({ basketId });

    let withdrawData: DepositOrWithdrawSolInfo | undefined;
    basketConfigData.components.forEach((component) => {
      if (component.mint.toBase58() === NATIVE_MINT.toBase58()) {
        withdrawData = {
          type: "withdraw",
          amount: restoreRawDecimal(
            component.quantityInSysDecimal.mul(new BN(redeemAmount))
          ).toString(),
        };
      } else {
        const getSwapDataInput = {
          isSwapBaseOut: false,
          inputMint: component.mint.toBase58(),
          outputMint: NATIVE_MINT.toBase58(),
          amount: restoreRawDecimal(
            component.quantityInSysDecimal.mul(new BN(redeemAmount))
          ).toString(),
          slippagePct: slippage,
        };
        swapData.push(getSwapData(getSwapDataInput));

        swapBackupData.push(getSwapDataInput);
      }
    });

    const swapDataResult = await Promise.all(swapData);
    checkAndReplaceSwapDataError(swapDataResult, swapBackupData);

    const tokenLuts: Promise<
      RpcResponseAndContext<AddressLookupTableAccount>
    >[] = [];
    const sellComponentTxs: Promise<Transaction>[] = swapDataResult.map(
      (swap) => {
        const token = getTokenFromTokenInfo(tokenInfo, swap.data.inputMint);
        tokenLuts.push(
          this.connection.getAddressLookupTable(new PublicKey(token.lut))
        );

        let sellComponentTx;
        switch (token.type) {
          case "amm":
            sellComponentTx = this.sellComponent({
              user,
              inputMint: new PublicKey(swap.data.inputMint),
              basketId,
              amountIn: Number(swap.data.inputAmount),
              minimumAmountOut: Number(swap.data.otherAmountThreshold),
              ammId: token.poolId,
            });
            break;
          case "clmm":
            sellComponentTx = this.sellComponentClmm({
              user,
              basketId,
              amountIn: new BN(swap.data.inputAmount),
              inputMint: new PublicKey(swap.data.inputMint),
              poolId: token.poolId,
              slippage,
            });
            break;
          case "cpmm":
            sellComponentTx = this.sellComponentCpmm({
              user,
              basketId,
              inputMint: new PublicKey(swap.data.inputMint),
              amountIn: Number(swap.data.inputAmount),
              minimumAmountOut: Number(swap.data.otherAmountThreshold),
              poolId: token.poolId,
            });
            break;
        }
        return sellComponentTx;
      }
    );

    const asyncTasks = [];
    asyncTasks.push(this.jito.getTipAccounts());
    asyncTasks.push(this.jito.getTipInformation());
    asyncTasks.push(this.generateLookupTableAccount());
    asyncTasks.push(this.connection.getLatestBlockhash("confirmed"));
    asyncTasks.push(
      this.getTokenBalance({
        mint: basketConfigData.mint,
        owner: user,
      })
    );

    const [tokenLutsResult, sellComponentTxsResult, asyncTasksResult] =
      await Promise.all([
        Promise.all(tokenLuts),
        Promise.all(sellComponentTxs),
        Promise.all(asyncTasks),
      ]);

    let [
      tipAccounts,
      tipInformation,
      addressLookupTablesAccount,
      recentBlockhash,
      userBasketTokenBalance,
    ] = asyncTasksResult;

    let tx = new Transaction();
    const serializedTxs: string[] = [];

    // Create native mint ATA
    const { tokenAccount: userWsolAccount, tx: createUserWsolAccount } =
      await getOrCreateNativeMintATA(this.connection, user, user);

    if (isValidTransaction(createUserWsolAccount)) {
      tx.add(createUserWsolAccount);
    }

    for (let i = 0; i < swapDataResult.length; i++) {
      if (i === 0) {
        tx.add(
          await this.redeemBasketToken({ user, basketId, amount: redeemAmount })
        );
      } else if (i % swapsPerBundle === 0) {
        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: user,
        });
        serializedTxs.push(serializedTx);

        tx = new Transaction();
        addressLookupTablesAccount = await this.generateLookupTableAccount();
      }

      tx.add(sellComponentTxsResult[i]);

      const lut = tokenLutsResult[i].value;
      addressLookupTablesAccount.push(lut);

      if (i === swapDataResult.length - 1) {
        if (withdrawData) {
          tx.add(
            await this.withdrawWsol({
              user,
              basketId,
              amount: withdrawData.amount,
              userWsolAccount,
            })
          );
        }
        tx.add(unwrapSolIx(userWsolAccount, user, user));

        // close basket token account if all basket tokens are redeemed
        if (userBasketTokenBalance == redeemAmount) {
          tx.add(
            createCloseAccountInstruction(
              getAssociatedTokenAddressSync(basketConfigData.mint, user, false),
              user,
              user
            )
          );
        }

        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: user,
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });
        serializedTxs.push(serializedTx);
      }
    }

    return serializedTxs;
  }

  async createRebalanceBundle({
    basketId,
    rebalancer,
    slippage,
    swapsPerBundle,
    rebalanceInfo,
    withStartRebalance,
    withStopRebalance,
  }: {
    rebalancer: PublicKey;
    basketId: BN;
    slippage: number;
    swapsPerBundle: number;
    rebalanceInfo: RebalanceInfo[];
    withStartRebalance?: boolean;
    withStopRebalance?: boolean;
  }): Promise<string[]> {
    const serializedTxs: string[] = [];
    let tx = new Transaction();

    let addressLookupTablesAccount: AddressLookupTableAccount[] =
      await this.generateLookupTableAccount();
    const swapData: Promise<SwapCompute>[] = [];
    rebalanceInfo.forEach((rebalance) => {
      // if otherAmountThreshold is not set, we need to get the swap data
      if (!rebalance.otherAmountThreshold) {
        swapData.push(
          getSwapData({
            isSwapBaseOut: rebalance.isSwapBaseOut,
            inputMint: rebalance.inputMint,
            outputMint: rebalance.outputMint,
            amount: rebalance.amount,
            slippagePct: slippage,
          })
        );
      }
    });

    const swapDataResult = await Promise.all(swapData);
    checkSwapDataError(swapDataResult);

    const tokenLuts: Promise<
      RpcResponseAndContext<AddressLookupTableAccount>
    >[] = [];

    const rebalanceTxs: Promise<Transaction>[] = [];
    for (let i = 0; i < rebalanceInfo.length; i++) {
      let rebalanceTx;
      const amount = rebalanceInfo[i].amount;
      const otherAmountThreshold =
        rebalanceInfo[i].otherAmountThreshold ||
        swapDataResult.find(
          (swap) =>
            swap.data.inputMint === rebalanceInfo[i].inputMint &&
            swap.data.outputMint === rebalanceInfo[i].outputMint
        )?.data.otherAmountThreshold;

      switch (rebalanceInfo[i].type) {
        case "amm":
          rebalanceTx = this.executeRebalancing({
            rebalancer,
            isSwapBaseOut: rebalanceInfo[i].isSwapBaseOut,
            amount,
            otherAmountThreshold,
            ammId: rebalanceInfo[i].poolId,
            basketId,
            inputMint: new PublicKey(rebalanceInfo[i].inputMint),
            outputMint: new PublicKey(rebalanceInfo[i].outputMint),
            // do not create token account for native mint because it is already created in the startRebalanceTx
            createTokenAccount:
              rebalanceInfo[i].outputMint === NATIVE_MINT.toBase58()
                ? false
                : true,
          });
          break;
        case "cpmm":
          rebalanceTx = this.executeRebalancingCpmm({
            rebalancer,
            basketId,
            isSwapBaseOut: rebalanceInfo[i].isSwapBaseOut,
            amount,
            otherAmountThreshold,
            poolId: rebalanceInfo[i].poolId,
            inputMint: new PublicKey(rebalanceInfo[i].inputMint),
            outputMint: new PublicKey(rebalanceInfo[i].outputMint),
            createTokenAccount:
              rebalanceInfo[i].outputMint === NATIVE_MINT.toBase58()
                ? false
                : true,
          });
          break;
        case "clmm":
          rebalanceTx = this.executeRebalancingClmm({
            rebalancer,
            basketId,
            isSwapBaseOut: rebalanceInfo[i].isSwapBaseOut,
            inputMint: new PublicKey(rebalanceInfo[i].inputMint),
            outputMint: new PublicKey(rebalanceInfo[i].outputMint),
            amount: rebalanceInfo[i].amount,
            otherAmountThreshold,
            poolId: rebalanceInfo[i].poolId,
            slippage,
            createTokenAccount:
              rebalanceInfo[i].outputMint === NATIVE_MINT.toBase58()
                ? false
                : true,
          });
          break;
      }
      rebalanceTxs.push(rebalanceTx);
      tokenLuts.push(
        this.connection.getAddressLookupTable(
          new PublicKey(rebalanceInfo[i].lut)
        )
      );
    }

    const asyncTasks = [];
    asyncTasks.push(this.jito.getTipAccounts());
    asyncTasks.push(this.jito.getTipInformation());
    asyncTasks.push(this.connection.getLatestBlockhash("confirmed"));

    const [tokenLutsResult, rebalanceTxsResult, asyncTasksResult] =
      await Promise.all([
        Promise.all(tokenLuts),
        Promise.all(rebalanceTxs),
        Promise.all(asyncTasks),
      ]);

    let [tipAccounts, tipInformation, recentBlockhash] = asyncTasksResult;

    for (let i = 0; i < rebalanceInfo.length; i++) {
      if (i === 0) {
        if (withStartRebalance) {
          const startRebalanceTx = await this.startRebalancing({
            rebalancer,
            basketId,
          });
          if (isValidTransaction(startRebalanceTx)) {
            tx.add(startRebalanceTx);
          }
        }

        const { tx: createNativeMintATATx } = await getOrCreateNativeMintATA(
          this.connection,
          rebalancer,
          this.basketConfigPDA({ basketId })
        );

        if (isValidTransaction(createNativeMintATATx)) {
          tx.add(createNativeMintATATx);
        }
      } else if (i % swapsPerBundle === 0) {
        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: rebalancer,
        });
        serializedTxs.push(serializedTx);

        tx = new Transaction();

        addressLookupTablesAccount = await this.generateLookupTableAccount();
      }

      tx.add(rebalanceTxsResult[i]);
      addressLookupTablesAccount.push(tokenLutsResult[i].value);

      if (i == rebalanceInfo.length - 1) {
        if (withStopRebalance) {
          const stopRebalanceTx = await this.stopRebalancing({
            rebalancer,
            basketId,
          });
          tx.add(stopRebalanceTx);
        }

        const serializedTx = this.jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTablesAccount,
          signer: rebalancer,
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });
        serializedTxs.push(serializedTx);
      }
    }

    return serializedTxs;
  }

  async calculateOptimalInputAmounts({
    basketId,
    userInputInLamports,
    basketPriceInLamports,
    slippagePct,
    feePct,
    bufferPct,
  }: {
    basketId: string;
    userInputInLamports: string;
    basketPriceInLamports: string;
    slippagePct: number;
    feePct: number;
    bufferPct: number;
  }): Promise<{
    finalInputSolRequiredInLamports: string;
    revisedSwapData: BuySwapData[];
    highestPriceImpactPct: number;
    finalBasketAmountInRawDecimal: string;
  }> {
    const idealBasketAmountInRawDecimal = new BN(userInputInLamports)
      .mul(new BN(SYS_DECIMALS))
      .div(new BN(basketPriceInLamports));

    const basketConfigData = await this.getBasketConfig({
      basketId: new BN(basketId),
    });
    const swapData: Promise<SwapCompute>[] = [];
    let depositData: DepositOrWithdrawSolInfo | undefined;
    basketConfigData.components.forEach((component) => {
      if (component.mint.toBase58() === NATIVE_MINT.toBase58()) {
        depositData = {
          type: "deposit",
          amount: restoreRawDecimalRoundUp(
            component.quantityInSysDecimal.mul(idealBasketAmountInRawDecimal)
          ).toString(),
        };
      } else {
        swapData.push(
          getSwapData({
            isSwapBaseOut: true,
            inputMint: NATIVE_MINT.toBase58(),
            outputMint: component.mint.toBase58(),
            amount: restoreRawDecimalRoundUp(
              component.quantityInSysDecimal.mul(idealBasketAmountInRawDecimal)
            ).toString(),
            slippagePct,
          })
        );
      }
    });
    const swapDataResult = await Promise.all(swapData);
    checkSwapDataError(swapDataResult);

    let initialTotalAmountIn = swapDataResult.reduce(
      (acc, curr) => acc.add(new BN(curr.data.inputAmount)),
      new BN(0)
    );

    if (depositData?.amount) {
      initialTotalAmountIn = initialTotalAmountIn.add(
        new BN(depositData.amount)
      );
    }

    const highestPriceImpactPct = swapDataResult.reduce(
      (acc, curr) => Math.max(acc, curr.data.priceImpactPct),
      0
    );

    // this should be equal to or less than 1 ex. 0.95
    let multiplier =
      1 -
      (new BN(initialTotalAmountIn)
        .sub(new BN(userInputInLamports))
        .toNumber() /
        Number(userInputInLamports) +
        feePct / 100 +
        bufferPct / 100);

    // In case when the initialTotalAmountIn is less than the userInputInLamports,
    // the multiplier should be greater than 1
    if (initialTotalAmountIn.lt(new BN(userInputInLamports))) {
      multiplier =
        Number(userInputInLamports) / Number(initialTotalAmountIn) -
        feePct / 100 -
        bufferPct / 100;
    }

    let finalBasketAmountInRawDecimal = new BN(
      idealBasketAmountInRawDecimal.toNumber() * multiplier
    );

    // revised swap data based on the multiplier
    const revisedSwapData: BuySwapData[] = [];

    basketConfigData.components.forEach((component) => {
      if (component.mint.toBase58() === NATIVE_MINT.toBase58()) {
        revisedSwapData.push({
          mint: component.mint.toBase58(),
          amountIn: restoreRawDecimalRoundUp(
            component.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString(),
          maxAmountIn: restoreRawDecimalRoundUp(
            component.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString(),
          amountOut: restoreRawDecimalRoundUp(
            component.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString(),
        });
      } else {
        const prevAmountIn = swapDataResult.find(
          (swap) => swap.data.outputMint === component.mint.toBase58()
        )?.data.inputAmount;

        const prevMaxAmountIn = swapDataResult.find(
          (swap) => swap.data.outputMint === component.mint.toBase58()
        )?.data.otherAmountThreshold;

        revisedSwapData.push({
          mint: component.mint.toBase58(),
          amountIn: prevAmountIn
            ? Math.floor(Number(prevAmountIn) * multiplier).toString()
            : "0",
          maxAmountIn: prevMaxAmountIn
            ? Math.floor(Number(prevMaxAmountIn) * multiplier).toString()
            : "0",
          amountOut: restoreRawDecimalRoundUp(
            component.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString(),
        });
      }
    });

    // sort the revised swap data by the descending order of the amountIn
    revisedSwapData.sort((a, b) => Number(b.amountIn) - Number(a.amountIn));

    // @dev: debug
    console.log(JSON.stringify(revisedSwapData, null, 2));

    // calculate requred amount based on the revised swap data
    let i = 0;
    let preVaultBalance = 0;
    let requiredAmount = 0;
    while (i < revisedSwapData.length) {
      const result = processBuySwapData(
        preVaultBalance,
        revisedSwapData[i],
        feePct
      );
      if (result.isEnough) {
        preVaultBalance = result.postVaultBalance;
        i++;
      } else {
        preVaultBalance += result.insufficientAmount;
        requiredAmount += result.insufficientAmount;
      }
    }

    let finalInputSolRequiredInLamports = Math.floor(
      Number(requiredAmount) * (1 + bufferPct / 100)
    ).toString();

    // @dev: debug
    console.log({
      finalInputSolRequiredInLamports,
      finalBasketAmountInRawDecimal: finalBasketAmountInRawDecimal.toString(),
    });

    // if the finalInputSolRequiredInLamports still is greater than the userInputInLamports,
    // we need to adjust the multiplier and the swap data
    if (Number(finalInputSolRequiredInLamports) > Number(userInputInLamports)) {
      multiplier =
        Number(userInputInLamports) / Number(finalInputSolRequiredInLamports);
      finalInputSolRequiredInLamports = userInputInLamports;
      finalBasketAmountInRawDecimal = new BN(
        finalBasketAmountInRawDecimal.toNumber() * multiplier
      );

      revisedSwapData.forEach((swap) => {
        if (swap.mint === NATIVE_MINT.toBase58()) {
          swap.amountIn = restoreRawDecimalRoundUp(
            basketConfigData.components
              .find((component) => component.mint.toBase58() === swap.mint)
              ?.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString();
          swap.maxAmountIn = restoreRawDecimalRoundUp(
            basketConfigData.components
              .find((component) => component.mint.toBase58() === swap.mint)
              ?.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString();
          swap.amountOut = restoreRawDecimalRoundUp(
            basketConfigData.components
              .find((component) => component.mint.toBase58() === swap.mint)
              ?.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString();
        } else {
          swap.amountIn = Math.floor(
            Number(swap.amountIn) * multiplier
          ).toString();
          swap.maxAmountIn = Math.floor(
            Number(swap.maxAmountIn) * multiplier
          ).toString();
          swap.amountOut = restoreRawDecimalRoundUp(
            basketConfigData.components
              .find((component) => component.mint.toBase58() === swap.mint)
              ?.quantityInSysDecimal.mul(finalBasketAmountInRawDecimal)
          ).toString();
        }
      });
    }

    return {
      finalInputSolRequiredInLamports,
      revisedSwapData,
      highestPriceImpactPct,
      finalBasketAmountInRawDecimal: finalBasketAmountInRawDecimal.toString(),
    };
  }
  /**
   * Adds an event listener for the 'CreateBasket' event.
   * @param handler - The function to handle the event.
   */
  onCreateBasket(handler: (event: CreateBasketEvent) => void) {
    this.program.addEventListener("createBasket", handler);
  }

  /**
   * Adds an event listener for the 'DeleteRebalancer' event.
   * @param handler - The function to handle the event.
   */
  onDeleteRebalancer(handler: (event: UpdateRebalancerEvent) => void) {
    this.program.addEventListener("updateRebalancer", handler);
  }

  /**
   * Adds an event listener for the 'TransferAdmin' event.
   * @param handler - The function to handle the event.
   */
  onTransferAdmin(handler: (event: TransferAdminEvent) => void) {
    this.program.addEventListener("transferAdmin", handler);
  }

  /**
   * Adds an event listener for the 'TransferBasket' event.
   * @param handler - The function to handle the event.
   */
  onTransferBasket(handler: (event: TransferBasketEvent) => void) {
    this.program.addEventListener("transferBasket", handler);
  }

  /**
   * Adds an event listener for the 'ExecuteRebalancing' event.
   * @param handler - The function to handle the event.
   */
  onExecuteRebalancing(handler: (event: ExecuteRebalancingEvent) => void) {
    this.program.addEventListener("executeRebalancing", handler);
  }

  /**
   * Adds an event listener for the 'StartRebalancing' event.
   * @param handler - The function to handle the event.
   */
  onStartRebalancing(handler: (event: StartRebalancingEvent) => void) {
    this.program.addEventListener("startRebalancing", handler);
  }

  /**
   * Adds an event listener for the 'StopRebalancing' event.
   * @param handler - The function to handle the event.
   */
  onStopRebalancing(handler: (event: StopRebalancingEvent) => void) {
    this.program.addEventListener("stopRebalancing", handler);
  }

  /**
   * Adds an event listener for the 'BuyComponent' event.
   * @param handler - The function to handle the event.
   */
  onBuyComponent(handler: (event: BuyComponentEvent) => void) {
    this.program.addEventListener("buyComponent", handler);
  }

  /**
   * Adds an event listener for the 'SellComponent' event.
   * @param handler - The function to handle the event.
   */
  onSellComponent(handler: (event: SellComponentEvent) => void) {
    this.program.addEventListener("sellComponent", handler);
  }

  /**
   * Adds an event listener for the 'MintBasketToken' event.
   * @param handler - The function to handle the event.
   */
  onMintBasketToken(handler: (event: MintBasketTokenEvent) => void) {
    this.program.addEventListener("mintBasketToken", handler);
  }

  /**
   * Adds an event listener for the 'RedeemBasketToken' event.
   * @param handler - The function to handle the event.
   */
  onRedeemBasketToken(handler: (event: RedeemBasketTokenEvent) => void) {
    this.program.addEventListener("redeemBasketToken", handler);
  }
}

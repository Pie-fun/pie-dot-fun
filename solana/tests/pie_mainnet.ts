import { BN } from "@coral-xyz/anchor";
import {
  AddressLookupTableAccount,
  ComputeBudgetProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  Transaction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import mainnetAdmin from "../.config/solana/id.json";
import { assert } from "chai";
import {
  BasketComponent,
  CreateBasketArgs,
  PieProgram,
} from "../sdk/pie-program";
import { tokens } from "./fixtures/mainnet/token_test";
import { rebalanceInfo } from "./fixtures/mainnet/token_rebalance_test";
import { Table } from "console-table-printer";
import { getMint, NATIVE_MINT } from "@solana/spl-token";
import {
  getExplorerUrl,
  getOrCreateNativeMintATA,
  getSolanaAddressFromEvmAddress,
  getTokenListFromSolanaClient,
  isValidTransaction,
  showBasketConfigTable,
  simulateTransaction,
  wrapSOLInstruction,
} from "../sdk/utils/helper";
import { Jito } from "../sdk/jito";
import { QUICKNODE_RPC_URL } from "./constants";
import {
  deserializeInstruction,
  getAddressLookupTableAccounts,
  getJupiterSwapInstructions,
} from "../sdk/jupiter";
import { getMayanSwapTx } from "../sdk/mayan-wormhole";

describe("pie", () => {
  const admin = Keypair.fromSecretKey(new Uint8Array(mainnetAdmin));
  const connection = new Connection(QUICKNODE_RPC_URL, "confirmed");
  const pieProgram = new PieProgram(
    connection,
    "mainnet-beta",
    QUICKNODE_RPC_URL
  );
  const jito = pieProgram.jito;
  const priorityFee = 100000;
  const priorityFeeInstruction = ComputeBudgetProgram.setComputeUnitPrice({
    microLamports: priorityFee,
  });
  const swapsPerBundle = 2;
  const slippage = 50;

  const startPollingJitoBundle = async (bundleId: string) => {
    await new Promise<void>((resolve) => {
      let interval = setInterval(async () => {
        const statuses = await jito.getInflightBundleStatuses([bundleId]);
        console.log(JSON.stringify({ statuses }));
        if (statuses?.value[0]?.status === "Landed") {
          console.log("bundle confirmed");
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
  };

  beforeEach(async () => {
    await pieProgram.init();
  });

  it("Setup and Initialized if needed ", async () => {
    let programState = await pieProgram.getProgramState();

    const platformFeeWallet = new PublicKey(
      "DU2tpPP3yHY811yLrDATdyCjMu51bp3jz1fpEbpf5Crq"
    );
    const newAdmin = new PublicKey(
      "6tfUrp38Q5jRysrgLhNadxmrmXVKt7Rz5dC593x1wu1Q"
    );
    const newCreator = new PublicKey(
      "Gh7DKrjeUcU4Nq2doKcLZKSkiPEKgF4gx3PivqF6ufNH"
    );

    if (!programState) {
      console.log("initializing program...");
      //create platform fee token account if needed
      const initializeTx = await pieProgram.initialize({
        initializer: admin.publicKey,
        admin: newAdmin,
        creator: newCreator,
        platformFeeWallet,
        platformFeePercentage: new BN(100),
      });

      initializeTx.add(priorityFeeInstruction);

      const { tx: platformFeeTokenAccountTx } = await getOrCreateNativeMintATA(
        connection,
        admin.publicKey,
        programState.platformFeeWallet
      );

      const { tx: creatorFeeTokenAccountTx } = await getOrCreateNativeMintATA(
        connection,
        admin.publicKey,
        newCreator
      );

      if (isValidTransaction(platformFeeTokenAccountTx)) {
        initializeTx.add(platformFeeTokenAccountTx);
      }

      if (isValidTransaction(creatorFeeTokenAccountTx)) {
        initializeTx.add(creatorFeeTokenAccountTx);
      }

      const initializeTxResult = await sendAndConfirmTransaction(
        connection,
        initializeTx,
        [admin],
        {
          skipPreflight: false,
          commitment: "confirmed",
        }
      );
      console.log(
        `Program initialized at tx: https://solscan.io/tx/${initializeTxResult}`
      );
    }

    if (!pieProgram.sharedLookupTable) {
      await pieProgram.initializeSharedLookupTable({ admin });
    }
  });

  it("Create Basket", async () => {
    const components: BasketComponent[] = tokens.map((token) => ({
      mint: new PublicKey(token.mint),
      quantityInSysDecimal: new BN(1 * 10 ** 6),
    }));

    // ADD WSOL
    components.push({
      mint: NATIVE_MINT,
      quantityInSysDecimal: new BN(1 * 10 ** 6),
    });

    const createBasketArgs: CreateBasketArgs = {
      name: "Basket 3",
      symbol: "B-3",
      uri: "https://cdn.internal-pie.fun/basket/4zoamul/metadata",
      components: components,
      rebalancer: admin.publicKey,
    };

    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter;

    console.log("creating basket...");
    const createBasketTx = await pieProgram.createBasket({
      creator: admin.publicKey,
      args: createBasketArgs,
      basketId,
    });

    createBasketTx.add(priorityFeeInstruction);

    const createBasketTxResult = await sendAndConfirmTransaction(
      connection,
      createBasketTx,
      [admin],
      { skipPreflight: true, commitment: "confirmed" }
    );

    console.log(
      `Basket created at tx: ${getExplorerUrl(createBasketTxResult, "mainnet")}`
    );

    // @TODO uncomment this when needed
    // console.log("creating lookup tables for each component...");
    // const lookupTables = [];
    // for (let i = 0; i < createBasketArgs.components.length; i++) {
    //   console.log(
    //     `creating lookup table for ${i + 1} of ${
    //       createBasketArgs.components.length
    //     }`
    //   );
    //   let lut;
    //   switch (tokens[i].type) {
    //     case "amm":
    //       lut = await pieProgram.addRaydiumAmmToAddressLookupTable({
    //         connection,
    //         signer: admin,
    //         ammId: tokens[i].poolId,
    //       });
    //       break;
    //     case "clmm":
    //       lut = await pieProgram.addRaydiumClmmToAddressLookupTable({
    //         connection,
    //         signer: admin,
    //         poolId: tokens[i].poolId,
    //       });
    //       break;
    //     case "cpmm":
    //       lut = await pieProgram.addRaydiumCpmmToAddressLookupTable({
    //         connection,
    //         signer: admin,
    //         poolId: tokens[i].poolId,
    //       });
    //       break;
    //   }
    //   lookupTables.push(lut.toBase58());
    // }
    // console.log("lookup tables created:", lookupTables);

    console.log("adding basket to shared lookup table...");
    await pieProgram.addBaksetToSharedLookupTable({
      basketId,
      admin,
    });

    const { tx } = await pieProgram.createBasketVaultAccounts({
      creator: admin.publicKey,
      args: createBasketArgs,
      basketId,
    });

    if (isValidTransaction(tx)) {
      console.log("creating vault accounts..");
      tx.add(priorityFeeInstruction);
      const creatingVaultsTxResult = await sendAndConfirmTransaction(
        connection,
        tx,
        [admin],
        {
          skipPreflight: true,
          commitment: "confirmed",
        }
      );

      console.log(
        `Vaults created at tx: ${getExplorerUrl(
          creatingVaultsTxResult,
          "mainnet"
        )}`
      );
    }

    const basket = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basket.components.length, createBasketArgs.components.length);
    assert.equal(basket.creator.toBase58(), admin.publicKey.toBase58());
    assert.equal(basket.id.toString(), basketId.toString());
    assert.equal(basket.rebalancer.toString(), admin.publicKey.toString());
    const table = new Table({
      columns: [
        { name: "mint", alignment: "left", color: "cyan" },
        { name: "quantity", alignment: "right", color: "green" },
      ],
    });

    for (let i = 0; i < basket.components.length; i++) {
      let component = basket.components[i];
      table.addRow({
        mint: component.mint.toBase58(),
        quantity: component.quantityInSysDecimal.toString(),
      });
    }
    table.printTable();
  });

  it("Buy components and mint basket token using Jupiter", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));
    const basketConfigData = await pieProgram.getBasketConfig({ basketId });

    console.log(JSON.stringify(basketConfigData, null, 2));

    const asyncTasks = [];
    asyncTasks.push(jito.getTipAccounts());
    asyncTasks.push(jito.getTipInformation());
    asyncTasks.push(connection.getLatestBlockhash("confirmed"));

    const [tipAccounts, tipInformation, recentBlockhash] = await Promise.all(
      asyncTasks
    );

    const serializedTxs: string[] = [];

    for (let i = 0; i < basketConfigData.components.length; i++) {
      const tx = new Transaction();
      const component = basketConfigData.components[i];
      const { swapInstructionIxs, addressLookupTableAccounts } =
        await getJupiterSwapInstructions(
          connection,
          admin.publicKey,
          "ExactOut",
          NATIVE_MINT,
          component.mint,
          component.quantityInSysDecimal.toNumber()
        );

      tx.add(...swapInstructionIxs);

      if (i === basketConfigData.components.length - 1) {
        const serializedTx = jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: addressLookupTableAccounts,
          signer: admin.publicKey,
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });
        serializedTxs.push(serializedTx);
      } else {
        const serializedTx = jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          signer: admin.publicKey,
          transaction: tx,
          lookupTables: addressLookupTableAccounts,
        });
        serializedTxs.push(serializedTx);
      }
    }

    const serializedSignedTxs: string[] = [];
    for (const serializedTx of serializedTxs) {
      const tx = jito.signSerializedTransaction(serializedTx, admin);
      // @debug
      // await sendAndConfirmRawTransaction(
      //   connection,
      //   Buffer.from(tx, "base64"),
      //   {
      //     skipPreflight: true,
      //     commitment: "confirmed",
      //   }
      // );
      serializedSignedTxs.push(tx);
    }

    const bundleId = await jito.sendBundle(serializedSignedTxs);
    await startPollingJitoBundle(bundleId);

    // const endcoded = transaction.serialize()

    // const txSig = await sendAndConfirmRawTransaction(
    //   connection,
    //   endcoded,
    //   [admin],
    //   { skipPreflight: true, commitment: "confirmed" }
    // )

    // transaction.sign([admin])
    // const txSig = await sendTra(connection, transaction, [admin], {
    //   skipPreflight: true,
    //   commitment: "confirmed",
    // })
  });

  it.only("Buy components with Mayan and Jito", async () => {
    const solanaTokens = [
      "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
      "HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
      "61V8vBaqAGMpgDQi4JcAwo1dmBGHsyhzodcPqnEVpump",
      "KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS",
      "HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump",
    ];

    const baseTokens = [
      "0x4F9Fd6Be4a90f2620860d680c0d4d5Fb53d1A825",
      "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
      "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935",
      "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
      "0xc0041ef357b183448b235a8ea73ce4e4ec8c265f",
    ];

    const baseTokensBase58 = baseTokens.map((token) =>
      getSolanaAddressFromEvmAddress(token)
    );

    console.log(baseTokensBase58);

    return;

    const baseAddress = "0xe215E8C50690F2a7Dc7C5A9E907acDCe8A033B97";

    const amount = 0.017;

    const asyncTasks = [];
    asyncTasks.push(jito.getTipAccounts());
    asyncTasks.push(jito.getTipInformation());
    asyncTasks.push(connection.getLatestBlockhash("confirmed"));

    const [tipAccounts, tipInformation, recentBlockhash] = await Promise.all(
      asyncTasks
    );

    const serializedTxs: string[] = [];

    const mayanSwapTxs = [];
    baseTokens.forEach(async (token) => {
      const mayanSwapTx = getMayanSwapTx({
        connection,
        amount: amount,
        fromToken: NATIVE_MINT.toBase58(),
        toToken: token,
        fromAddress: admin.publicKey.toBase58(),
        toAddress: baseAddress,
      });
      mayanSwapTxs.push(mayanSwapTx);
    });

    const mayanSwapTxsResult = await Promise.all(mayanSwapTxs);

    for (let i = 0; i < baseTokens.length; i++) {
      const tx = new Transaction();
      if (i == 0) {
        const { tx: createNativeMintATATx } = await getOrCreateNativeMintATA(
          connection,
          admin.publicKey,
          admin.publicKey
        );
        if (isValidTransaction(createNativeMintATATx)) {
          tx.add(createNativeMintATATx);
        }
        const instructions = wrapSOLInstruction(
          admin.publicKey,
          amount * baseTokens.length * LAMPORTS_PER_SOL
        );
        tx.add(...instructions);
      }
      const mayanSwapTx = mayanSwapTxsResult[i];

      tx.add(...mayanSwapTx.instructions);

      if (i == baseTokens.length - 1) {
        const serializedTx = jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: mayanSwapTx.lookupTables,
          signer: admin.publicKey,
          jitoTipAccount: new PublicKey(
            tipAccounts[Math.floor(Math.random() * tipAccounts.length)]
          ),
          amountInLamports: Math.floor(
            tipInformation?.landed_tips_50th_percentile * LAMPORTS_PER_SOL
          ),
        });
        serializedTxs.push(serializedTx);
      } else {
        const serializedTx = jito.serializeJitoTransaction({
          recentBlockhash: recentBlockhash.blockhash,
          transaction: tx,
          lookupTables: mayanSwapTx.lookupTables,
          signer: admin.publicKey,
        });
        serializedTxs.push(serializedTx);
      }
    }

    const serializedSignedTxs: string[] = [];
    for (const serializedTx of serializedTxs) {
      const tx = jito.signSerializedTransaction(serializedTx, admin);
      serializedSignedTxs.push(tx);
    }

    const bundleId = await jito.sendBundle(serializedSignedTxs);
    await startPollingJitoBundle(bundleId);

    // console.log(`Swap at tx: ${getExplorerUrl(txResult, "mainnet")}`);

    // console.log(`Swap at tx: ${getExplorerUrl(txResult, "mainnet")}`);
  });

  it("Buy components and mint basket token using Jito bundle", async () => {
    // const programState = await pieProgram.getProgramState();
    // const basketId = programState.basketCounter.sub(new BN(1));
    const basketId = new BN(3);
    const basketConfigData = await pieProgram.getBasketConfig({ basketId });

    const userBaksetTokenBalanceBefore = await pieProgram.getTokenBalance({
      mint: basketConfigData.mint,
      owner: admin.publicKey,
    });
    console.log({ userBaksetTokenBalanceBefore });

    const serializedSignedTxs: string[] = [];

    const {
      finalInputSolRequiredInLamports,
      revisedSwapData,
      highestPriceImpactPct,
      finalBasketAmountInRawDecimal,
    } = await pieProgram.calculateOptimalInputAmounts({
      basketId: basketId.toString(),
      userInputInLamports: "100000000",
      basketPriceInLamports: "569408",
      slippagePct: slippage,
      feePct: 1,
      bufferPct: 2,
    });

    if (highestPriceImpactPct > slippage) {
      console.log(
        `warning: highest price impact (${highestPriceImpactPct}) is greater than slippage (${slippage})`
      );
    }

    console.log("creating bundle...");
    const serializedTxs = await pieProgram.createBuyAndMintBundle({
      user: admin.publicKey,
      basketId,
      slippage,
      mintAmount: finalBasketAmountInRawDecimal,
      buySwapData: revisedSwapData,
      swapsPerBundle,
      tokenInfo: await getTokenListFromSolanaClient(),
      inputAmount: finalInputSolRequiredInLamports,
    });

    console.log("signing bundle...");
    for (const serializedTx of serializedTxs) {
      const tx = jito.signSerializedTransaction(serializedTx, admin);
      // @debug
      // await sendAndConfirmRawTransaction(
      //   connection,
      //   Buffer.from(tx, "base64"),
      //   {
      //     skipPreflight: true,
      //     commitment: "confirmed",
      //   }
      // );
      serializedSignedTxs.push(tx);
    }

    console.log("start simulating bundle...");
    const bundleSimluationResult = await jito.simulateBundle({
      encodedTransactions: serializedSignedTxs,
    });

    console.log(
      `bundle simulation result: ${JSON.stringify(
        bundleSimluationResult.value
      )}`
    );

    if (bundleSimluationResult.value.summary !== "succeeded") {
      for (const serializedSignedTx of serializedSignedTxs) {
        await simulateTransaction(connection, serializedSignedTx);
      }
      throw new Error("bundle simulation failed");
    }

    console.log("start sending bundles..!!");
    const bundleId = await jito.sendBundle(serializedSignedTxs);
    await startPollingJitoBundle(bundleId);
    console.log(`basket ${basketId.toString()} data:`);
    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();

    const userBaksetTokenBalanceAfter = await pieProgram.getTokenBalance({
      mint: basketConfigData.mint,
      owner: admin.publicKey,
    });
    console.log({ userBaksetTokenBalanceAfter });
  });

  it("Rebalance basket using Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const basketConfig = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basketConfig.isRebalancing, false);

    console.log(`basket ${basketId.toString()} data before:`);
    let basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();

    const serializedSignedTxs: string[] = [];
    console.log("creating bundle...");
    const serializedTxs = await pieProgram.createRebalanceBundle({
      rebalancer: admin.publicKey,
      basketId,
      slippage,
      swapsPerBundle,
      rebalanceInfo,
      withStartRebalance: true,
      withStopRebalance: true,
    });

    console.log("signing bundle...");
    for (const serializedTx of serializedTxs) {
      const tx = jito.signSerializedTransaction(serializedTx, admin);
      serializedSignedTxs.push(tx);
    }

    console.log("start simulating bundle...");
    const bundleSimluationResult = await jito.simulateBundle({
      encodedTransactions: serializedSignedTxs,
    });

    console.log(
      `bundle simulation result: ${JSON.stringify(
        bundleSimluationResult.value
      )}`
    );

    if (bundleSimluationResult.value.summary !== "succeeded") {
      throw new Error("bundle simulation failed");
    }

    console.log("start sending bundles..!!");
    const bundleId = await jito.sendBundle(serializedSignedTxs);
    await startPollingJitoBundle(bundleId);

    console.log(`basket ${basketId.toString()} data after:`);
    basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();
  });

  it("Redeem basket token and sell components using Jito bundle", async () => {
    // const programState = await pieProgram.getProgramState();
    const basketId = new BN(3); // programState.basketCounter.sub(new BN(1));
    const basketConfigData = await pieProgram.getBasketConfig({ basketId });
    const serializedSignedTxs: string[] = [];

    const userSolBalanceBefore = await connection.getBalance(admin.publicKey);
    const userBaksetTokenBalanceBefore = await pieProgram.getTokenBalance({
      mint: basketConfigData.mint,
      owner: admin.publicKey,
    });

    console.log({ userSolBalanceBefore, userBaksetTokenBalanceBefore });

    const redeemAmount = userBaksetTokenBalanceBefore / 2;

    console.log("creating bundle...");
    const serializedTxs = await pieProgram.createRedeemAndSellBundle({
      user: admin.publicKey,
      basketId,
      slippage,
      redeemAmount,
      swapsPerBundle,
      tokenInfo: await getTokenListFromSolanaClient(),
    });

    console.log("signing bundle...");
    for (const serializedTx of serializedTxs) {
      const tx = jito.signSerializedTransaction(serializedTx, admin);
      serializedSignedTxs.push(tx);
    }

    console.log("start simulating bundle...");
    const bundleSimluationResult = await jito.simulateBundle({
      encodedTransactions: serializedSignedTxs,
    });
    console.log(
      `bundle simulation result: ${JSON.stringify(
        bundleSimluationResult.value
      )}`
    );

    console.log("start sending bundles..!!");
    const bundleId = await jito.sendBundle(serializedSignedTxs);

    if (bundleSimluationResult.value.summary !== "succeeded") {
      for (const serializedSignedTx of serializedSignedTxs) {
        await simulateTransaction(connection, serializedSignedTx);
      }
      throw new Error("bundle simulation failed");
    }

    await startPollingJitoBundle(bundleId);

    console.log(`basket ${basketId.toString()} data:`);
    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();

    const userBaksetTokenBalanceAfter = await pieProgram.getTokenBalance({
      mint: basketConfigData.mint,
      owner: admin.publicKey,
    });
    console.log({ userBaksetTokenBalanceAfter });
  });

  it.skip("Start rebalancing basket without Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const tx = new Transaction();

    //@dev When sending tx without Jito bundle, we need to set the compute unit price manually
    tx.add(priorityFeeInstruction);

    const startRebalanceTx = await pieProgram.startRebalancing({
      rebalancer: admin.publicKey,
      basketId,
    });
    tx.add(startRebalanceTx);
    const startRebalanceTxResult = await sendAndConfirmTransaction(
      connection,
      tx,
      [admin],
      {
        skipPreflight: true,
        commitment: "confirmed",
      }
    );
    console.log(
      `Start rebalance at tx: https://solscan.io/tx/${startRebalanceTxResult}`
    );

    const basketConfig = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basketConfig.isRebalancing, true);

    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();
  });

  it.skip("Rebalance amm pool without Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const basketConfig = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basketConfig.isRebalancing, true);

    const basketMintInfo = await getMint(
      connection,
      pieProgram.basketMintPDA({ basketId })
    );
    const ammPoolToken = tokens.find((token) => token.type === "amm");
    const basketSupply = new BN(basketMintInfo.supply.toString());
    const ammPoolTokenQuantityInSysDecimal = basketConfig.components.find(
      (component) => component.mint.toBase58() === ammPoolToken.mint
    ).quantityInSysDecimal;

    // availableAmount = bakset supply * ammPoolTokenQuantityInSysDecimal  / 10^6(sys decimal)
    const availableAmount = basketSupply
      .mul(ammPoolTokenQuantityInSysDecimal)
      .div(new BN(10 ** 6));
    console.log({ availableAmount });

    const tx = new Transaction();
    tx.add(priorityFeeInstruction);
    const executeRebalanceTx = await pieProgram.executeRebalancing({
      rebalancer: admin.publicKey,
      isSwapBaseOut: false,
      amount: availableAmount.div(new BN(2)).toString(),
      otherAmountThreshold: "0",
      ammId: ammPoolToken.poolId,
      basketId,
      inputMint: new PublicKey(ammPoolToken.mint),
      outputMint: NATIVE_MINT,
    });

    tx.add(executeRebalanceTx);

    console.log("sending execute rebalance AMM tx...");

    const executeRebalanceTxResult = await sendAndConfirmTransaction(
      connection,
      tx,
      [admin],
      { skipPreflight: true, commitment: "confirmed" }
    );

    console.log(
      `Rebalance at tx: https://solscan.io/tx/${executeRebalanceTxResult}`
    );

    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();
  });

  it.skip("Rebalance cpmm pool without Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const basketConfig = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basketConfig.isRebalancing, true);

    const basketMintInfo = await getMint(
      connection,
      pieProgram.basketMintPDA({ basketId })
    );
    const AI16Z = tokens.find((token) => token.type === "cpmm");
    const basketSupply = new BN(basketMintInfo.supply.toString());
    const AI16ZQuantityInSysDecimal = basketConfig.components.find(
      (component) => component.mint.toBase58() === AI16Z.mint
    ).quantityInSysDecimal;

    // availableAmount = supply * AI16ZQuantityInSysDecimal / 10^6(sys decimal)
    const availableAmount = basketSupply
      .mul(AI16ZQuantityInSysDecimal)
      .div(new BN(10 ** 6));
    console.log({ availableAmount });

    const tx = new Transaction();

    tx.add(priorityFeeInstruction);

    const executeRebalanceTx = await pieProgram.executeRebalancingCpmm({
      rebalancer: admin.publicKey,
      isSwapBaseOut: false,
      amount: availableAmount.div(new BN(2)).toString(),
      otherAmountThreshold: "0",
      poolId: AI16Z.poolId,
      basketId,
      inputMint: new PublicKey(AI16Z.mint),
      outputMint: NATIVE_MINT,
    });

    tx.add(executeRebalanceTx);

    console.log("sending execute rebalance CPMM tx...");

    const executeRebalanceTxResult = await sendAndConfirmTransaction(
      connection,
      tx,
      [admin],
      { skipPreflight: true, commitment: "confirmed" }
    );

    console.log(
      `Rebalance at tx: https://solscan.io/tx/${executeRebalanceTxResult}`
    );

    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();
  });

  it.skip("Rebalance clmm pool without Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const basketConfig = await pieProgram.getBasketConfig({ basketId });
    assert.equal(basketConfig.isRebalancing, true);

    const basketMintInfo = await getMint(
      connection,
      pieProgram.basketMintPDA({ basketId })
    );

    const clmmPoolToken = tokens.find((token) => token.type === "clmm");
    const basketSupply = new BN(basketMintInfo.supply.toString());
    const clmmPoolTokenQuantityInSysDecimal = basketConfig.components.find(
      (component) => component.mint.toBase58() === clmmPoolToken.mint
    ).quantityInSysDecimal;

    const availableAmount = basketSupply
      .mul(clmmPoolTokenQuantityInSysDecimal)
      .div(new BN(10 ** 6));

    console.log({
      clmmPoolToken: clmmPoolToken.mint,
      availableAmount: availableAmount.toString(),
    });

    const tx = new Transaction();

    tx.add(priorityFeeInstruction);

    //base in
    const executeRebalanceTx = await pieProgram.executeRebalancingClmm({
      rebalancer: admin.publicKey,
      isSwapBaseOut: false,
      amount: availableAmount.div(new BN(2)).toString(),
      otherAmountThreshold: "0",
      slippage: 100,
      poolId: clmmPoolToken.poolId,
      basketId,
      inputMint: new PublicKey(clmmPoolToken.mint),
      outputMint: NATIVE_MINT,
    });

    //base out
    // const executeRebalanceTx = await pieProgram.executeRebalancingClmm({
    //   rebalancer: admin.publicKey,
    //   isSwapBaseOut: true,
    //   amount: new BN(1000),
    //   slippage,
    //   poolId: clmmPoolToken.ammId,
    //   basketId,
    //   inputMint: new PublicKey(clmmPoolToken.mint),
    //   outputMint: NATIVE_MINT,
    // });

    tx.add(executeRebalanceTx);

    console.log("sending execute rebalance CPMM tx...");

    const executeRebalanceTxResult = await sendAndConfirmTransaction(
      connection,
      tx,
      [admin],
      { skipPreflight: true, commitment: "confirmed" }
    );

    console.log(
      `Rebalance at tx: https://solscan.io/tx/${executeRebalanceTxResult}`
    );

    const basketMintTable = await showBasketConfigTable(
      connection,
      pieProgram,
      basketId
    );
    basketMintTable.printTable();
  });

  it.skip("Stop rebalancing basket without Jito bundle", async () => {
    const programState = await pieProgram.getProgramState();
    const basketId = programState.basketCounter.sub(new BN(1));

    const tx = new Transaction();

    //@dev When sending tx without Jito bundle, we need to set the compute unit price manually
    tx.add(priorityFeeInstruction);

    const stopRebalanceTx = await pieProgram.stopRebalancing({
      rebalancer: admin.publicKey,
      basketId,
    });
    tx.add(stopRebalanceTx);
    const stopRebalanceTxResult = await sendAndConfirmTransaction(
      connection,
      tx,
      [admin],
      {
        skipPreflight: true,
        commitment: "confirmed",
      }
    );
    console.log(
      `Stop rebalance at tx: https://solscan.io/tx/${stopRebalanceTxResult}`
    );
  });

  it("Parses events", async () => {
    const sampleTx =
      "3bu4FcPy85Rscgre415eSK8KLT2nGs5cidBds5KVMHUDAfTSFgD6w7tb2faRsdcTGGQrbqiDiQzqLjphf7hX5Wkz";
    const tx = await connection.getTransaction(sampleTx, {
      maxSupportedTransactionVersion: 0,
    });

    const events = pieProgram.eventParser.parseLogs(tx.meta.logMessages);

    for (const event of events) {
      console.log(event);
    }
  });
});

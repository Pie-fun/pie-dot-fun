import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
} from "@solana/web3.js";
import devnetAdmin from "../public/devnet-admin.json";
import {assert, expect} from "chai";
import {
    createBasketComponents,
    getOrCreateTokenAccountTx,
    getTokenAccount,
    mintTokenTo,
} from "../sdk/utils/helper";
import {CreateBasketArgs, PieProgram} from "../sdk/pie-program";
import {getMint, mintTo} from "@solana/spl-token";
import {METADATA_PROGRAM_ID} from "@raydium-io/raydium-sdk-v2";
import {BN} from "@coral-xyz/anchor";
import {
    EthCallQueryRequest,
    PerChainQueryRequest,
    QueryProxyMock, QueryRequest,
    signaturesToSolanaArray,
} from "@wormhole-foundation/wormhole-query-sdk";
import {deriveGuardianSetKey} from "./helpers/guardianSet";
import {
    extractTokenAddress,
    extractTokenBalance,
    getTransactionWithRetry
} from "./helpers/transaction";
import {getWormholeBridgeData} from "./helpers/config";
import {eth, Web3} from "web3";

function sleep(s: number) {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

describe("pie", () => {
    // Configure the client to use the local cluster.
    const defaultProvider = anchor.AnchorProvider.env();
    anchor.setProvider(defaultProvider);

    const connection = new Connection("http://localhost:8899", "confirmed");

    const admin = Keypair.fromSecretKey(new Uint8Array(devnetAdmin));
    const newAdmin = Keypair.generate();
    const rebalancer = Keypair.generate();
    const creator = Keypair.generate();
    const newCreator = Keypair.generate();
    const platformFeeWallet = Keypair.generate();
    const signaturesKeypair = anchor.web3.Keypair.generate();

    const pieProgram = new PieProgram(connection, "devnet", "");

    const coreBridgeAddress = new anchor.web3.PublicKey(
        "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth"
    );

    const expiredGuardianSetIndex = 2;
    let guardianSetIndex = 0; // updated to the current index in initialize
    const mockGuardianSetIndex = 5;

    async function postQuerySigs(
        querySignatures: string[],
        signaturesKeypair: anchor.web3.Keypair,
        totalSignatures: number = 0,
    ) {
        const signatureData = signaturesToSolanaArray(querySignatures);
        await pieProgram.program.methods
            .postSignatures(signatureData, totalSignatures || signatureData.length)
            .accounts({guardianSignatures: signaturesKeypair.publicKey})
            .signers([signaturesKeypair])
            .rpc();
    }

    it("is success deploy without admin change", async () => {
        await Promise.all([
            connection.requestAirdrop(admin.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(defaultProvider.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(newAdmin.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(rebalancer.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(platformFeeWallet.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(creator.publicKey, LAMPORTS_PER_SOL),
            connection.requestAirdrop(newCreator.publicKey, LAMPORTS_PER_SOL),
        ]);
        await sleep(1);
        let programState = await pieProgram.getProgramState();
        const initTx = await pieProgram.initialize({
            initializer: admin.publicKey,
            admin: admin.publicKey,
            creator: creator.publicKey,
            platformFeeWallet: admin.publicKey,
            platformFeePercentage: new BN(100),

        });

        await sendAndConfirmTransaction(connection, initTx, [admin]);

        programState = await pieProgram.getProgramState();

        assert.equal(programState.admin.toBase58(), admin.publicKey.toBase58());
    });

    describe.skip("transfer_admin", () => {
        it("should be transfer with new admin", async () => {
            const transferTx = await pieProgram.transferAdmin({
                admin: admin.publicKey,
                newAdmin: newAdmin.publicKey,
            });
            await sendAndConfirmTransaction(connection, transferTx, [admin]);

            let programState = await pieProgram.getProgramState();
            assert.equal(
                programState.admin.toBase58(),
                newAdmin.publicKey.toBase58()
            );

            //transfer back
            const transferBackTx = await pieProgram.transferAdmin({
                admin: newAdmin.publicKey,
                newAdmin: admin.publicKey,
            });
            await sendAndConfirmTransaction(connection, transferBackTx, [newAdmin]);

            programState = await pieProgram.getProgramState();
            assert.equal(programState.admin.toBase58(), admin.publicKey.toBase58());
        });

        it("should fail if the admin is unauthorized", async () => {
            try {
                const transferTx = await pieProgram.transferAdmin({
                    admin: newAdmin.publicKey,
                    newAdmin: admin.publicKey,
                });
                await sendAndConfirmTransaction(connection, transferTx, [newAdmin]);
                assert.fail("Transaction should have failed");
            } catch (e) {
            }
        });
    });

    describe.skip("update_fee", () => {
        it("should update fee", async () => {
            const updateFeeTx = await pieProgram.updateFee({
                admin: admin.publicKey,
                newCreatorFeePercentage: 1000,
                newPlatformFeePercentage: 9000,
            });
            await sendAndConfirmTransaction(connection, updateFeeTx, [admin]);

            const programState = await pieProgram.getProgramState();
            assert.equal(programState.creatorFeePercentage.toNumber(), 1000);
            assert.equal(programState.platformFeePercentage.toNumber(), 9000);
        });

        it("should fail if not admin", async () => {
            try {
                const updateFeeTx = await pieProgram.updateFee({
                    admin: newAdmin.publicKey,
                    newCreatorFeePercentage: 1000,
                    newPlatformFeePercentage: 1000,
                });
                await sendAndConfirmTransaction(connection, updateFeeTx, [newAdmin]);
                assert.fail("Transaction should have failed");
            } catch (e) {
                assert.isNotEmpty(e);
            }
        });

        it("should fail if the fee is invalid", async () => {
            try {
                const updateFeeTx = await pieProgram.updateFee({
                    admin: admin.publicKey,
                    newCreatorFeePercentage: (1000 * 10 ** 10) ^ 4,
                    newPlatformFeePercentage: 1000,
                });
                await sendAndConfirmTransaction(connection, updateFeeTx, [admin]);
                assert.fail("Transaction should have failed");
            } catch (e) {
                assert.isNotEmpty(e);
            }
        });
    });

    describe.skip("update_platform_fee_wallet", () => {
        it("should update platform fee wallet", async () => {
            const updatePlatformFeeWalletTx =
                await pieProgram.updatePlatformFeeWallet({
                    admin: admin.publicKey,
                    newPlatformFeeWallet: platformFeeWallet.publicKey,
                });
            await sendAndConfirmTransaction(connection, updatePlatformFeeWalletTx, [
                admin,
            ]);

            const programState = await pieProgram.getProgramState();
            assert.equal(
                programState.platformFeeWallet.toBase58(),
                platformFeeWallet.publicKey.toBase58()
            );
        });

        it("should fail if not admin", async () => {
            try {
                const updatePlatformFeeWalletTx =
                    await pieProgram.updatePlatformFeeWallet({
                        admin: newAdmin.publicKey,
                        newPlatformFeeWallet: platformFeeWallet.publicKey,
                    });
                await sendAndConfirmTransaction(connection, updatePlatformFeeWalletTx, [
                    newAdmin,
                ]);
                assert.fail("Transaction should have failed");
            } catch (e) {
                assert.isNotEmpty(e);
            }
        });
    });

    describe.skip("create_basket", () => {
        describe("v1", () => {
            it("should create a basket with metadata", async () => {
                const basketComponents = await createBasketComponents(
                    connection,
                    admin,
                    [1, 2, 3]
                );

                const createBasketArgs: CreateBasketArgs = {
                    name: "Basket Name Test",
                    symbol: "BNS",
                    uri: "test",
                    components: basketComponents,
                    rebalancer: admin.publicKey,
                };
                const programState = await pieProgram.getProgramState();
                const basketId = programState.basketCounter;

                const createBasketTx = await pieProgram.createBasket({
                    creator: creator.publicKey,
                    args: createBasketArgs,
                    basketId,
                });

                await sendAndConfirmTransaction(connection, createBasketTx, [creator]);

                const basketConfig = pieProgram.basketConfigPDA({basketId});

                const basketMint = pieProgram.basketMintPDA({basketId});
                const basketConfigData = await pieProgram.getBasketConfig({basketId});
                assert.equal(
                    basketConfigData.creator.toBase58(),
                    creator.publicKey.toBase58()
                );
                assert.equal(basketConfigData.mint.toBase58(), basketMint.toBase58());
                assert.equal(basketConfigData.components.length, 3);

                const mintData = await getMint(connection, basketMint);
                assert.equal(mintData.supply.toString(), "0");
                assert.equal(mintData.decimals, 6);
                assert.equal(
                    mintData.mintAuthority?.toBase58(),
                    basketConfig.toBase58()
                );
            });

            it("should fail if the creator is unauthorized", async () => {
                const basketComponents = await createBasketComponents(
                    connection,
                    admin,
                    [1, 2, 3]
                );
                const createBasketArgs: CreateBasketArgs = {
                    name: "Basket Name Test",
                    symbol: "BNS",
                    uri: "test",
                    components: basketComponents,
                    rebalancer: admin.publicKey,
                };
                const programState = await pieProgram.getProgramState();
                const basketId = programState.basketCounter;

                const createBasketTx = await pieProgram.createBasket({
                    creator: newCreator.publicKey,
                    args: createBasketArgs,
                    basketId,
                });
                try {
                    await sendAndConfirmTransaction(connection, createBasketTx, [
                        newCreator,
                    ]);
                    assert.fail("Transaction should have failed");
                } catch (e) {
                    assert.isNotEmpty(e);
                }
            });

            it("should success when the new creator is authorized", async () => {
                const updateWhitelistedCreatorTx =
                    await pieProgram.updateWhitelistedCreators({
                        admin: admin.publicKey,
                        newWhitelistedCreators: [creator.publicKey, newCreator.publicKey],
                    });

                await sendAndConfirmTransaction(
                    connection,
                    updateWhitelistedCreatorTx,
                    [admin]
                );

                const programState = await pieProgram.getProgramState();
                assert.equal(programState.whitelistedCreators.length, 2);
                assert.equal(
                    programState.whitelistedCreators[0].toBase58(),
                    creator.publicKey.toBase58()
                );
                assert.equal(
                    programState.whitelistedCreators[1].toBase58(),
                    newCreator.publicKey.toBase58()
                );

                const basketComponents = await createBasketComponents(
                    connection,
                    admin,
                    [1, 2, 3]
                );

                const createBasketArgs: CreateBasketArgs = {
                    name: "Basket Name Test",
                    symbol: "BNS",
                    uri: "test",
                    components: basketComponents,
                    rebalancer: admin.publicKey,
                };

                const createBasketTx = await pieProgram.createBasket({
                    creator: newCreator.publicKey,
                    args: createBasketArgs,
                    basketId: programState.basketCounter,
                });

                await sendAndConfirmTransaction(connection, createBasketTx, [
                    newCreator,
                ]);
            });
        });
    });

    describe.skip("update_rebalancer", () => {
        it("should update with new balancer in basket config state", async () => {
            const basketComponents = await createBasketComponents(
                connection,
                admin,
                [1, 2, 3]
            );
            const createBasketArgs: CreateBasketArgs = {
                name: "Basket Name Test",
                symbol: "BNS",
                uri: "test",
                components: basketComponents,
                rebalancer: admin.publicKey,
            };
            const programState = await pieProgram.getProgramState();
            const basketId = programState.basketCounter;
            const createBasketTx = await pieProgram.createBasket({
                creator: creator.publicKey,
                args: createBasketArgs,
                basketId,
            });
            await sendAndConfirmTransaction(connection, createBasketTx, [creator]);
            const basketState = await pieProgram.getBasketConfig({basketId});
            console.assert(
                basketState.rebalancer.toBase58(),
                admin.publicKey.toBase58()
            );

            const updateRebalancerTx = await pieProgram.updateRebalancer({
                creator: creator.publicKey,
                basketId,
                newRebalancer: rebalancer.publicKey,
            });
            await sendAndConfirmTransaction(connection, updateRebalancerTx, [
                creator,
            ]);
            console.assert(
                basketState.rebalancer.toBase58(),
                rebalancer.publicKey.toBase58()
            );
        });

        it("should fail if unauthorized", async () => {
        });
    });

    describe("create_multichain_basket", () => {
        it("should create a basket with metadata", async () => {
            const basketComponents = await createBasketComponents(
                connection,
                admin,
                [1000000, 2000000, 3000000]
            );

            await Promise.all(
                basketComponents.map(async (component) => {
                    await mintTokenTo(
                        connection,
                        component.mint,
                        admin,
                        admin,
                        admin.publicKey,
                        10
                    );
                })
            );

            const multichainComponent = {
                mint: new PublicKey("1111111111113gA4ULihrhPMjfVMXxpZBW5Beuki"),
                quantityInSysDecimal: new BN(1),
            };

            const createBasketArgs: CreateBasketArgs = {
                name: "Basket Name Test",
                symbol: "BNS",
                uri: "test",
                components: [...basketComponents, multichainComponent],
                rebalancer: admin.publicKey,
            };
            const programState = await pieProgram.getProgramState();
            const basketId = programState.basketCounter;

            const createBasketTx = await pieProgram.createBasket({
                creator: creator.publicKey,
                args: createBasketArgs,
                basketId,
            });

            await sendAndConfirmTransaction(connection, createBasketTx, [creator]);

            const basketConfig = pieProgram.basketConfigPDA({basketId});

            const basketMint = pieProgram.basketMintPDA({basketId});
            const basketConfigData = await pieProgram.getBasketConfig({basketId});
            assert.equal(
                basketConfigData.creator.toBase58(),
                creator.publicKey.toBase58()
            );
            assert.equal(basketConfigData.mint.toBase58(), basketMint.toBase58());
            assert.equal(basketConfigData.components.length, 4);

            const mintData = await getMint(connection, basketMint);
            assert.equal(mintData.supply.toString(), "0");
            assert.equal(mintData.decimals, 6);
            assert.equal(mintData.mintAuthority?.toBase58(), basketConfig.toBase58());
        });

        it("should deposit component to basket", async () => {
            const programState = await pieProgram.getProgramState();
            const basketId = programState.basketCounter.sub(new BN(1));

            const basketConfig = await pieProgram.getBasketConfig({basketId});

            await Promise.all(
                basketConfig.components.map(async (component) => {
                    if (component.mint.toBase58().startsWith("111")) return;
                    try {
                        const depositComponentTx = await pieProgram.depositComponent({
                            user: admin.publicKey,
                            basketId,
                            amount: component.quantityInSysDecimal
                                .div(new BN(10 ** 6))
                                .toString(),
                            mint: component.mint,
                        });
                        await sendAndConfirmTransaction(connection, depositComponentTx, [
                            admin,
                        ]);
                    } catch (e) {
                        console.log(e);
                    }
                })
            );

            const mintBasketTokenTx = await pieProgram.mintMultichainBasketToken({
                user: admin.publicKey,
                basketId,
                amount: "1",
            });

            await sendAndConfirmTransaction(connection, mintBasketTokenTx, [admin]);

            const userBaksetTokenBalanceAfter = await pieProgram.getTokenBalance({
                mint: basketConfig.mint,
                owner: admin.publicKey,
            });
            expect(userBaksetTokenBalanceAfter).to.equal(1);
        });
    });

    describe("wormhole verify queries", () => {
        it("initialize guardian set index", async () => {
            const info = await getWormholeBridgeData(anchor.getProvider().connection, coreBridgeAddress);
            guardianSetIndex = info.guardianSetIndex;
            console.log('guardianSetIndex', guardianSetIndex);
        });

        it("should return valid token balance", async () => {
            const rpc = 'https://ethereum.publicnode.com';
            const web3 = new Web3(rpc);
            const tokenAddress = '0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91';  // Wormhole Token (W)
            const walletAddress = '0xB01665C07C58086603EAcb1E7c488fb99bad0c28'; // Wormhole Whale

            const minABI = [
                {
                    "constant": true,
                    "inputs": [{"name": "_owner", "type": "address"}],
                    "name": "balanceOf",
                    "outputs": [{"name": "balance", "type": "uint256"}],
                    "type": "function"
                }
            ];
            const tokenContract = new web3.eth.Contract(minABI, tokenAddress);
            const data = tokenContract.methods.balanceOf(walletAddress).encodeABI();
            const callData = {
                to: tokenAddress,
                data: data
            };
            const latestBlock = 22204780; // 22204780

            const request = new QueryRequest(
                0, // Nonce
                [
                    new PerChainQueryRequest(
                        2, // Ethereum Wormhole Chain ID
                        new EthCallQueryRequest(latestBlock, [callData])
                    ),
                ]
            );
            const queryProxyMock = new QueryProxyMock({2: rpc});
            const getBalanceQueryResponse = await queryProxyMock.mock(request);
            console.log("getBalanceQueryResponse", getBalanceQueryResponse);

            await postQuerySigs(getBalanceQueryResponse.signatures, signaturesKeypair);

            try {
                const txid = await pieProgram.program.methods
                    .verifyQuery(
                        Buffer.from(getBalanceQueryResponse.bytes, "hex"),
                        mockGuardianSetIndex
                    )
                    .accountsPartial({
                        guardianSignatures: signaturesKeypair.publicKey,
                        guardianSet: deriveGuardianSetKey(
                            coreBridgeAddress,
                            mockGuardianSetIndex
                        ),
                    })
                    .preInstructions([
                        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
                            units: 450_000,
                        }),
                    ])
                    .rpc();

                const tx = await getTransactionWithRetry(pieProgram.program.provider.connection, txid);
                if (!tx || !tx.meta || !tx.meta.logMessages) {
                    throw new Error("Failed to retrieve transaction logs");
                }

                const actualTokenAddress = extractTokenAddress(tx)
                const actualTokenBalance = extractTokenBalance(tx);

                const expectedValues = {
                    expectedBalanceHex: "0x129c8f71ad02e2a6800000",
                    expectedTokenAddress: tokenAddress  // Wormhole Token (W)
                };

                if (!actualTokenBalance || !actualTokenAddress) {
                    throw new Error("Failed to extract token information");
                }
                if (actualTokenBalance !== BigInt(expectedValues.expectedBalanceHex)) {
                    throw new Error(`Token balance mismatch. Expected: ${BigInt(expectedValues.expectedBalanceHex)}, Got: ${actualTokenBalance}`);
                }

            } catch (error) {
                console.error("Error during test:", error);
                throw error;
            }
        });

    });
});

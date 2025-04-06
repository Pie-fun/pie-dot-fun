# pie-dot-fun

## Multichain Basket via Wormhole Settlement and Queries

We implemented a multichain basket mechanism using **Wormhole's Settlement** and **Queries** technologies.

Below are example transactions demonstrating how the system works.

---

### 1. Wormhole Settlement  
Used when a user purchases a basket token on **Solana** using **BaseETH**.  
BaseETH is bridged to Solana via Wormhole Settlement. Also used when a user purchases a underlying tokens on **Base** using **SOL**.

#### TX examples

**1. Forward BaseETH to Solana**  
[View on BaseScan](https://basescan.org/tx/0xb924f177b6661798bbcb1ef053b1b3064b5864889d3499cfce7d92704e4aaf4f)

**2. Settle on Solana**  
[View on Solscan](https://solscan.io/tx/huQqsDbVN1rVHEj9CoPqCQAs6p8vookZB5t15NxM5jLVAnjwENzG9yiTLWLxg5TVZzWRjn26yQYjYTPYkaGENrf)

**3. Purchase base tokens with SOL via wormhole(mayan) settlement**
- [Tx #1](https://basescan.org/tx/0xac903e56176ceab974358be6f8ba0b0ef849156b2795773c2d56dc100eca9cd4)  
- [Tx #2](https://basescan.org/tx/0x326f9bbbde88336e6044f0ca8f516c908cab43948a66a1335a5de3c923adf715)  
- [Tx #3](https://basescan.org/tx/0xf0a239457865671ca03892fc7b09e2a339b4ddfbef9240b64328e1dfde3724a3)  
- [Tx #4](https://basescan.org/tx/0x0d72c1e9d8ccce49ecbf16f7a8e0ed7fa5f0feb3a9df916f0e0e1cdc9f980b69)

---

### 2. Wormhole Queries  
Used by `pie.fun`'s Solana programs to verify that tokens on the **Base** chain are locked in `pie.fun`'s Base contracts.

📂 [View source code](https://github.com/Pie-fun/pie-dot-fun/tree/main/solana/programs/pie/src/instructions/wormhole)


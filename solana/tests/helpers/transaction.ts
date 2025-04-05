export async function getTransactionWithRetry(
    connection,
    signature,
    maxRetries = 5,
    initialDelay = 500
) {
    let retries = 0;
    let delay = initialDelay;

    while (retries <= maxRetries) {
        try {
            const tx = await connection.getTransaction(signature, {
                commitment: 'confirmed',
            });

            if (tx) {
                return tx;
            } else if (retries === maxRetries) {
                throw new Error(`Transaction not found after ${maxRetries} retries`);
            }
        } catch (error) {
            if (retries === maxRetries) {
                console.error(`Failed to get transaction after ${maxRetries} retries:`, error);
                throw error;
            }
        }

        console.log(`Transaction not ready, retrying in ${delay}ms (attempt ${retries + 1}/${maxRetries + 1})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 1.5; // 지수 백오프
        retries++;
    }

    throw new Error('Max retries exceeded');
}


export const extractTokenBalance = (tx) => {
    const balanceLog = tx.meta.logMessages.find(log => log.includes("Program log: TokenBalance:"));
    if (!balanceLog) {
        throw new Error("Token balance value not found");
    }

    const balanceMatch = balanceLog.match(/TokenBalance: (?:0x)?([0-9a-fA-F]+)/);
    if (!balanceMatch || !balanceMatch[1]) {
        throw new Error("Failed to extract token balance");
    }

    const balanceHex = "0x" + balanceMatch[1];
    return BigInt(balanceHex)
};


export const extractTokenAddress = (tx) => {
    const addressLog = tx.meta.logMessages.find(log => log.includes("Program log: TokenAddress:"));
    if (!addressLog) {
        throw new Error("Token address not found");
    }

    const addressMatch = addressLog.match(/TokenAddress: (?:0x)?([0-9a-fA-F]+)/);
    if (!addressMatch || !addressMatch[1]) {
        throw new Error("Failed to extract token address");
    }

    return "0x" + addressMatch[1];
};
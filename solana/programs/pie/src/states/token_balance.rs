use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug)]
pub struct TokenBalance {
    pub amount: [u8; 32],
    pub token_address: [u8; 20],  // ERC-20 Token Address (20 bytes Ethereum address)
}

impl TokenBalance {
    pub fn to_string(&self) -> String {
        let mut hex_str = String::from("0x");
        for byte in self.amount.iter() {
            hex_str.push_str(&format!("{:02x}", byte));
        }
        hex_str
    }

    pub fn token_address_to_string(&self) -> String {
        let mut hex_str = String::from("0x");
        for byte in self.token_address.iter() {
            hex_str.push_str(&format!("{:02x}", byte));
        }
        hex_str
    }

    pub fn new() -> Self {
        Self {
            amount: [0u8; 32],
            token_address: [0u8; 20],
        }
    }

    pub fn from_bytes(amount_data: &[u8], token_address: [u8; 20]) -> Self {
        let mut amount = [0u8; 32];
        if amount_data.len() == 32 {
            amount.copy_from_slice(amount_data);
        }
        Self {
            amount,
            token_address,
        }
    }
}
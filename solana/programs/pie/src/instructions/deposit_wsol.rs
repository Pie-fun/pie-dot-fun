use anchor_lang::prelude::*;
use anchor_spl::{
    token::Token, token_interface::TokenAccount
};

use crate::{
    constant::USER_FUND, error::PieError, utils::{calculate_fee_amount, transfer_fees, transfer_from_user_to_pool_vault}, BasketConfig, ProgramState, UserFund, BASKET_CONFIG, NATIVE_MINT, PROGRAM_STATE 
};

#[derive(Accounts)]
pub struct DepositWsol<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        mut, 
        seeds = [PROGRAM_STATE], 
        bump = program_state.bump
        )]    
    pub program_state: Box<Account<'info, ProgramState>>,

    #[account(
        init_if_needed,
        payer = user,
        space = UserFund::INIT_SPACE,
        seeds = [USER_FUND, &user.key().as_ref(), &basket_config.id.to_be_bytes()],
        bump
    )]
    pub user_fund: Box<Account<'info, UserFund>>,

    #[account(        
        mut,
        seeds = [BASKET_CONFIG, &basket_config.id.to_be_bytes()],
        bump    
    )]
    pub basket_config: Box<Account<'info, BasketConfig>>,
    #[account(
        mut,
        token::mint = NATIVE_MINT,
        token::authority = user
    )]
    pub user_wsol_account: Box<InterfaceAccount<'info, TokenAccount>>,

    #[account(
        mut,
        associated_token::mint = NATIVE_MINT,
        associated_token::authority = basket_config
    )]
    pub vault_wsol_account:  Box<InterfaceAccount<'info, TokenAccount>>,

    #[account(
        mut,
        token::authority = program_state.platform_fee_wallet,
        token::mint = NATIVE_MINT,
    )]
    pub platform_fee_token_account: Box<InterfaceAccount<'info, TokenAccount>>,

    #[account(
        mut,
        token::authority = basket_config.creator,
        token::mint = NATIVE_MINT,
    )]
    pub creator_token_account: Box<InterfaceAccount<'info, TokenAccount>>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[event]
pub struct DepositWsolEvent {
    pub basket_id: u64,
    pub user: Pubkey,
    pub amount: u64,
}

pub fn deposit_wsol(ctx: Context<DepositWsol>, amount: u64) -> Result<()> {
    require!(
        ctx.accounts.basket_config.components
            .iter()
            .any(|c| c.mint == NATIVE_MINT),
        PieError::InvalidComponent
    );
    require!(!ctx.accounts.basket_config.is_rebalancing, PieError::RebalancingInProgress);
    let user_fund = &mut ctx.accounts.user_fund;
    let (platform_fee_amount, creator_fee_amount) = calculate_fee_amount(&ctx.accounts.program_state, amount)?;

    transfer_fees(
        &ctx.accounts.user_wsol_account.to_account_info(),
        &ctx.accounts.platform_fee_token_account.to_account_info(),
        &ctx.accounts.creator_token_account.to_account_info(),
        &ctx.accounts.user.to_account_info(),
        &ctx.accounts.token_program.to_account_info(),
        platform_fee_amount,
        creator_fee_amount,
    )?;
    
    transfer_from_user_to_pool_vault(
        &ctx.accounts.user_wsol_account.to_account_info(),
        &ctx.accounts.vault_wsol_account.to_account_info(),
        &ctx.accounts.user.to_account_info(),
        &ctx.accounts.token_program,
        amount
    )?;

    user_fund.bump = ctx.bumps.user_fund;
    user_fund.upsert_component(
        NATIVE_MINT,
        amount
    )?;

    emit!(DepositWsolEvent {
        basket_id: ctx.accounts.basket_config.id,
        user: ctx.accounts.user.key(),
        amount
    });

    Ok(())
}

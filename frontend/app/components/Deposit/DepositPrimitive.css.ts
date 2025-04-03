import { queries } from '@/libs/vanilla-extract/queries'
import { vars } from '@/libs/vanilla-extract/vars'
import { globalStyle } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const depositMethods = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.m,
    paddingLeft: vars.spaces.l,
    paddingRight: vars.spaces.l,
    paddingBottom: vars.spaces.l,

    '@media': {
      [queries.breakpoints.mobile]: {
        flexWrap: 'wrap',
      },
      [queries.breakpoints.desktop]: {
        width: '45rem',
      },
    },
  },
  variants: {},
  defaultVariants: {},
})

export type DepositMethodsVariants = RecipeVariants<typeof depositMethods>

export const bridgeChains = recipe({
  base: {
    display: 'flex',
    height: '6.25rem',
  },
  variants: {},
  defaultVariants: {},
})

export type BridgeChainsVariants = RecipeVariants<typeof bridgeChains>

export const nativeBalance = recipe({
  base: {
    display: 'flex',
  },
  variants: {},
  defaultVariants: {},
})

export type NativeBalanceVariants = RecipeVariants<typeof nativeBalance>

globalStyle(
  `button:has(${nativeBalance.classNames.base}) ${nativeBalance.classNames.base}`,
  {
    display: 'none',
  },
)

export const tooltip = recipe({
  base: {
    width: '16rem',
  },
  variants: {},
  defaultVariants: {},
})

export type TooltipVariants = RecipeVariants<typeof tooltip>

export const expectedValue = recipe({
  base: {
    marginTop: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type ExpectedValueVariants = RecipeVariants<typeof expectedValue>

export const relayLogo = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.33px',
  },
  variants: {},
  defaultVariants: {},
})

export type RelayLogoVariants = RecipeVariants<typeof relayLogo>

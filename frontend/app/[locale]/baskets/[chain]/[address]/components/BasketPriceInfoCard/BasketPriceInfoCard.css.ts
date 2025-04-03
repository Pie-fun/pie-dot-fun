import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const prices = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces.s,
    alignItems: 'flex-end',
  },
  variants: {},
  defaultVariants: {},
})

export type PricesVariants = RecipeVariants<typeof prices>

export const solPrice = recipe({
  base: {
    display: 'flex',
    marginBottom: vars.spaces.xxs,
  },
  variants: {},
  defaultVariants: {},
})

export type SolPriceVariants = RecipeVariants<typeof solPrice>

export const statistics = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type StatisticsVariants = RecipeVariants<typeof statistics>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {},
  variants: {
    isLoading: {
      true: {
        opacity: 0,
      },
    },
  },
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const basketTradingChart = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type BasketTradingChartVariants = RecipeVariants<
  typeof basketTradingChart
>

export const chartContainer = recipe({
  base: {
    height: '18.75rem',
  },
  variants: {},
  defaultVariants: {},
})

export type ChartVariants = RecipeVariants<typeof chartContainer>

export const toggles = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  variants: {},
  defaultVariants: {},
})

export type TogglesVariants = RecipeVariants<typeof toggles>

export const scaleToggles = recipe({
  base: {
    marginLeft: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type ScaleTogglesVariants = RecipeVariants<typeof scaleToggles>

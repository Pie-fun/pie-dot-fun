import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const transformedValue = recipe({
  base: {
    marginLeft: 'auto',
    display: 'flex',
    gap: vars.spaces.xxs,
    color: vars.colors.texts.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type TransformedValueVariants = RecipeVariants<typeof transformedValue>

export const tooltips = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexFlow: 'wrap-reverse',
    flexDirection: 'row-reverse',
  },
  variants: {},
  defaultVariants: {},
})

export type TooltipsVariants = RecipeVariants<typeof tooltips>

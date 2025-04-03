import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    wordBreak: 'break-all',
  },
  variants: {},
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const trigger = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
  variants: {
    color: {
      primary: {
        color: vars.colors.texts.clickable,
      },
      secondary: {
        color: vars.colors.texts.primary,
      },
    },
  },
  defaultVariants: {},
})

export type TriggerVariants = RecipeVariants<typeof trigger>

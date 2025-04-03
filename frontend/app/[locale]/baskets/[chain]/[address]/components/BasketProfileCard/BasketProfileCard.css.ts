import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const copyToClipboard = recipe({
  base: {
    display: 'inline-flex',
    verticalAlign: 'text-top',
    marginLeft: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type CopyToClipboardVariants = RecipeVariants<typeof copyToClipboard>

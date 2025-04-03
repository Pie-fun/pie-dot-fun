import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const ellipsis = recipe({
  base: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all',
  },
  variants: {
    isLineClamp: {
      true: {
        display: '-webkit-box',
        whiteSpace: 'normal',
        WebkitBoxOrient: 'vertical',
      },
    },
  },
  defaultVariants: {},
})

export type EllipsisVariants = RecipeVariants<typeof ellipsis>

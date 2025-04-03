import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const scrollArea = recipe({
  base: {
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {},
  defaultVariants: {},
})

export type ScrollAreaVariants = RecipeVariants<typeof scrollArea>

export const viewport = recipe({
  base: {
    width: '100%',
    height: '100%',
  },
  variants: {},
  defaultVariants: {},
})

export type ViewportVariants = RecipeVariants<typeof viewport>

export const scrollBar = recipe({
  base: {
    display: 'flex',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    borderColor: 'transparent',
    touchAction: 'none',
    userSelect: 'none',
  },
  variants: {
    orientation: {
      vertical: {
        borderLeftWidth: '1px',
        width: vars.spaces.s,
        height: '100%',
        padding: '1px',
      },
      horizontal: {
        flexDirection: 'column',
        borderTopWidth: '1px',
        height: vars.spaces.s,
        padding: '1px',
      },
    },
    isHide: {
      true: {
        display: 'none',
      },
    },
  },
  defaultVariants: {},
})

export type ScrollBarVariants = RecipeVariants<typeof scrollBar>

export const thumb = recipe({
  base: {
    position: 'relative',
    flex: '1 1 0%',
    borderRadius: vars.radiuses.max,
    background: vars.colors.backgrounds.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type ThumbVariants = RecipeVariants<typeof thumb>

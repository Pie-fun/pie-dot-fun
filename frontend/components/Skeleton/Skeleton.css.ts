import * as animations from '@/libs/vanilla-extract/animations.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '@/libs/vanilla-extract/vars'

export const skeleton = recipe({
  base: {
    ...animations.pulse,
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    layout: {
      fillWidth: {
        width: '100%',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
    },
    shape: {
      rectangle: {
        borderRadius: vars.radiuses.xs,
      },
      circle: {
        borderRadius: vars.radiuses.max,
      },
    },
    transition: {
      ready: {
        opacity: '0',
        background: vars.colors.skeleton.light,
      },
      done: {
        opacity: '1',
        background: vars.colors.skeleton.dark,
      },
    },
  },
  defaultVariants: {
    layout: 'fill',
  },
})

export type SkeletonVariants = NonNullable<RecipeVariants<typeof skeleton>>

import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const box = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    layout: {
      fillWidth: {
        width: '100%',
      },
      fillHeight: {
        height: '100%',
      },
      fill: {
        width: '100%',
        height: '100%',
      },
      hug: {
        width: 'fit-content',
        height: 'fit-content',
      },
    },
    gap: {
      xxxl: {
        gap: vars.spaces.xxxl,
      },
      xxl: {
        gap: vars.spaces.xxl,
      },
      xl: {
        gap: vars.spaces.xl,
      },
      l: {
        gap: vars.spaces.l,
      },
      m: {
        gap: vars.spaces.m,
      },
      s: {
        gap: vars.spaces.s,
      },
      xs: {
        gap: vars.spaces.xs,
      },
      xxs: {
        gap: vars.spaces.xxs,
      },
      xxxs: {
        gap: vars.spaces.xxxs,
      },
    },
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    align: {
      start: {},
      startCenter: {},
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      end: {},
      spaceBetween: {},
      spaceBetweenCenter: {},
    },
    marginBottom: {
      auto: {
        marginBottom: 'auto',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        orientation: 'horizontal',
        align: 'start',
      },
      style: {
        justifyContent: 'flex-start',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        align: 'startCenter',
      },
      style: {
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        align: 'end',
      },
      style: {
        justifyContent: 'flex-end',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        align: 'spaceBetween',
      },
      style: {
        justifyContent: 'space-between',
      },
    },
    {
      variants: {
        orientation: 'horizontal',
        align: 'spaceBetweenCenter',
      },
      style: {
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        align: 'start',
      },
      style: {
        alignItems: 'flex-start',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        align: 'startCenter',
      },
      style: {
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        align: 'end',
      },
      style: {
        alignItems: 'flex-end',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        align: 'spaceBetween',
      },
      style: {
        alignItems: 'space-between',
      },
    },
    {
      variants: {
        orientation: 'vertical',
        align: 'spaceBetweenCenter',
      },
      style: {
        alignItems: 'space-between',
        justifyContent: 'center',
      },
    },
  ],
  defaultVariants: {
    layout: 'hug',
    orientation: 'horizontal',
  },
})

export type BoxVariants = RecipeVariants<typeof box>

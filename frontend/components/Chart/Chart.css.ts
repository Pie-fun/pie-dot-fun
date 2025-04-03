import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const root = recipe({
  base: [
    {
      display: 'flex',
      flex: '1',
      aspectRatio: '16 / 9',
      justifyContent: 'center',
    },
  ],
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

globalStyle(`${root.classNames.base} .recharts-cartesian-axis-tick text`, {
  fill: vars.colors.texts.tertiary,
})

globalStyle(
  `${root.classNames.base} .recharts-cartesian-grid line[stroke="#ccc"]`,
  {
    stroke: vars.colors.border.primary,
  },
)

globalStyle(`${root.classNames.base} .recharts-curve.recharts-tooltip-cursor`, {
  stroke: vars.colors.border.primary,
})

globalStyle(`${root.classNames.base} .recharts-dot[stroke="#fff"]`, {
  stroke: 'transparent',
})

globalStyle(`${root.classNames.base} .recharts-layer`, {
  outline: 'none',
})

globalStyle(
  `${root.classNames.base} .recharts-pie .recharts-layer .recharts-text`,
  {
    fill: vars.colors.texts.white,
    textTransform: 'capitalize',
  },
)

globalStyle(
  `${root.classNames.base} .recharts-polar-angle-axis-tick .recharts-layer .recharts-text`,
  {
    fill: vars.colors.texts.tertiary,
  },
)

globalStyle(`${root.classNames.base} .recharts-radial-bar-label`, {
  fill: vars.colors.texts.white,
  textTransform: 'capitalize',
})

globalStyle(`${root.classNames.base} .recharts-polar-grid [stroke="#ccc"]`, {
  stroke: vars.colors.border.primary,
})

globalStyle(`${root.classNames.base} .recharts-radial-bar-background-sector`, {
  fill: vars.colors.backgrounds.secondary,
})

globalStyle(
  `${root.classNames.base} .recharts-rectangle.recharts-tooltip-cursor`,
  {
    fill: vars.colors.backgrounds.secondary,
  },
)

globalStyle(
  `${root.classNames.base} .recharts-reference-line [stroke="#ccc"]`,
  {
    stroke: vars.colors.border.primary,
  },
)

globalStyle(`${root.classNames.base} .recharts-sector[stroke="#fff"]`, {
  stroke: 'transparent',
})

globalStyle(`${root.classNames.base} .recharts-sector`, {
  outline: 'none',
})

globalStyle(`${root.classNames.base} .recharts-surface`, {
  outline: 'none',
})

export type RootVariants = RecipeVariants<typeof root>

export const tooltipRoot = recipe({
  base: [
    {
      display: 'grid',
      minWidth: '8rem',
      alignItems: 'start',
      gap: vars.spaces.xs,
      borderRadius: vars.radiuses.xs,
      border: `1px solid ${vars.colors.border.secondary}`,
      backgroundColor: vars.colors.backgrounds.default,
      padding: `${vars.spaces.xs} ${vars.spaces.s}`,
    },
  ],
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export type TooltipRootVariants = RecipeVariants<typeof tooltipRoot>

export const tooltipContent = recipe({
  base: [
    {
      display: 'grid',
      gap: vars.spaces.xs,
    },
  ],
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export type TooltipContentVariants = RecipeVariants<typeof tooltipContent>

export const tooltipItemRoot = recipe({
  base: [
    {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      gap: vars.spaces.s,
    },
  ],
  variants: {
    indicator: {
      dot: {
        alignItems: 'center',
      },
      line: {},
      dashed: {},
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type TooltipItemRootVariants = RecipeVariants<typeof tooltipItemRoot>

export const tooltipItem = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
    },
  ],
  variants: {
    indicator: {
      dot: {
        height: vars.spaces.m,
        width: vars.spaces.m,
        borderRadius: vars.radiuses.max,
      },
      line: {
        height: vars.spaces.l,
        width: vars.spaces.xxs,
        borderRadius: vars.radiuses.xs,
      },
      dashed: {
        height: vars.spaces.l,
        width: '0',
        borderWidth: '1.5px',
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type TooltipItemVariants = RecipeVariants<typeof tooltipItem>

export const tooltipLabel = recipe({
  base: [
    typographyStyles.typography({ typography: 'caption1' }),
    {
      display: 'flex',
      flex: '1',
      justifyContent: 'space-between',
      gap: vars.spaces.xl,
    },
  ],
  variants: {
    nestLabel: {
      true: {
        alignItems: 'flex-end',
      },
      false: {
        alignItems: 'center',
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type TooltipLabelVariants = RecipeVariants<typeof tooltipLabel>

export const legendRoot = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: vars.spaces.xl,
    },
  ],
  variants: {
    verticalAlign: {
      top: {
        paddingBottom: vars.spaces.l,
      },
      middle: {},
      bottom: {
        paddingTop: vars.spaces.l,
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {},
})

export type LegendRootVariants = RecipeVariants<typeof legendRoot>

export const legendItem = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      gap: vars.spaces.xs,
    },
  ],
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export type LegendItemVariants = RecipeVariants<typeof legendItem>

export const legendItemIndicator = recipe({
  base: [
    {
      width: vars.spaces.s,
      height: vars.spaces.s,
      borderRadius: vars.radiuses.xs,
    },
  ],
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

export type LegendItemIndicatorVariants = RecipeVariants<
  typeof legendItemIndicator
>

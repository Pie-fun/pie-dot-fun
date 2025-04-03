import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle } from '@vanilla-extract/css'
import { queries } from '@/libs/vanilla-extract/queries'
import * as typographyStyles from '@/components/Typography/Typography.css'

export const rootWrapper = recipe({
  base: {
    overflow: 'auto',
    width: '100%',
  },
  variants: {},
  defaultVariants: {},
})

export type RootWrapperVariants = RecipeVariants<typeof rootWrapper>

export const root = recipe({
  base: {
    width: '100%',
    tableLayout: 'fixed',
    overflow: 'auto',
    borderSpacing: '0',
  },
  variants: {
    isDisableResponsive: {
      true: {},
    },
    captionSide: {
      top: {
        captionSide: 'top',
      },
      bottom: {
        captionSide: 'bottom',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'block',
          },
          [queries.breakpoints.desktop]: {
            display: 'table',
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const header = recipe({
  base: {},
  variants: {
    isDisableResponsive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'block',
          },
          [queries.breakpoints.desktop]: {
            display: 'table-header-group',
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type HeaderVariants = RecipeVariants<typeof header>

export const body = recipe({
  base: {},
  variants: {
    isDisableResponsive: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'flex',
            flexDirection: 'column',
          },
          [queries.breakpoints.desktop]: {
            display: 'table-row-group',
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type BodyVariants = RecipeVariants<typeof body>

export const footer = recipe({
  base: {},
  variants: {},
  defaultVariants: {},
})

export type FooterVariants = RecipeVariants<typeof footer>

export const row = recipe({
  base: {
    selectors: {
      '&[data-state="selected"]': {},
      '&[data-state="disabled"]': {
        cursor: 'not-allowed',
      },
      '&:hover:not(:disabled)': {},
    },
  },
  variants: {
    isDisableResponsive: {
      true: {},
      false: {},
    },
    rowType: {
      header: {},
      body: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'flex',
            flexDirection: 'column',

            gap: vars.spaces.s,
            paddingTop: vars.spaces.s,
            paddingBottom: vars.spaces.s,
            borderTop: `1px solid ${vars.colors.border.default}`,
            borderBottom: `1px solid ${vars.colors.border.default}`,
          },
          [queries.breakpoints.desktop]: {
            display: 'table-row',
          },
        },
      },
    },
    {
      variants: {
        isDisableResponsive: false,
        rowType: 'header',
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
          },
          [queries.breakpoints.desktop]: {
            position: 'relative',
            top: 'unset',
            left: 'unset',
          },
        },
      },
    },
    {
      variants: {
        isDisableResponsive: false,
        rowType: 'body',
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {},
          [queries.breakpoints.desktop]: {},
        },
      },
    },
  ],
  defaultVariants: {},
})

globalStyle(`${row.classNames.base}[data-state="disabled"] > td`, {
  color: vars.colors.texts.tertiary,
})

globalStyle(
  `${row.classNames.variants.isDisableResponsive.false}:not(:first-child)`,
  {
    '@media': {
      [queries.breakpoints.mobile]: {
        borderTop: 0,
      },
    },
  },
)

export type RowVariants = RecipeVariants<typeof row>

export const headerCell = recipe({
  base: [
    typographyStyles.typography({
      typography: 'caption1',
      fontWeight: 'medium',
    }),
    {
      textAlign: 'left',
      verticalAlign: 'middle',
      color: vars.colors.texts.caption.primary,
      flexShrink: 0,

      selectors: {
        '&:has([role="checkbox"])': {
          paddingLeft: vars.spaces.xs,
          paddingRight: vars.spaces.s,
        },
      },
    },
  ],
  variants: {
    isDisableResponsive: {
      true: {
        background: vars.colors.backgrounds.primary,
        padding: vars.spaces.s,
        borderTop: `1px solid ${vars.colors.border.default}`,
        borderBottom: `1px solid ${vars.colors.border.default}`,
      },
    },
    headerCellType: {
      pc: {},
      mobile: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
        headerCellType: 'pc',
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'block',
          },
          [queries.breakpoints.desktop]: {
            display: 'table-cell',

            background: vars.colors.backgrounds.primary,
            padding: vars.spaces.s,
            borderTop: `1px solid ${vars.colors.border.default}`,
            borderBottom: `1px solid ${vars.colors.border.default}`,
          },
        },
      },
    },
    {
      variants: {
        isDisableResponsive: false,
        headerCellType: 'mobile',
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            width: '5rem',
          },
          [queries.breakpoints.desktop]: {
            display: 'none',
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type HeaderCellVariants = RecipeVariants<typeof headerCell>

globalStyle(
  `${row.classNames.variants.isDisableResponsive.true}:has(${headerCell.classNames.base}:nth-of-type(2)) ${headerCell.classNames.base}:not(:first-child)`,
  {
    '@media': {
      [queries.breakpoints.desktop]: {
        paddingLeft: 0,
      },
    },
  },
)

globalStyle(
  `${row.classNames.base}:has(${headerCell.classNames.base}:nth-of-type(2)) ${headerCell.classNames.base}:not(:first-child)`,
  {
    paddingLeft: 0,
  },
)

export const cell = recipe({
  base: {
    width: '100%',
    color: vars.colors.texts.primary,
    verticalAlign: 'middle',

    selectors: {
      '&:has([role="checkbox"])': {
        paddingLeft: vars.spaces.xs,
        paddingRight: vars.spaces.s,
      },
      '&:has([role="radio"])': {
        paddingLeft: vars.spaces.xs,
        paddingRight: vars.spaces.s,
      },
    },
  },
  variants: {
    isDisableResponsive: {
      true: {
        borderBottom: `1px solid ${vars.colors.border.default}`,
        padding: vars.spaces.s,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isDisableResponsive: false,
      },
      style: {
        '@media': {
          [queries.breakpoints.mobile]: {
            display: 'flex',
            alignItems: 'center',

            gap: vars.spaces.s,
          },
          [queries.breakpoints.desktop]: {
            display: 'table-cell',

            borderBottom: `1px solid ${vars.colors.border.default}`,
            padding: vars.spaces.s,
          },
        },
      },
    },
  ],
  defaultVariants: {},
})

export type CellVariants = RecipeVariants<typeof cell>

globalStyle(
  `${row.classNames.base}:has(${cell.classNames.base}:nth-of-type(2)) ${cell.classNames.base}:not(:first-child)`,
  {
    '@media': {
      [queries.breakpoints.desktop]: {
        paddingLeft: 0,
      },
    },
  },
)

globalStyle(
  `${row.classNames.variants.isDisableResponsive.true}:has(${cell.classNames.base}:nth-of-type(2)) ${cell.classNames.base}:not(:first-child)`,
  {
    paddingLeft: 0,
  },
)

export const caption = recipe({
  base: {
    marginTop: vars.spaces.m,
    color: vars.colors.texts.secondary,
  },
  variants: {},
  defaultVariants: {},
})

export type CaptionVariants = RecipeVariants<typeof caption>

import { typography } from '@/components/Typography/Typography.css'
import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const group = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {},
  defaultVariants: {},
})

export type GroupVariants = RecipeVariants<typeof group>

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: vars.spaces.s,
    background: vars.colors.backgrounds.default,
    borderRadius: vars.radiuses.xs,
    border: `1px solid ${vars.colors.border.primary}`,
    zIndex: '3',
    overflowY: 'auto',
    maxWidth: '100dvw',
    maxHeight: '100dvh',
  },
  variants: {},
  defaultVariants: {},
})

export type ContentVariants = RecipeVariants<typeof content>

export const item = recipe({
  base: [
    {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: vars.spaces.s,
      gap: vars.spaces.s,
      width: '100%',
      color: vars.colors.texts.primary,
      borderRadius: vars.radiuses.xs,
      outline: 0,
      cursor: 'pointer',

      selectors: {
        '&[data-highlighted]': {
          background: vars.colors.backgrounds.secondary,
        },
        '&[data-disabled]': {
          cursor: 'not-allowed',
          opacity: vars.opacities.disabled,
        },
      },
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type ItemVariants = RecipeVariants<typeof item>

export const checkboxItem = recipe({
  base: {},
  variants: {},
  defaultVariants: {},
})

export type CheckboxItemVariants = RecipeVariants<typeof checkboxItem>

export const itemIndicator = recipe({
  base: {
    position: 'absolute',
    left: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '0.875rem',
    height: '0.875rem',
  },
  variants: {},
  defaultVariants: {},
})

export type ItemIndicatorVariants = RecipeVariants<typeof itemIndicator>

export const radioItem = recipe({
  base: {},
  variants: {},
  defaultVariants: {},
})

export type RadioItemVariants = RecipeVariants<typeof radioItem>

export const label = recipe({
  base: [
    typography({ typography: 'body1', fontWeight: 'bold', color: 'primary' }),
    {
      padding: vars.spaces.s,
    },
  ],
  variants: {
    inset: {
      true: {},
    },
  },
  defaultVariants: {},
})

export type LabelVariants = RecipeVariants<typeof label>

export const separator = recipe({
  base: {
    width: '100%',
    height: '1px',
    background: vars.colors.border.default,
  },
  variants: {},
  defaultVariants: {},
})

export type SeparatorVariants = RecipeVariants<typeof separator>

export const shortcut = recipe({
  base: {
    opacity: 0.6,
  },
  variants: {},
  defaultVariants: {},
})

export type ShortcutVariants = RecipeVariants<typeof shortcut>

export const text = recipe({
  base: {
    marginRight: 'auto',
  },
  variants: {},
  defaultVariants: {},
})

export type TextVariants = RecipeVariants<typeof text>

export const header = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: vars.spaces.s,
    gap: vars.spaces.s,
  },
  variants: {},
  defaultVariants: {},
})

export type HeaderVariants = RecipeVariants<typeof header>

export const title = recipe({
  base: [
    {
      color: vars.colors.texts.primary,
      marginRight: 'auto',
    },
  ],
  variants: {},
  defaultVariants: {},
})

export type TitleVariants = RecipeVariants<typeof title>

export const footer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: vars.spaces.s,
    gap: vars.spaces.m,
  },
  variants: {},
  defaultVariants: {},
})

export type FooterVariants = RecipeVariants<typeof footer>

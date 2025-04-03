import { vars } from '@/libs/vanilla-extract/vars'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: {
    display: 'block',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: vars.spaces.xxl,
  },
  variants: {},
})

export type RootVariants = RecipeVariants<typeof root>

export const emptyContentWrapper = recipe({
  base: {
    width: '100%',
  },
})

export type EmptyContentWrapperVariants = RecipeVariants<
  typeof emptyContentWrapper
>

export const emptyContent = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '8.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export type EmptyContentVariants = RecipeVariants<typeof emptyContent>

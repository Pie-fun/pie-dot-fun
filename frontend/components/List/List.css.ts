import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const root = recipe({
  base: [
    {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '1rem',
    },
  ],
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fillWidth: {
        width: '100%',
      },
    },
    listStyleType: {
      revert: {
        listStyleType: 'revert',
      },
      disc: {
        listStyleType: 'disc',
      },
      decimal: {
        listStyleType: 'decimal',
      },
    },
  },
  defaultVariants: {
    layout: 'hug',
    listStyleType: 'revert',
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const item = recipe({
  base: [],
  variants: {
    layout: {
      hug: {
        width: 'fit-content',
      },
      fillWidth: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    layout: 'hug',
  },
})

export type ItemVariants = RecipeVariants<typeof item>

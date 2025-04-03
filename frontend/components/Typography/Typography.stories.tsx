import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@/components/Typography/Typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    as: {
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'Can be used with any ElementType',
    },
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    fontWeight: {
      control: 'radio',
      options: ['bold', 'medium', 'regular'],
    },
    typography: {
      control: 'radio',
      options: [
        'displayTitle1',
        'displayTitle2',
        'title1',
        'title2',
        'title3',
        'title4',
        'body2',
        'body3',
        'caption1',
        'caption2',
      ],
    },
    color: {
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'white',
        'brandPrimary',
        'infoPrimary',
        'alertPrimary',
        'inverse',
      ],
    },
    wordBreak: {
      control: 'radio',
      options: ['breakAll'],
    },
    textAlign: {
      control: 'radio',
      options: ['center'],
    },
  },
  args: {
    as: 'span',
    color: 'secondary',
    fontWeight: 'medium',
    typography: 'caption1',
    isUnderline: false,
    children: 'Typography Text',
  },
}

export default meta

export const Default: StoryObj<typeof Typography> = {
  render: (args) => <Typography {...args} />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { Rate } from '@/components/Rate/Rate'

const meta: Meta<typeof Rate> = {
  component: Rate,
  argTypes: {
    value: {
      control: 'number',
    },
    size: {
      control: 'radio',
      options: ['l', 'm', 's', 'xs'],
    },
    fontWeight: {
      control: 'radio',
      options: ['bold', 'medium', 'regular'],
    },
    theme: {
      control: 'radio',
      options: ['color', 'mono', 'inherit'],
    },
    sign: {
      control: 'radio',
      options: ['icon', 'plusMinus'],
    },
  },
  args: {
    value: 23.7,
    size: 'l',
    fontWeight: 'bold',
    theme: 'color',
    sign: 'icon',
  },
}

export default meta

export const Default: StoryObj<typeof Rate> = {
  render: (args) => <Rate {...args} />,
}

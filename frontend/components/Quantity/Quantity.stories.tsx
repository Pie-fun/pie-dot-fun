import type { Meta, StoryObj } from '@storybook/react'
import { Quantity } from '@/components/Quantity/Quantity'

const meta: Meta<typeof Quantity> = {
  component: Quantity,
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
  },
  args: {
    value: 12.34000123400005678,
    emptyValue: '-',
    threshold: 3,
    size: 'l',
    fontWeight: 'regular',
    decimal: 4,
  },
}

export default meta

export const Default: StoryObj<typeof Quantity> = {
  render: (args) => <Quantity {...args} />,
}

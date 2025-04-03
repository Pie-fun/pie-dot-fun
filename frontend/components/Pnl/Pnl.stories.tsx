import type { Meta, StoryObj } from '@storybook/react'
import { Pnl } from '@/components/Pnl/Pnl'

const meta: Meta<typeof Pnl> = {
  component: Pnl,
  argTypes: {
    value: {
      control: 'number',
    },
    percentageValue: {
      control: 'number',
    },
  },
  args: {
    value: 23.7,
    percentageValue: 0.5,
  },
}

export default meta

export const Default: StoryObj<typeof Pnl> = {
  render: (args) => <Pnl {...args} />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/Separator/Separator'

const meta: Meta<typeof Separator> = {
  component: Separator,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'radio',
      options: [1, 2, 3, 4],
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'brand', 'infoPrimary', 'alertPrimary'],
    },
  },
  args: {
    orientation: 'horizontal',
    size: 1,
    color: 'default',
    decorative: true,
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'gray',
        width: '200px',
        height: '200px',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Separator> = {
  render: (args) => <Separator {...args} />,
}

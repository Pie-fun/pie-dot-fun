import type { Meta, StoryObj } from '@storybook/react'
import { Ellipsis } from '@/components/Ellipsis/Ellipsis'

const meta: Meta<typeof Ellipsis> = {
  component: Ellipsis,
  argTypes: {},
  args: {
    lineClamp: 1,
    children: 'Ellipsis Text',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '75px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: StoryObj<typeof Ellipsis> = {
  render: (args) => <Ellipsis {...args} />,
}

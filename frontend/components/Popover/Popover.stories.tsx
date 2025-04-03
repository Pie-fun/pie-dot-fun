import type { Meta, StoryObj } from '@storybook/react'
import * as Popover from '@/components/Popover/Popover'

const meta: Meta<typeof Popover.Content> = {
  component: Popover.Content,
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
  },
  args: {
    side: 'bottom',
    align: 'center',
    sideOffset: 4,
  },
}

export default meta

export const Default: StoryObj<typeof Popover.Content> = {
  render: (args) => (
    <Popover.Root>
      <Popover.Trigger>This is Trigger</Popover.Trigger>
      <Popover.Content {...args}>Content</Popover.Content>
    </Popover.Root>
  ),
}

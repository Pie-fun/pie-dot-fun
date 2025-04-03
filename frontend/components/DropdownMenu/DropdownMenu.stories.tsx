import type { Meta, StoryObj } from '@storybook/react'
import * as DropdownMenu from '@/components/DropdownMenu/DropdownMenu'

const meta: Meta<typeof DropdownMenu.Content> = {
  component: DropdownMenu.Content,
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
    align: 'end',
    sideOffset: 8,
  },
}

export default meta

export const Default: StoryObj<typeof DropdownMenu.Content> = {
  render: (args) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Content {...args}>
        <DropdownMenu.Header>
          <div>Header</div>
        </DropdownMenu.Header>
        <DropdownMenu.Label>Label</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Label>Label</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Footer>
          <div>Footer</div>
        </DropdownMenu.Footer>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import * as Drawer from '@/components/Drawer/Drawer'

const meta: Meta<typeof Drawer.Root> = {
  component: Drawer.Root,
  argTypes: {},
  args: {
    shouldScaleBackground: false,
    dismissible: true,
  },
}

export default meta

export const Default: StoryObj<typeof Drawer.Root> = {
  render: (args) => (
    <Drawer.Root {...args}>
      <Drawer.Trigger asChild>
        <button>Open</button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Are you absolutely sure?</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body size='m'>
          <Drawer.Description>This action cannot be undone.</Drawer.Description>
        </Drawer.Body>
        <Drawer.Footer>
          <button>Submit</button>
          <Drawer.Close asChild>
            <button>Cancel</button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  ),
}

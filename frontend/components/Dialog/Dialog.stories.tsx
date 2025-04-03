import type { Meta, StoryObj } from '@storybook/react'
import * as Dialog from '@/components/Dialog/Dialog'

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  argTypes: {},
  args: {
    isDisableOverlay: false,
  },
}

export default meta

export const Default: StoryObj<typeof Dialog.Root> = {
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger asChild>
        <button>Open</button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body size='m'>
          <Dialog.Description>Description</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <button>OK</button>
          <Dialog.Close asChild>
            <button>Cancel</button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  ),
}

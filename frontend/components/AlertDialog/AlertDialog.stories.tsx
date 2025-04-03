import type { Meta, StoryObj } from '@storybook/react'
import * as AlertDialog from '@/components/AlertDialog/AlertDialog'

const meta: Meta<typeof AlertDialog.Root> = {
  component: AlertDialog.Root,
  argTypes: {},
  args: {},
}

export default meta

export const Default: StoryObj<typeof AlertDialog.Root> = {
  render: (args) => (
    <AlertDialog.Root {...args}>
      <AlertDialog.Trigger asChild>
        <button>Open</button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Title</AlertDialog.Title>
        </AlertDialog.Header>
        <AlertDialog.Body size='m'>
          <AlertDialog.Description>Description</AlertDialog.Description>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.Action asChild>
            <button>OK</button>
          </AlertDialog.Action>
          <AlertDialog.Cancel asChild>
            <button>Cancel</button>
          </AlertDialog.Cancel>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import * as Message from '@/components/Message/Message'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Message.Root> = {
  component: Message.Root,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'brand', 'positive', 'error'],
    },
  },
  args: {
    layout: 'hug',
    color: 'primary',
  },
}

export default meta

export const Default: StoryObj<typeof Message.Root> = {
  render: (args) => (
    <Message.Root {...args}>
      <Message.Icon>
        <IcEmptyImageFill />
      </Message.Icon>
      This is Image icon.
    </Message.Root>
  ),
}

export const PositiveCase: StoryObj<typeof Message.Root> = {
  render: (args) => <Message.Positive {...args}>All Checked!</Message.Positive>,
}

export const ErrorCase: StoryObj<typeof Message.Root> = {
  render: (args) => (
    <Message.ErrorCase {...args}>
      Password must be at least 5 characters long.
    </Message.ErrorCase>
  ),
}

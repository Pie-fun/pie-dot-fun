import type { Meta, StoryObj } from '@storybook/react'
import * as KeyValue from '@/components/KeyValue/KeyValue'

const meta: Meta<typeof KeyValue.Root> = {
  component: KeyValue.Root,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    gap: {
      control: 'radio',
      options: ['l', 'm'],
    },
  },
  args: {
    layout: 'fillWidth',
    orientation: 'vertical',
    gap: 'l',
  },
}

export default meta

export const Default: StoryObj<typeof KeyValue.Root> = {
  render: (args) => (
    <KeyValue.Root {...args}>
      <KeyValue.Key>
        <span>Key</span>
        <span>description</span>
      </KeyValue.Key>
      <KeyValue.Value gap='m'>
        <div>A</div>
        <div>B</div>
      </KeyValue.Value>
    </KeyValue.Root>
  ),
}

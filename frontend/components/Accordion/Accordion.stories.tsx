import type { Meta, StoryObj } from '@storybook/react'
import * as Accordion from '@/components/Accordion/Accordion'

const meta: Meta<typeof Accordion.Root> = {
  component: Accordion.Root,
  argTypes: {
    type: {
      control: 'radio',
      options: ['multiple', 'single'],
    },
  },
  args: {
    type: 'single',
    disabled: false,
    collapsible: false,
  },
}

export default meta

export const Default: StoryObj<typeof Accordion.Root> = {
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value='1'>
        <Accordion.Trigger>Trigger1</Accordion.Trigger>
        <Accordion.Content>Content1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value='2'>
        <Accordion.Trigger>Trigger2</Accordion.Trigger>
        <Accordion.Content>Content2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
}

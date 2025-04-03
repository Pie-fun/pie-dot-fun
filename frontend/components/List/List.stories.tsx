import type { Meta, StoryObj } from '@storybook/react'
import * as List from '@/components/List/List'
import { ComponentType } from 'react'

const meta: Meta<typeof List.Root> = {
  component: List.Root,
  subcomponents: { Item: List.Item as ComponentType<unknown> },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    listStyleType: {
      control: 'radio',
      options: ['revert', 'disc', 'decimal'],
    },
  },
  args: {
    layout: 'hug',
    listStyleType: 'revert',
  },
}

export default meta

export const Default: StoryObj<typeof List.Root> = {
  render: (args) => (
    <List.Root {...args}>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
      <List.Root {...args}>
        <List.Item>Item 3-1</List.Item>
        <List.Root {...args}>
          <List.Item>Item 3-1-1</List.Item>
        </List.Root>
      </List.Root>
    </List.Root>
  ),
}

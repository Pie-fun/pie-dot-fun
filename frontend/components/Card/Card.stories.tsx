import type { Meta, StoryObj } from '@storybook/react'
import * as Card from '@/components/Card/Card'

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    background: {
      control: 'radio',
      options: ['primary', 'default'],
    },
    border: {
      control: 'radio',
      options: ['primary', 'default', 'infoPrimary'],
    },
    shadow: {
      control: 'radio',
      options: ['primary'],
    },
  },
  args: {
    layout: 'fillWidth',
    background: 'primary',
    border: 'primary',
    shadow: 'primary',
  },
}

export default meta

export const Default: StoryObj<typeof Card.Root> = {
  render: (args) => (
    <Card.Root {...args}>
      <Card.Header>
        <Card.Title>Title</Card.Title>
      </Card.Header>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  ),
}

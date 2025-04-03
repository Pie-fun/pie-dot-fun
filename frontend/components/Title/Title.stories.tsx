import type { Meta, StoryObj } from '@storybook/react'
import * as Title from '@/components/Title/Title'

const meta: Meta<typeof Title.Root> = {
  component: Title.Root,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center'],
    },
  },
  args: {
    layout: 'hug',
    align: 'left',
  },
}

export default meta

export const Default: StoryObj<typeof Title.Root> = {
  render: (args) => (
    <Title.Root {...args}>
      <Title.Heading>Heading</Title.Heading>
      <Title.Description>Description</Title.Description>
    </Title.Root>
  ),
}

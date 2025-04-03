import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '@/components/Label/Label'

const meta: Meta<typeof Label> = {
  component: Label,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
  },
  args: {
    layout: 'hug',
    disabled: false,
    children: 'Renders an accessible label associated with controls',
  },
}

export default meta

export const Default: StoryObj<typeof Label> = {
  render: (args) => <Label {...args} />,
}

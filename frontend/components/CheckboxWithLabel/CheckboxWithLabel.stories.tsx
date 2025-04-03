import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxWithLabel } from '@/components/CheckboxWithLabel/CheckboxWithLabel'
import { Typography } from '@/components/Typography/Typography'

const meta: Meta<typeof CheckboxWithLabel> = {
  component: CheckboxWithLabel,
  argTypes: {},
  args: {
    disabled: false,
  },
}

export default meta

export const Default: StoryObj<typeof CheckboxWithLabel> = {
  render: (args) => (
    <CheckboxWithLabel {...args}>Checkbox With Label</CheckboxWithLabel>
  ),
}

export const MultipleLines: StoryObj<typeof CheckboxWithLabel> = {
  render: (args) => (
    <CheckboxWithLabel {...args}>
      Checkbox with Label
      <br />
      Multiple lines
    </CheckboxWithLabel>
  ),
}

export const AnotherColor: StoryObj<typeof CheckboxWithLabel> = {
  render: (args) => (
    <Typography color='brandPrimary'>
      <CheckboxWithLabel {...args}>Another Color Text</CheckboxWithLabel>
    </Typography>
  ),
}

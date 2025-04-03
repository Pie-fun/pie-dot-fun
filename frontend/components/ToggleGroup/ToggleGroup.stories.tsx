import type { Meta, StoryObj } from '@storybook/react'
import * as ToggleGroup from '@/components/ToggleGroup/ToggleGroup'

const meta: Meta<typeof ToggleGroup.Root> = {
  component: ToggleGroup.Root,
  argTypes: {
    type: { control: 'radio', options: ['single', 'multiple'] },
    size: {
      control: 'radio',
      options: ['m', 's'],
    },
    toggleGroupType: {
      control: 'radio',
      options: ['solid', 'text'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'info', 'alert'],
    },
  },
  args: {
    type: 'single',
    size: 'm',
    toggleGroupType: 'solid',
    color: 'primary',
  },
}

export default meta

export const Default: StoryObj<typeof ToggleGroup.Root> = {
  render: (args) => (
    <ToggleGroup.Root {...args}>
      <ToggleGroup.Item value='a'>SOL</ToggleGroup.Item>
      <ToggleGroup.Item value='b'>ETH</ToggleGroup.Item>
      <ToggleGroup.Item value='c'>USD</ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
}

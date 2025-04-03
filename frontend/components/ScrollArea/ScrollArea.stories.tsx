import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '@/components/ScrollArea/ScrollArea'

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    isHide: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
  args: {
    orientation: 'vertical',
    isHide: false,
    width: 100,
    height: 250,
  },
}

export default meta

export const Default: StoryObj<typeof ScrollArea> = {
  render: (args) => (
    <ScrollArea {...args}>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
      <div style={{ width: '200px', height: '100px', background: 'lightgrey' }}>
        Item
      </div>
    </ScrollArea>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/Slider/Slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {},
  args: {
    max: 100,
    step: 1,
    minStepsBetweenThumbs: 1,
    disabled: false,
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        height: '500px',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Slider> = {
  render: (args) => <Slider {...args} defaultValue={[25]} />,
}

export const WithTwoThumb: StoryObj<typeof Slider> = {
  render: (args) => <Slider {...args} defaultValue={[25, 75]} />,
}

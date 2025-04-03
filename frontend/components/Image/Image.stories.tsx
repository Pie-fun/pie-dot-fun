import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@/components/Image/Image'

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['fill', 'hug'],
    },
    ratio: {
      control: 'radio',
      options: ['auto', '1:1', '4:3', '3:4'],
    },
    shape: {
      control: 'radio',
      options: ['squareS'],
    },
  },
  args: {
    layout: 'fill',
    ratio: '1:1',
    delay: 0,
    src: 'https://picsum.photos/seed/picsum/200/300',
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'gray',
        width: '200px',
        height: '200px',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Image> = {
  render: (args) => <Image {...args} width={100} height={150} alt='' />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { AnimateSpringImages } from '@/app/components/AnimateSpringImages/AnimateSpringImages'

const meta: Meta<typeof AnimateSpringImages> = {
  component: AnimateSpringImages,
  argTypes: {
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    duration: 1000,
    width: 150,
    height: 150,
  },
}

export default meta

const images = [
  'https://picsum.photos/seed/image1/500/500',
  'https://picsum.photos/seed/image2/500/500',
  'https://picsum.photos/seed/image3/500/500',
]

export const Default: StoryObj<typeof AnimateSpringImages> = {
  render: (args) => (
    <AnimateSpringImages
      {...args}
      images={images}
      style={{ borderRadius: 30 }}
    />
  ),
}

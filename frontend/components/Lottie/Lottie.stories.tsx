import type { Meta, StoryObj } from '@storybook/react'
import Lottie from '@/components/Lottie/Lottie'
import { animationSendingTx } from '@/assets/lotties'

const meta: Meta<typeof Lottie> = {
  component: Lottie,
  args: {
    json: animationSendingTx,
  },
}

export default meta

export const Default: StoryObj<typeof Lottie> = {
  render: (args) => <Lottie {...args} />,
}

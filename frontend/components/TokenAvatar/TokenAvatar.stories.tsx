import type { Meta, StoryObj } from '@storybook/react'
import { TokenAvatar } from '@/components/TokenAvatar/TokenAvatar'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

const meta: Meta<typeof TokenAvatar> = {
  component: TokenAvatar,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    size: {
      control: 'radio',
      options: ['xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs', 'xxxs'],
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
    },
    chain: {
      control: 'radio',
      options: Object.keys(ChainType),
    },
  },
  args: {
    layout: 'hug',
    size: 'm',
    isLined: false,
    shape: 'circle',
    src: 'https://picsum.photos/seed/picsum-avatar/112/112',
    alt: 'Avatar',
  },
}

export default meta

export const Default: StoryObj<typeof TokenAvatar> = {
  render: (args) => <TokenAvatar {...args} />,
}

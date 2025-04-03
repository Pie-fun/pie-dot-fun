import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from '@/components/Currency/Currency'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

const meta: Meta<typeof Currency> = {
  component: Currency,
  argTypes: {
    mainImageSrc: {
      control: 'text',
    },
    chain: {
      control: 'radio',
      options: Object.keys(ChainType),
    },
    alt: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['l', 'm', 's', 'xs'],
    },
    fontWeight: {
      control: 'radio',
      options: ['bold', 'medium', 'regular'],
    },
  },
  args: {
    mainImageSrc: 'https://picsum.photos/seed/mainImageSrc/200/300',
    chain: ChainType.SOLANA,
    alt: 'Currency',
    size: 'l',
    fontWeight: 'regular',
  },
}

export default meta

export const Default: StoryObj<typeof Currency> = {
  render: (args) => <Currency {...args} />,
}

export const ChildrenCase: StoryObj<typeof Currency> = {
  render: ({ size, fontWeight }) => (
    <Currency size={size} fontWeight={fontWeight}>
      $
    </Currency>
  ),
}

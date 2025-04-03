import type { Meta, StoryObj } from '@storybook/react'
import { CurrencyWithQuantity } from '@/components/CurrencyWithQuantity/CurrencyWithQuantity'
import { ChainType } from '@/app/api/protobuf/typescript_only_types/pie-dot-fun/v1/common'

const meta: Meta<typeof CurrencyWithQuantity> = {
  component: CurrencyWithQuantity,
  argTypes: {
    size: {
      control: 'radio',
      options: ['l', 'm', 's', 'xs'],
    },
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
    fontWeight: {
      control: 'radio',
      options: ['bold', 'medium', 'regular'],
    },
    value: {
      control: 'number',
    },
    threshold: {
      control: 'number',
    },
    decimal: {
      control: 'number',
    },
  },
  args: {
    size: 'l',
    mainImageSrc: 'https://picsum.photos/seed/mainImageSrc/200/300',
    alt: 'Currency',
    fontWeight: 'regular',
    value: 0.0003456,
    threshold: 3,
    decimal: 4,
  },
}

export default meta

export const Default: StoryObj<typeof CurrencyWithQuantity> = {
  render: (args) => <CurrencyWithQuantity {...args} />,
}

export const ChildrenCase: StoryObj<typeof CurrencyWithQuantity> = {
  render: ({ size, fontWeight, value }) => (
    <CurrencyWithQuantity size={size} fontWeight={fontWeight} value={value}>
      $
    </CurrencyWithQuantity>
  ),
}

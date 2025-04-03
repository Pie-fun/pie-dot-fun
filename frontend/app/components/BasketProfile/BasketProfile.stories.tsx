import type { Meta, StoryObj } from '@storybook/react'
import * as BasketProfile from '@/app/components/BasketProfile/BasketProfile'

const meta: Meta<typeof BasketProfile.Root> = {
  component: BasketProfile.Root,
  argTypes: {
    size: {
      control: 'radio',
      options: ['m', 's'],
    },
  },
  args: {
    size: 'm',
  },
}

export default meta

export const Default: StoryObj<typeof BasketProfile.Root> = {
  render: (args) => (
    <BasketProfile.Root {...args}>
      <BasketProfile.TokenAvatar src='https://picsum.photos/seed/BasketProfile/112/112' />
      <BasketProfile.Content>
        <BasketProfile.Ticker>Moonshot</BasketProfile.Ticker>
        <BasketProfile.Name>MOONSHOT Trending 50</BasketProfile.Name>
        <BasketProfile.OneLiner>
          Top 50 Trending Picks by MZ
        </BasketProfile.OneLiner>
      </BasketProfile.Content>
    </BasketProfile.Root>
  ),
}

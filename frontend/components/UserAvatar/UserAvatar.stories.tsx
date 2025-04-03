import type { Meta, StoryObj } from '@storybook/react'
import { UserAvatar } from '@/components/UserAvatar/UserAvatar'

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    size: {
      control: 'radio',
      options: ['xl', 'l', 'm', 's', 'xs'],
    },
  },
  args: {
    layout: 'hug',
    size: 'm',
    isLined: false,
    src: 'https://picsum.photos/seed/picsum-avatar/112/112',
    alt: 'Avatar',
  },
}

export default meta

export const Default: StoryObj<typeof UserAvatar> = {
  render: (args) => <UserAvatar {...args} />,
}

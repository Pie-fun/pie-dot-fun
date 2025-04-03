import type { Meta, StoryObj } from '@storybook/react'
import * as UserProfile from '@/app/components/UserProfile/UserProfile'

const meta: Meta<typeof UserProfile.Root> = {
  component: UserProfile.Root,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
  },
  args: {
    layout: 'fillWidth',
  },
}

export default meta

export const Default: StoryObj<typeof UserProfile.Root> = {
  render: (args) => (
    <UserProfile.Root {...args}>
      <UserProfile.UserAvatar src='https://picsum.photos/seed/picsum-avatar/112/112' />
      <UserProfile.Content>
        <UserProfile.Name>greenmonkey</UserProfile.Name>
        <UserProfile.Description>This is Green Mokney</UserProfile.Description>
      </UserProfile.Content>
    </UserProfile.Root>
  ),
}

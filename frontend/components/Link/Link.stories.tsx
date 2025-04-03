import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '@/components/Link/Link'
import { Button } from '@/components/Button/Button'

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['fillWidth', 'contents'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  args: {
    color: 'secondary',
    isUnderline: false,
    isExternal: false,
    href: 'https://google.com',
  },
}

export default meta

export const Default: StoryObj<typeof Link> = {
  render: (args) => <Link {...args}>Link</Link>,
}

export const AsButton: StoryObj<typeof Link> = {
  render: (args) => (
    <Button buttonType='outline' asChild>
      <Link {...args} isExternal>
        Go to Google
      </Link>
    </Button>
  ),
}

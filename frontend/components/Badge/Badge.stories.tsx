import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/Badge/Badge'
import { Icon } from '@/components/Icon/Icon'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    size: {
      control: 'radio',
      options: ['s', 'm'],
    },
    shape: {
      control: 'radio',
      options: ['square', 'round', 'dot'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'brand', 'alert'],
    },
    badgeType: {
      control: 'radio',
      options: ['solid', 'outline'],
    },
    align: {
      control: 'radio',
      options: ['center', 'spaceBetween'],
    },
  },
  args: {
    layout: 'hug',
    size: 'm',
    shape: 'square',
    color: 'primary',
    badgeType: 'solid',
    align: 'center',
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        background: 'gray',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Badge> = {
  render: (args) => (
    <Badge {...args}>
      <Icon size='s'>
        <IcEmptyImageFill />
      </Icon>
      <span>Badge</span>
    </Badge>
  ),
}

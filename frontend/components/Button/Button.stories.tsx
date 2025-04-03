import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/Button/Button'
import { Ellipsis } from '@/components/Ellipsis/Ellipsis'
import { IcEmptyImageFill } from '@/components/Icon/Icons'
import { Icon } from '@/components/Icon/Icon'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    loadingIconPosition: {
      control: 'radio',
      options: ['left', 'entire'],
    },
    layout: {
      control: 'radio',
      options: ['hug', 'fill', 'fillWidth', 'fillHeight'],
    },
    size: {
      control: 'radio',
      options: ['m', 's', 'squareM', 'squareS'],
    },
    color: {
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'infoPrimary',
        'alertPrimary',
        'accentGradient',
      ],
    },
    buttonType: {
      control: 'radio',
      options: ['solid', 'outline', 'text', 'content'],
    },
    shape: {
      control: 'radio',
      options: ['square', 'round'],
    },
  },
  args: {
    isLoading: false,
    disabled: false,
    loadingIconPosition: 'left',
    layout: 'hug',
    size: 'm',
    color: 'primary',
    buttonType: 'solid',
    isUnderline: false,
    shape: 'square',
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: '200px',
          border: '1px solid darkgray',
          background: 'gray',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: StoryObj<typeof Button> = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <Icon>
        <IcEmptyImageFill />
      </Icon>
      {children}
    </Button>
  ),
}

export const ButtonWithEllipsis: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args} isLoading>
      <Ellipsis>Button with Ellipsis Text</Ellipsis>
    </Button>
  ),
}

export const ButtonWithIcon: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args}>
      <Icon size='l'>
        <IcEmptyImageFill />
      </Icon>
    </Button>
  ),
}

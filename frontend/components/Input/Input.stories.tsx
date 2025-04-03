import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/Input/Input'
import { Icon } from '@/components/Icon/Icon'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    size: {
      control: 'radio',
      options: ['m', 's'],
    },
  },
  args: {
    layout: 'hug',
    disabled: false,
    isError: false,
    align: 'left',
    placeholder: 'placeholder',
    prefixContent: (
      <Icon size='m'>
        <IcEmptyImageFill />
      </Icon>
    ),
    suffixContent: (
      <Icon size='m'>
        <IcEmptyImageFill />
      </Icon>
    ),
    bottomContent: <span>bottomContent</span>,
    size: 's',
  },
}

export default meta

export const Default: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
}

export const WithMaxLength: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} value='Ted' maxLength={10} />,
}

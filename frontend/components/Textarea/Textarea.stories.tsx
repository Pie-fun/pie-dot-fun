import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/Textarea/Textarea'
import { Icon } from '@/components/Icon/Icon'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
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
    isAutoHeight: false,
    isPreventNewline: false,
    rows: 5,
  },
}

export default meta

export const Default: StoryObj<typeof Textarea> = {
  render: (args) => <Textarea {...args} />,
}

export const WithMaxLength: StoryObj<typeof Textarea> = {
  render: (args) => <Textarea {...args} value='Ted' maxLength={10} />,
}

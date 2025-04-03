import type { Meta, StoryObj } from '@storybook/react'
import * as Select from '@/components/Select/Select'
import { ComponentProps, useState } from 'react'
import { Icon } from '@/components/Icon/Icon'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Select.Trigger> = {
  component: Select.Trigger,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'error'],
    },
    shape: {
      control: 'radio',
      options: ['square', 'round'],
    },
  },
  args: {
    layout: 'hug',
    color: 'default',
    shape: 'square',
    disabled: false,
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '200px',
        background: 'gray',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

type SelectValue = 'sol' | 'eth' | ''

const Example = (args: ComponentProps<typeof Select.Trigger>) => {
  const [value, setValue] = useState<SelectValue>('')

  return (
    <Select.Root
      value={value}
      onValueChange={(value: SelectValue) => setValue(value)}
    >
      <Select.Trigger {...args}>
        <Select.Value placeholder='Crypto Currency' />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>SVM</Select.Label>
          <Select.Item value='SOL'>Solana</Select.Item>
          <Select.Item value='sUSDT'>
            <Icon>
              <IcEmptyImageFill />
            </Icon>
            sUSDT
          </Select.Item>
          <Select.Item value='ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label>EVM</Select.Label>
          <Select.Item value='ETH'>Ethereum</Select.Item>
          <Select.Item value='eUSDT'>
            <Icon>
              <IcEmptyImageFill />
            </Icon>
            eUSDT
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export const Default: StoryObj<typeof Select.Trigger> = {
  render: (args) => <Example {...args} />,
}

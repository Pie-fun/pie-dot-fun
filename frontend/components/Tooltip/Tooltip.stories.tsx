import type { Meta, StoryObj } from '@storybook/react'
import * as Tooltip from '@/components/Tooltip/Tooltip'
import { Icon } from '@/components/Icon/Icon'
import { IcEmptyImageFill } from '@/components/Icon/Icons'

const meta: Meta<typeof Tooltip.Content> = {
  component: Tooltip.Content,
  argTypes: {
    sideOffset: {
      control: 'number',
    },
    alignOffset: {
      control: 'number',
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    side: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
    color: {
      control: 'radio',
      options: ['default'],
    },
  },
  args: {
    sideOffset: 8,
    alignOffset: -8,
    align: 'end',
    side: 'bottom',
    color: 'default',
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px',
        height: '150px',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Tooltip.Content> = {
  render: (args) => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Icon size='l'>
            <IcEmptyImageFill />
          </Icon>
        </Tooltip.Trigger>
        <Tooltip.Content {...args}>
          Yay This is Tooltip Component 🥳
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
}

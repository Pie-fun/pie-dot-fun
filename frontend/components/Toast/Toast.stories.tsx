import { Toaster } from '@/components/Toast/Toast'
import { useToast } from '@/components/Toast/useToast'
import type { Meta, StoryObj } from '@storybook/react'
import * as Toast from '@/components/Toast/Toast'
import { ComponentProps } from 'react'

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  argTypes: {
    stackPosition: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
  },
  args: {
    stackPosition: 'bottom',
  },
  decorators: (Story) => (
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        background: 'lightgray',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

const Example = (args: ComponentProps<typeof Toaster>) => {
  const { toast } = useToast()

  return (
    <>
      <Toaster {...args} />
      <button
        onClick={() =>
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          })
        }
      >
        Toast
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <Toast.Action altText='Try Again'>Try Again</Toast.Action>,
          })
        }
      >
        Toast with Action
      </button>
    </>
  )
}

export const Default: StoryObj<typeof Toaster> = {
  render: (args) => <Example {...args} />,
}

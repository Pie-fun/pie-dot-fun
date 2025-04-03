import type { Meta, StoryObj } from '@storybook/react'
import Observer from '@/components/Observer/Observer'
import { useState } from 'react'

const meta: Meta<typeof Observer> = {
  component: Observer,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fillWidth'],
    },
  },
  args: {
    layout: 'hug',
    condition: true,
    options: {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    },
  },
}

export default meta

const Example = (args: Omit<typeof Observer, 'callback'>) => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'scroll',
        height: '300px',
        border: '1px solid darkgray',
      }}
    >
      <span>Scroll Down</span>
      <div
        style={{
          position: 'sticky',
          top: '0',
          width: '50px',
          height: '50px',
          background: isShowing ? 'blue' : 'red',
        }}
      />
      <div style={{ height: '1000px' }} />
      <Observer {...args} callback={() => setIsShowing(true)}>
        If you see this message, the box will be blue.
      </Observer>
    </div>
  )
}

export const Default: StoryObj<typeof Observer> = {
  render: (args) => <Example {...args} />,
}

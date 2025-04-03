import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '@/components/Layout/Layout'

const meta: Meta<typeof Layout> = {
  component: Layout,
  argTypes: {
    layout: {
      control: 'radio',
      options: ['hug', 'fill', 'fillWidth', 'fillHeight', 'full'],
    },
    gap: {
      control: 'radio',
      options: ['l', 'm', 's'],
    },
    horizontalPadding: {
      control: 'radio',
      options: ['m'],
    },
    position: {
      control: 'radio',
      options: ['center'],
    },
  },
  args: {
    layout: 'fillWidth',
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '360px',
        height: '360px',
        background: 'lightgray',
      }}
    >
      <Story />
    </div>
  ),
}

export default meta

export const Default: StoryObj<typeof Layout> = {
  render: (args) => (
    <Layout {...args}>
      <div>A Section</div>
      <div>B Section</div>
    </Layout>
  ),
}

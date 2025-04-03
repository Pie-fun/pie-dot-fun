import { Collapsible } from '@/components/Collapsible/Collapsible'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    lineClamp: 1,
    color: 'primary',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: StoryObj<typeof Collapsible> = {
  render: (args) => (
    <Collapsible {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae arcu
      bibendum, vulputate nunc vitae, congue velit. Curabitur vel sapien sit
      amet lectus finibus semper sit amet sed diam. Nulla facilisi. Duis nisi
      enim, tempor et lacus et, aliquet porttitor quam. Phasellus venenatis odio
      fringilla faucibus sagittis. Mauris nibh dui, placerat a ultrices ac,
      scelerisque eget ex. Integer molestie et mi at venenatis. Etiam
      condimentum varius bibendum. Quisque in nibh dignissim, vestibulum turpis
      eu, euismod urna. Mauris ut quam nunc. Ut commodo ligula vitae eros
      elementum cursus. Etiam rhoncus, lorem et sollicitudin tincidunt, leo
      purus efficitur quam, eget pellentesque mauris leo at enim. Suspendisse a
      convallis elit, non iaculis dui. Sed facilisis vel leo eget tincidunt.
      Aenean accumsan turpis erat, nec scelerisque ipsum tempus vel.
    </Collapsible>
  ),
}

export const ShortText: StoryObj<typeof Collapsible> = {
  render: (args) => <Collapsible {...args}>Lorem ipsum</Collapsible>,
}

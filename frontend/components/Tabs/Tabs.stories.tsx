import type { Meta, StoryObj } from '@storybook/react'
import * as Tabs from '@/components/Tabs/Tabs'
import { ComponentProps, useState } from 'react'

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  argTypes: {},
  args: {},
}

export default meta

type ExampleTab = 'tabA' | 'tabB' | 'tabC'

const Example = (args: ComponentProps<typeof Tabs.Root>) => {
  const [tab, setTab] = useState<ExampleTab>('tabA')

  return (
    <Tabs.Root {...args} value={tab}>
      <Tabs.List>
        <Tabs.Trigger value='tabA' onClick={() => setTab('tabA')}>
          Tab A
        </Tabs.Trigger>
        <Tabs.Trigger value='tabB' onClick={() => setTab('tabB')}>
          Tab B
        </Tabs.Trigger>
        <Tabs.Trigger value='tabC' onClick={() => setTab('tabC')} disabled>
          Tab C
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='tabA'>Tab A Content</Tabs.Content>
      <Tabs.Content value='tabB'>Tab B Content</Tabs.Content>
      <Tabs.Content value='tabC'>Tab C Content</Tabs.Content>
    </Tabs.Root>
  )
}

export const Default: StoryObj<typeof Tabs.Root> = {
  render: (args) => <Example {...args} />,
}

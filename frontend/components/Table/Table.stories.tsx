import type { Meta, StoryObj } from '@storybook/react'
import * as Table from '@/components/Table/Table'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  argTypes: {
    captionSide: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
  },
  args: {
    isDisableResponsive: false,
    captionSide: 'bottom',
  },
}

export default meta

export const Default: StoryObj<typeof Table.Root> = {
  render: (args) => (
    <Table.Root {...args}>
      <Table.Caption>Caption</Table.Caption>
      <Table.Header>
        <Table.Row rowType='header'>
          <Table.HeaderCell headerCellType='pc'>Head 1</Table.HeaderCell>
          <Table.HeaderCell headerCellType='pc'>Head 2</Table.HeaderCell>
          <Table.HeaderCell headerCellType='pc'>Head 3</Table.HeaderCell>
          <Table.HeaderCell headerCellType='pc'>Head 4</Table.HeaderCell>
          <Table.HeaderCell headerCellType='pc'>Head 5</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row rowType='body'>
          <Table.Cell>
            <Table.HeaderCell headerCellType='mobile'>Head 1</Table.HeaderCell>
            Cell 1
          </Table.Cell>
          <Table.Cell>
            <Table.HeaderCell headerCellType='mobile'>Head 2</Table.HeaderCell>
            Cell 2
          </Table.Cell>
          <Table.Cell>
            <Table.HeaderCell headerCellType='mobile'>Head 3</Table.HeaderCell>
            Cell 3
          </Table.Cell>
          <Table.Cell>
            <Table.HeaderCell headerCellType='mobile'>Head 4</Table.HeaderCell>
            Cell 4
          </Table.Cell>
          <Table.Cell>
            <Table.HeaderCell headerCellType='mobile'>Head 5</Table.HeaderCell>
            Cell 5
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

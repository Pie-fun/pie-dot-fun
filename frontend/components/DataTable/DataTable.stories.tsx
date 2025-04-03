import type { Meta, StoryObj } from '@storybook/react'
import * as DataTable from '@/components/DataTable/DataTable'
import { ComponentProps } from 'react'

const meta: Meta<typeof DataTable.Table> = {
  component: DataTable.Table,
  argTypes: {
    isDisableResponsive: {
      control: 'boolean',
    },
    captionSide: {
      control: 'radio',
      options: ['top', 'bottom'],
    },
    isShowHeader: {
      control: 'boolean',
    },
  },
  args: {
    isDisableResponsive: false,
    captionSide: 'bottom',
    isShowHeader: true,
  },
}

export default meta

type TestDataList = {
  id: string
  createdAt: string
  closedAt: string
  status: 'activated' | 'closed'
}

const Example = (
  args: Omit<
    ComponentProps<typeof DataTable.Table>,
    'columns' | 'data' | 'table'
  >,
) => {
  const columns: DataTable.ColumnDef<TestDataList>[] = [
    {
      header: 'Id',
      cell: ({ row }) => <span>{row.original.id}</span>,
      size: 50,
    },
    {
      header: 'Created At',
      cell: ({ row }) => (
        <span>{new Date(row.original.createdAt).toISOString()}</span>
      ),
      size: 200,
    },
    {
      header: 'Closed At',
      cell: ({ row }) => (
        <span>{new Date(row.original.closedAt).toISOString()}</span>
      ),
      size: 200,
    },
    {
      header: 'Status',
      cell: ({ row }) => <span>{row.original.status}</span>,
      size: 100,
    },
  ]

  const data = [
    {
      id: '1',
      createdAt: '2021-09-01T00:00:00Z',
      closedAt: '2021-09-01T00:00:00Z',
      status: 'activated',
    },
    {
      id: '2',
      createdAt: '2021-09-01T00:00:00Z',
      closedAt: '2021-09-01T00:00:00Z',
      status: 'closed',
    },
  ] satisfies TestDataList[]

  return (
    <DataTable.Table
      {...args}
      data={data}
      columns={columns}
      emptyContent={
        <DataTable.EmptyContent>There is No Data</DataTable.EmptyContent>
      }
    />
  )
}

const EmptyExample = (
  args: Omit<
    ComponentProps<typeof DataTable.Table>,
    'columns' | 'data' | 'table'
  >,
) => {
  const columns: DataTable.ColumnDef<TestDataList>[] = [
    {
      header: 'Id',
      cell: ({ row }) => <span>{row.original.id}</span>,
      size: 50,
    },
    {
      header: 'Created At',
      cell: ({ row }) => (
        <span>{new Date(row.original.createdAt).toISOString()}</span>
      ),
      size: 200,
    },
    {
      header: 'Closed At',
      cell: ({ row }) => (
        <span>{new Date(row.original.closedAt).toISOString()}</span>
      ),
      size: 200,
    },
    {
      header: 'Status',
      cell: ({ row }) => <span>{row.original.status}</span>,
      size: 100,
    },
  ]

  const data = [] satisfies TestDataList[]

  return (
    <DataTable.Table
      {...args}
      data={data}
      columns={columns}
      emptyContent={
        <DataTable.EmptyContent>There is No Data</DataTable.EmptyContent>
      }
    />
  )
}

export const Default: StoryObj<typeof DataTable.Table> = {
  render: (args) => <Example {...args} />,
}

export const EmptyCase: StoryObj<typeof DataTable.Table> = {
  render: (args) => <EmptyExample {...args} />,
}

import * as TablePrimitive from '@/components/Table/Table'
import {
  ColumnDef,
  CoreRow,
  flexRender,
  getCoreRowModel,
  InitialTableState,
  Table as TableInterface,
  useReactTable,
} from '@tanstack/react-table'
import { ComponentProps, Fragment, HTMLAttributes, ReactElement } from 'react'
import * as styles from '@/components/DataTable/DataTable.css'

export type { ColumnDef }

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data?: TData[]
  table?: TableInterface<TData>
  emptyContent?: ReactElement
  initialState?: InitialTableState
  isShowHeader?: boolean
  onRowClick?: (original: CoreRow<TData>['original']) => void
  isDisableResponsive?: ComponentProps<
    typeof TablePrimitive.Root
  >['isDisableResponsive']
  captionSide?: ComponentProps<typeof TablePrimitive.Root>['captionSide']
}

export function Table<TData, TValue>({
  columns,
  data = [],
  table,
  emptyContent,
  initialState,
  isShowHeader = true,
  onRowClick,
  isDisableResponsive = false,
  captionSide,
}: DataTableProps<TData, TValue> & styles.RootVariants) {
  const defaultTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    ...initialState,
  })
  const dataTable = table || defaultTable

  return (
    <div className={styles.root()}>
      <TablePrimitive.Root
        isDisableResponsive={isDisableResponsive}
        captionSide={captionSide}
      >
        {!!data?.length && (
          <colgroup>
            {dataTable.getAllColumns().map((column) => {
              const size = column.columnDef.size
              const width =
                size !== Number.MAX_SAFE_INTEGER && size ? size : 'auto'

              return (
                <Fragment key={column.id}>
                  <col
                    style={{
                      width,
                      minWidth: column.columnDef.minSize,
                      maxWidth: column.columnDef.maxSize,
                    }}
                  />
                </Fragment>
              )
            })}
          </colgroup>
        )}
        <TablePrimitive.Header>
          {dataTable.getHeaderGroups().map((headerGroup) => (
            <TablePrimitive.Row rowType='header' key={headerGroup.id}>
              {isShowHeader &&
                headerGroup.headers.map((header) => {
                  return (
                    <TablePrimitive.HeaderCell
                      key={header.id}
                      headerCellType='pc'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TablePrimitive.HeaderCell>
                  )
                })}
            </TablePrimitive.Row>
          ))}
        </TablePrimitive.Header>
        <TablePrimitive.Body>
          {dataTable.getRowModel().rows?.length ? (
            dataTable.getRowModel().rows.map((row) => (
              <TablePrimitive.Row
                key={row.id}
                rowType='body'
                data-state={row.getIsSelected() && 'selected'}
                onClick={() => onRowClick?.(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TablePrimitive.Cell key={cell.id}>
                    {isShowHeader &&
                      !isDisableResponsive &&
                      dataTable.getHeaderGroups().map((headerGroup) => (
                        <Fragment key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return cell.column.columnDef.header ===
                              header.column.columnDef.header ? (
                              <TablePrimitive.HeaderCell
                                key={header.id}
                                headerCellType='mobile'
                              >
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext(),
                                    )}
                              </TablePrimitive.HeaderCell>
                            ) : null
                          })}
                        </Fragment>
                      ))}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TablePrimitive.Cell>
                ))}
              </TablePrimitive.Row>
            ))
          ) : (
            <>
              {emptyContent && (
                <tr>
                  <td
                    colSpan={columns.length}
                    className={styles.emptyContentWrapper()}
                  >
                    {emptyContent}
                  </td>
                </tr>
              )}
            </>
          )}
        </TablePrimitive.Body>
      </TablePrimitive.Root>
    </div>
  )
}

export function EmptyContent({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.emptyContent()} {...props} />
}

import {
  forwardRef,
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  useContext,
  useMemo,
} from 'react'
import * as styles from '@/components/Table/Table.css'
import TableContext from '@/components/Table/Table.context'

export const Root = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement> & styles.RootVariants
>(({ isDisableResponsive, captionSide = 'bottom', ...props }, ref) => {
  const value = useMemo(() => ({ isDisableResponsive }), [isDisableResponsive])

  return (
    <TableContext.Provider value={value}>
      <div className={styles.rootWrapper()}>
        <table
          ref={ref}
          className={styles.root({ isDisableResponsive, captionSide })}
          {...props}
        />
      </div>
    </TableContext.Provider>
  )
})

Root.displayName = 'Root'

export const Header = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement> & styles.HeaderVariants
>(({ ...props }, ref) => {
  const { isDisableResponsive } = useContext(TableContext)

  return (
    <thead
      ref={ref}
      className={styles.header({ isDisableResponsive })}
      {...props}
    />
  )
})

Header.displayName = 'Header'

export const Body = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement> & styles.BodyVariants
>(({ ...props }, ref) => {
  const { isDisableResponsive } = useContext(TableContext)

  return (
    <tbody
      ref={ref}
      className={styles.body({ isDisableResponsive })}
      {...props}
    />
  )
})

Body.displayName = 'Body'

export const Footer = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => (
  <tfoot ref={ref} className={styles.footer()} {...props} />
))

Footer.displayName = 'Footer'

export const Row = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement> & styles.RowVariants
>(({ rowType, ...props }, ref) => {
  const { isDisableResponsive } = useContext(TableContext)

  return (
    <tr
      ref={ref}
      className={styles.row({
        isDisableResponsive,
        rowType,
      })}
      {...props}
    />
  )
})

Row.displayName = 'Row'

export const HeaderCell = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement> & styles.HeaderCellVariants
>(({ headerCellType, ...props }, ref) => {
  const { isDisableResponsive } = useContext(TableContext)
  const Element = headerCellType === 'mobile' ? 'div' : 'th'

  if (isDisableResponsive && headerCellType === 'mobile') {
    return null
  }

  return (
    <Element
      ref={ref}
      className={styles.headerCell({
        isDisableResponsive,
        headerCellType,
      })}
      {...props}
    />
  )
})

HeaderCell.displayName = 'HeaderCell'

export const Cell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement> & styles.CellVariants
>(({ ...props }, ref) => {
  const { isDisableResponsive } = useContext(TableContext)

  return (
    <td ref={ref} className={styles.cell({ isDisableResponsive })} {...props} />
  )
})

Cell.displayName = 'Cell'

export const Caption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ ...props }, ref) => (
  <caption ref={ref} className={styles.caption()} {...props} />
))

Caption.displayName = 'Caption'

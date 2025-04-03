import { SVGProps } from 'react'

export default function IcPieChartQuarterFill({
  ...props
}: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='72'
      height='72'
      fill='currentColor'
      viewBox='0 0 72 72'
      data-icon
      {...props}
    >
      <path d='M58.385 38.308c1.657 0 3.016 1.347 2.837 2.994a27.693 27.693 0 1 1-30.524-30.524c1.647-.18 2.994 1.18 2.994 2.837v21.693a3 3 0 0 0 3 3h21.693Z' />
      <path d='M38.308 9c0-1.657 1.347-3.017 2.994-2.838a27.693 27.693 0 0 1 24.536 24.536c.179 1.647-1.181 2.994-2.838 2.994H41.308a3 3 0 0 1-3-3V9Z' />
    </svg>
  )
}

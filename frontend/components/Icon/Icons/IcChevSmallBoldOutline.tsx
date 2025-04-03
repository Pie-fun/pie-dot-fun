import { SVGProps } from 'react'

export default function IcChevSmallBoldOutline({
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
      <path d='m20.5 42.5 3 3 13-13 13 13 3-3-16-16-16 16Z' />
    </svg>
  )
}

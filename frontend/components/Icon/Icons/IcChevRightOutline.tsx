import { SVGProps } from 'react'

export default function IcChevRightOutline({
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
      <path
        fillRule='evenodd'
        d='m28.06 16.94-2.12 2.12L42.878 36l-16.94 16.94 2.122 2.12L47.12 36 28.06 16.94Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

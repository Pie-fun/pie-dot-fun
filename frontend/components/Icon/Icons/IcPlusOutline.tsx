import { SVGProps } from 'react'

export default function IcPlusOutline({
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
      <path d='M9 34h54v3H9v-3Z' />
      <path d='M37.5 8.5v54h-3v-54h3Z' />
    </svg>
  )
}

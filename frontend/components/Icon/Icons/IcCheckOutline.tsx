import { SVGProps } from 'react'

export default function IcCheckOutline({
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
        d='m65.121 19.121-36.06 36.061L7 33.122 9.121 31l19.94 19.94L63 17l2.121 2.121Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

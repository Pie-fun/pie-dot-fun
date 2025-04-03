import { SVGProps } from 'react'

export default function IcPersonFill({
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
      <path d='M51 21c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15ZM6 66c0-13.255 10.745-24 24-24h12c13.255 0 24 10.745 24 24v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3Z' />
    </svg>
  )
}

import { SVGProps } from 'react'

export default function IcPolygonFixedColorFill({
  ...props
}: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='72'
      height='72'
      fill='none'
      viewBox='0 0 72 72'
      data-icon
      {...props}
    >
      <path fill='#6C00F6' d='M0 0h72v72H0z' />
      <path
        fill='#fff'
        d='m29.753 28.28-4.688-2.71L11 33.698V49.9L25.065 58l14.065-8.1V24.703l7.805-4.497 7.804 4.497v8.994l-7.804 4.498-4.689-2.71v7.207l4.689 2.71L61 37.301V21.1L46.935 13 32.87 21.1v25.196l-7.805 4.497-7.805-4.497v-9.022l7.805-4.498 4.688 2.71v-7.207Z'
      />
    </svg>
  )
}

import { SVGProps } from 'react'

export default function IcRightUpperArrowOutline({
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
      <path d='M12 15v45.5h45.5V49h-3v8.5H15V18h8.5v-3H12Z' />
      <path d='M52.461 18h-14.9v-3h19.956v19.956h-3V20.188L30.12 44.583 28 42.46 52.461 18Z' />
    </svg>
  )
}

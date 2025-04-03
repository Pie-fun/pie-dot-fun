import { SVGProps } from 'react'

export default function IcBaseFixedColorFill({
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
      <path fill='#fff' d='M0 0h72v72H0z' />
      <circle cx='36' cy='36' r='36' fill='#fff' />
      <path
        fill='#0052FF'
        d='M35.952 64C51.444 64 64 51.465 64 35.998 64 20.53 51.444 8 35.952 8 20.459 8 9.196 19.284 8 33.646h37.077v4.708H8C9.196 52.717 21.253 64 35.952 64Z'
      />
    </svg>
  )
}

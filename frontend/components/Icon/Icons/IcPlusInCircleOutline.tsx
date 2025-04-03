import { SVGProps } from 'react'

export default function IcPlusInCircleOutline({
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
      <path d='M23 35h26v3H23v-3Z' />
      <path d='M37.5 23.5v26h-3v-26h3Z' />
      <path
        fillRule='evenodd'
        d='M36 58c12.15 0 22-9.85 22-22s-9.85-22-22-22-22 9.85-22 22 9.85 22 22 22Zm0 3c13.807 0 25-11.193 25-25S49.807 11 36 11 11 22.193 11 36s11.193 25 25 25Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

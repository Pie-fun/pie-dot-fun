import { SVGProps } from 'react'

export default function IcUpperArrawInCutcircleOutline({
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
        d='M16.78 24.295A22.389 22.389 0 0 0 13.5 36c0 12.426 10.074 22.5 22.5 22.5S58.5 48.426 58.5 36c0-4.29-1.2-8.296-3.28-11.705l2.56-1.563A25.388 25.388 0 0 1 61.5 36c0 14.083-11.417 25.5-25.5 25.5S10.5 50.083 10.5 36c0-4.857 1.36-9.402 3.72-13.268l2.56 1.563Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='m22 24.757 2.106 2.137 9.947-10.703v32.415h3V16.191L47 26.894l2.106-2.137L35.553 10.5 22 24.757Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

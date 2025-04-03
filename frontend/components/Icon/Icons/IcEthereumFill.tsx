import { SVGProps } from 'react'

export default function IcEthereumFill({
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
      <path d='M22.557 36.422 36.934 12.99v17.008l-14.057 6.28 14.056-6.277V44.77l-14.376-8.347Z' />
      <path d='M36.934 29.998V12.991l14.375 23.431-14.376 8.347V30.002l14.355 6.41L36.934 30Zm14.384 9.101-14.384 8.345V59l14.384-19.901Z' />
      <path d='M36.934 47.441V59L22.557 39.099l14.377 8.343Z' />
    </svg>
  )
}

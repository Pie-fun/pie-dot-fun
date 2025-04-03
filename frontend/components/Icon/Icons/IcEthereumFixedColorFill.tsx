import { SVGProps } from 'react'

export default function IcEthereumFixedColorFill({
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
      <path fill='#627EEA' d='M0 0h72v72H0z' />
      <path
        fill='#C1CCF7'
        d='M36.934 12.99v17.008l14.375 6.424-14.375-23.431Z'
      />
      <path fill='#fff' d='M36.934 12.99 22.557 36.423 36.934 30V12.99Z' />
      <path fill='#C1CCF7' d='M36.934 47.444V59l14.384-19.901-14.384 8.345Z' />
      <path fill='#fff' d='M36.934 59V47.441L22.557 39.1 36.934 59Z' />
      <path fill='#8198EE' d='m36.934 44.769 14.375-8.347-14.375-6.42V44.77Z' />
      <path
        fill='#C1CCF7'
        d='m22.556 36.422 14.378 8.347V30.002l-14.377 6.42Z'
      />
    </svg>
  )
}

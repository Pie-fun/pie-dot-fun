import { SVGProps } from 'react'

export default function IcBaseEthereumFill({
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
      <path d='M29.9 12.99 15.51 36.43l14.39 8.315 14.304-8.315L29.9 12.99Z' />
      <path d='m15.51 39.143 14.39 8.315 5.86-3.427c-.273.344-1.37 2.087-1.622 3.972-.252 1.885.209 4.286.51 4.961L29.9 59.048 15.51 39.143Zm40.98 10.83c0 5.524-4.484 10.001-10.017 10.001-5.25 0-9.556-4.03-9.983-9.159h13.242v-1.681H36.49c.427-5.13 4.45-9.16 9.983-9.16s10.017 4.475 10.017 10Z' />
    </svg>
  )
}

import { SVGProps } from 'react'

export default function IcTriangleFill({
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
      <path d='m12 51 24-30 24 30H12Z' />
    </svg>
  )
}

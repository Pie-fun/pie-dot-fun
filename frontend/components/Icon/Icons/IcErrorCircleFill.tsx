import { SVGProps } from 'react'

export default function IcErrorCircleFill({
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
        d='M36 66c16.569 0 30-13.431 30-30C66 19.431 52.569 6 36 6 19.431 6 6 19.431 6 36c0 16.569 13.431 30 30 30Zm-2.01-28.455c.18 1.44.345 2.67.495 3.69h4.59c.15-1.02.3-2.25.45-3.69.18-1.44.33-2.895.45-4.365.12-1.5.18-2.85.18-4.05V19.5H33.36v9.63c0 1.2.06 2.55.18 4.05.12 1.47.27 2.925.45 4.365Zm-.99 7.02v6.885h7.335v-6.885H33Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

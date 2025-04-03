import { SVGProps } from 'react'

export default function IcClockFill({
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
        d='M36 66c16.569 0 30-13.431 30-30C66 19.431 52.569 6 36 6 19.431 6 6 19.431 6 36c0 16.569 13.431 30 30 30Zm1.5-52v21.411l10.6 11.568-2.2 2.042-11.4-12.432V14h3Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

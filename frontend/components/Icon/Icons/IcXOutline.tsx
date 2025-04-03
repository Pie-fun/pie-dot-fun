import { SVGProps } from 'react'

export default function IcXOutline({
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
        d='M54.307 56 16 17.693 17.693 16 56 54.307 54.307 56Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M17.693 56 56 17.693 54.307 16 16 54.307 17.693 56Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

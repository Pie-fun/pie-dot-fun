import { SVGProps } from 'react'

export default function IcChevOutline({
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
        d='m17.47 44.47 2.121 2.121 16.94-16.94 16.939 16.94 2.121-2.121-19.06-19.061-19.061 19.06Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

import { SVGProps } from 'react'

export default function IcOutOutline({
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
      <path fillRule='evenodd' d='M64 37.5H28v-3h36v3Z' clipRule='evenodd' />
      <path
        fillRule='evenodd'
        d='m66.121 36-10.06 10.06-2.122-2.12L61.88 36l-7.94-7.94 2.122-2.12L66.12 36ZM8.5 7.5h36v15h-3v-12h-30v51h30v-12h3v15h-36v-57Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

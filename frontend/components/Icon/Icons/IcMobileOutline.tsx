import { SVGProps } from 'react'

export default function IcMobileOutline({
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
        d='M13.5 14A7.5 7.5 0 0 1 21 6.5h30a7.5 7.5 0 0 1 7.5 7.5v44a7.5 7.5 0 0 1-7.5 7.5H21a7.5 7.5 0 0 1-7.5-7.5V14ZM21 9.5a4.5 4.5 0 0 0-4.5 4.5v44a4.5 4.5 0 0 0 4.5 4.5h30a4.5 4.5 0 0 0 4.5-4.5V14A4.5 4.5 0 0 0 51 9.5H21Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M19.5 19a3.5 3.5 0 0 1 3.5-3.5h26a3.5 3.5 0 0 1 3.5 3.5v28a3.5 3.5 0 0 1-3.5 3.5H23a3.5 3.5 0 0 1-3.5-3.5V19Zm3.5-.5a.5.5 0 0 0-.5.5v28a.5.5 0 0 0 .5.5h26a.5.5 0 0 0 .5-.5V19a.5.5 0 0 0-.5-.5H23Zm0 38a1.5 1.5 0 0 1 1.5-1.5h23a1.5 1.5 0 0 1 0 3h-23a1.5 1.5 0 0 1-1.5-1.5Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

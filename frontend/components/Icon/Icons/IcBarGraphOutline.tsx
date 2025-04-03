import { SVGProps } from 'react'

export default function IcBarGraphOutline({
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
        d='M7.5 46.5h21v17h-21v-17Zm3 3v11h15v-11h-15Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M25.5 36.5h21v27h-21v-27Zm3 3v21h15v-21h-15Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M43.5 26.5h21v37h-21v-37Zm3 3v31h15v-31h-15ZM50.51 9H44V6h10.717l2.25 10.691-2.935.618-1.318-6.262c-5.468 6.76-12.83 12.057-19.978 15.992-8.08 4.448-16.003 7.22-20.878 8.418l-.716-2.914c4.626-1.136 12.302-3.813 20.147-8.132C38.306 20.548 45.365 15.423 50.51 9Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

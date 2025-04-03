import { SVGProps } from 'react'

export default function IcWalletOutline({
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
        d='M40.5 36a8.5 8.5 0 0 1 8.5-8.5h18.5v17H49a8.5 8.5 0 0 1-8.5-8.5Zm8.5-5.5a5.5 5.5 0 1 0 0 11h15.5v-11H49Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M4.5 9.5h57V30h-3V12.5h-51v47h51V42h3v20.5h-57v-53Z'
        clipRule='evenodd'
      />
      <path fillRule='evenodd' d='M48 22H6v-3h42v3Z' clipRule='evenodd' />
      <path d='M52 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
    </svg>
  )
}

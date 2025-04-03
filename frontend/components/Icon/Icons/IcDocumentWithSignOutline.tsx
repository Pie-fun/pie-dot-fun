import { SVGProps } from 'react'

export default function IcDocumentWithSignOutline({
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
        d='M54 23H18v-3h36v3Zm0 9H18v-3h36v3Zm0 9H18v-3h36v3Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M11.5 5.5h49V56c0 5.799-4.701 10.5-10.5 10.5H11.5v-61Zm3 3v55H50a7.5 7.5 0 0 0 7.5-7.5V8.5h-43Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M50 48.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM39.5 56c0-5.799 4.701-10.5 10.5-10.5S60.5 50.201 60.5 56 55.799 66.5 50 66.5 39.5 61.799 39.5 56Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M55.06 54.06 49 60.122l-4.06-4.06 2.12-2.122L49 55.88l3.94-3.94 2.12 2.122Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

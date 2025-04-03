import { SVGProps } from 'react'

export default function IcPersonOutline({
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
        d='M36 4.5c-7.456 0-13.5 6.044-13.5 13.5S28.544 31.5 36 31.5 49.5 25.456 49.5 18 43.456 4.5 36 4.5ZM25.5 18c0-5.799 4.701-10.5 10.5-10.5S46.5 12.201 46.5 18 41.799 28.5 36 28.5 25.5 23.799 25.5 18ZM30 35.5C18.126 35.5 8.5 45.126 8.5 57v9.5h55V57c0-11.874-9.626-21.5-21.5-21.5H30ZM11.5 57c0-10.217 8.283-18.5 18.5-18.5h12c10.217 0 18.5 8.283 18.5 18.5v6.5h-49V57Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

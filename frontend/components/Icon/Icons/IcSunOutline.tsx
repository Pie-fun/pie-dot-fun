import { SVGProps } from 'react'

export default function IcSunOutline({
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
      <path d='M34.5 15V6h3v9h-3Z' />
      <path
        fillRule='evenodd'
        d='M19.5 36c0-9.113 7.387-16.5 16.5-16.5S52.5 26.887 52.5 36 45.113 52.5 36 52.5 19.5 45.113 19.5 36ZM36 22.5c-7.456 0-13.5 6.044-13.5 13.5S28.544 49.5 36 49.5 49.5 43.456 49.5 36 43.456 22.5 36 22.5Z'
        clipRule='evenodd'
      />
      <path d='m57.425 12.94-6.364 6.363 2.121 2.122 6.364-6.364-2.121-2.122ZM57 34.5h9v3h-9v-3Zm2.546 21.925-6.364-6.364-2.121 2.121 6.364 6.364 2.121-2.121ZM37.5 57v9h-3v-9h3Zm-22.44 2.546 6.365-6.364-2.122-2.121-6.364 6.364 2.122 2.121ZM15 37.5H6v-3h9v3Zm-2.06-22.44 6.363 6.365 2.122-2.122-6.364-6.364-2.122 2.122Z' />
    </svg>
  )
}

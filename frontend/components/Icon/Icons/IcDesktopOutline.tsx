import { SVGProps } from 'react'

export default function IcDesktopOutline({
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
        d='M63.5 10.5h-55v42h26v6h-26v3h55v-3h-26v-6h26v-42Zm-3 30v-27h-49v27h49Zm-49 3v6h49v-6h-49Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

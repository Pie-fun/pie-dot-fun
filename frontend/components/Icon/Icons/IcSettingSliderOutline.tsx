import { SVGProps } from 'react'

export default function IcSettingSliderOutline({
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
        d='M63 24H30v-3h33v3ZM42 51H9v-3h33v3Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M19.5 13.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-12 9c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12Zm45 18a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-12 9c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

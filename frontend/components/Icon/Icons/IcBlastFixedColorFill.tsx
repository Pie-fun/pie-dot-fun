import { SVGProps } from 'react'

export default function IcBlastFixedColorFill({
  ...props
}: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='72'
      height='72'
      fill='none'
      viewBox='0 0 72 72'
      data-icon
      {...props}
    >
      <path fill='#000' d='M0 0h72v72H0z' />
      <path
        fill='#FCFC03'
        d='m51.456 35.368 8.73-4.186 2.991-8.932L57.193 18H17.239L8 24.656h46.95l-2.475 7.517H33.648l-1.834 5.442H50.64l-3.059 9.008-2.25 6.78 8.84-4.25 3.16-9.463-5.912-4.222.036-.1Z'
      />
      <path
        fill='#FCFC03'
        d='m21.287 46.61 5.43-16.42-6.042-4.38-9.042 27.592H45.37l2.242-6.792H21.286Z'
      />
    </svg>
  )
}

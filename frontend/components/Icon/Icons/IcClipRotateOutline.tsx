import { SVGProps } from 'react'

export default function IcClipRotateOutline({
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
        d='M13.726 37.06c-6.443-6.443-6.443-16.89 0-23.334 6.444-6.443 16.891-6.443 23.335 0l7.07 7.071-2.12 2.122-7.072-7.072c-5.272-5.272-13.82-5.272-19.091 0-5.273 5.273-5.273 13.82 0 19.092l7.07 7.071-2.12 2.122-7.072-7.071ZM34.94 58.274c6.443 6.444 16.89 6.444 23.334 0 6.444-6.444 6.444-16.891 0-23.335l-7.071-7.07-2.121 2.12 7.07 7.072c5.273 5.272 5.273 13.82 0 19.092-5.271 5.272-13.82 5.272-19.091 0L29.99 49.08l-2.122 2.122 7.071 7.07Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M45.374 47.496 24.161 26.282l2.122-2.12 21.213 21.212-2.122 2.122Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

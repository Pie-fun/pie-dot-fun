import { SVGProps } from 'react'

export default function IcSocialXOutline({
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
      <path d='M40.566 32.171 58.436 11H54.2L38.686 29.383 26.293 11H12l18.74 27.798L12 61h4.235L32.62 41.587 45.707 61H60L40.566 32.171h.001Zm-5.8 6.872-1.898-2.768L17.76 14.25h6.504l12.192 17.776 1.9 2.768 15.847 23.105H47.7L34.767 39.044v-.002.001Z' />
    </svg>
  )
}

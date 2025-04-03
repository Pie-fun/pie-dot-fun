import { SVGProps } from 'react'

export default function IcTetherFixedColorFill({
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
      <path fill='#50AF95' d='M0 0h72v72H0z' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M40.68 37.577c-.262.02-1.612.1-4.624.1-2.396 0-4.097-.072-4.694-.1-9.26-.404-16.17-2.001-16.17-3.914 0-1.913 6.91-3.509 16.17-3.919v6.242c.605.043 2.339.145 4.735.145 2.875 0 4.315-.12 4.574-.143v-6.24c9.24.409 16.136 2.006 16.136 3.915 0 1.908-6.894 3.506-16.136 3.912h.009v.002Zm0-8.474v-5.586h12.894V15H18.467v8.517H31.36v5.584c-10.48.477-18.36 2.535-18.36 5 0 2.466 7.88 4.521 18.36 5V57h9.318V39.095C51.133 38.618 59 36.562 59 34.099c0-2.463-7.86-4.519-18.322-4.998h.002v.002Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

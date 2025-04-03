import { SVGProps } from 'react'

export default function IcKeyOutline({
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
        d='M48.5 11c-7.18 0-13 5.82-13 13 0 1.748.344 3.412.967 4.93l.38.926L11 55.623V61h2.879l3.267-3.268A2.5 2.5 0 0 1 18.914 57H23.5v-4.5A2.5 2.5 0 0 1 26 50h4.5v-5.547c0-.72.31-1.406.853-1.88l9.301-8.147.946.594A12.932 12.932 0 0 0 48.5 37c7.18 0 13-5.82 13-13s-5.82-13-13-13Zm-16 13c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16c-2.715 0-5.276-.678-7.518-1.873L33.5 44.68v5.82A2.5 2.5 0 0 1 31 53h-4.5v4.5A2.5 2.5 0 0 1 24 60h-4.879l-4 4H8v-9.623L33.337 29.12A15.985 15.985 0 0 1 32.5 24Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M51 18a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-6.5 3.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

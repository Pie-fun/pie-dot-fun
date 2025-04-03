import { SVGProps } from 'react'

export default function IcWarningSignOutline({
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
        d='M36.435 10.814a.5.5 0 0 0-.87 0l-26.57 46.94a.5.5 0 0 0 .435.746h53.14a.5.5 0 0 0 .435-.746l-26.57-46.94Zm-3.48-1.478c1.34-2.368 4.75-2.368 6.09 0l26.57 46.94c1.321 2.333-.364 5.224-3.045 5.224H9.43c-2.68 0-4.366-2.89-3.046-5.224l26.57-46.94Z'
        clipRule='evenodd'
      />
      <path d='m38.015 24-.38 20.438h-3.381L33.806 24h4.209Zm-2.037 25.066c.865 0 1.582.288 2.149.863.582.576.873 1.27.873 2.082a2.92 2.92 0 0 1-.873 2.125c-.567.576-1.284.864-2.15.864-.85 0-1.56-.288-2.126-.864A2.96 2.96 0 0 1 33 52.011c0-.812.284-1.506.85-2.082.568-.575 1.277-.863 2.128-.863Z' />
    </svg>
  )
}

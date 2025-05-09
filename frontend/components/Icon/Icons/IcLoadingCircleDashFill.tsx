import { SVGProps } from 'react'

export default function IcLoadingCircleDashFill({
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
      <path d='M38.521 16.963a19.487 19.487 0 0 0-5.042 0l-1.397-10.71a30.285 30.285 0 0 1 7.836 0l-1.397 10.71Z' />
      <path
        d='M28.982 18.436a19.494 19.494 0 0 0-4.367 2.521l-6.565-8.576a30.282 30.282 0 0 1 6.787-3.918l4.145 9.973Z'
        opacity='.91'
      />
      <path
        d='M21.457 24.48a19.49 19.49 0 0 0-2.521 4.368l-9.973-4.145a30.287 30.287 0 0 1 3.918-6.787l8.576 6.565Z'
        opacity='.82'
      />
      <path
        d='M17.963 33.479a19.486 19.486 0 0 0 0 5.042l-10.71 1.397a30.282 30.282 0 0 1 0-7.836l10.71 1.397Z'
        opacity='.73'
      />
      <path
        d='M19.436 43.018a19.477 19.477 0 0 0 2.52 4.367l-8.575 6.565a30.281 30.281 0 0 1-3.918-6.787l9.973-4.145Z'
        opacity='.64'
      />
      <path
        d='M25.48 50.543a19.491 19.491 0 0 0 4.368 2.521l-4.145 9.973a30.298 30.298 0 0 1-6.787-3.918l6.565-8.576Z'
        opacity='.55'
      />
      <path
        d='M34.478 54.037a19.487 19.487 0 0 0 5.043 0l1.397 10.71a30.28 30.28 0 0 1-7.836 0l1.396-10.71Z'
        opacity='.46'
      />
      <path
        d='M44.018 52.564a19.47 19.47 0 0 0 4.367-2.521l6.564 8.576a30.27 30.27 0 0 1-6.786 3.918l-4.145-9.973Z'
        opacity='.37'
      />
      <path
        d='M51.543 46.52a19.507 19.507 0 0 0 2.521-4.368l9.973 4.145a30.29 30.29 0 0 1-3.918 6.787l-8.576-6.565Z'
        opacity='.28'
      />
      <path
        d='M55.037 37.521a19.468 19.468 0 0 0 0-5.042l10.71-1.397a30.278 30.278 0 0 1 0 7.836l-10.71-1.397Z'
        opacity='.19'
      />
      <path
        d='M53.564 27.982a19.478 19.478 0 0 0-2.521-4.367l8.576-6.564a30.282 30.282 0 0 1 3.918 6.786l-9.973 4.145Z'
        opacity='.1'
      />
      <path
        d='M47.52 20.457a19.476 19.476 0 0 0-4.368-2.521l4.145-9.973a30.284 30.284 0 0 1 6.787 3.918l-6.565 8.576Z'
        opacity='.05'
      />
    </svg>
  )
}

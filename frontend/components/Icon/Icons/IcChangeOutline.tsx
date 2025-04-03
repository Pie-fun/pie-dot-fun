import { SVGProps } from 'react'

export default function IcChangeOutline({
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
      <path d='m27.94 10.261 3.691 3.693C20.914 15.576 12.7 24.83 12.7 36c0 9.279 5.667 17.23 13.723 20.59l1.154-2.769C20.6 50.912 15.7 44.027 15.7 36.001c0-9.776 7.268-17.854 16.695-19.126l-2.916 5.415 2.642 1.422 4.729-8.783-6.79-6.789-2.12 2.121Zm16.12 51.485-3.692-3.692C51.087 56.43 59.3 47.177 59.3 36.007c0-9.28-5.667-17.231-13.723-20.59l-1.154 2.768C51.4 21.095 56.3 27.98 56.3 36.007c0 9.775-7.268 17.853-16.695 19.125l2.916-5.414-2.642-1.423-4.729 8.783 6.79 6.79 2.12-2.122Z' />
    </svg>
  )
}

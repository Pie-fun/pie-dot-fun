import { SVGProps } from 'react'

export default function IcEmptyImageFill({
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
        d='M6 12a6 6 0 0 1 6-6h48a6 6 0 0 1 6 6v34.738l-6.456-5.466a1.28 1.28 0 0 1-.025-.023l-.055-.054-.084-.083a6 6 0 0 0-8.05-.333l-4.646 3.871-9.892-9.892a6 6 0 0 0-7.298-.922L6 46.654V12Zm0 41.49V60a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6v-5.4l-10.338-8.753c-.2-.168-.39-.358-.468-.436l-.024-.024-.001-.001.002.002-4.646 3.871a6 6 0 0 1-8.084-.366L32.55 39l-.128.074L6 53.489ZM54 24a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

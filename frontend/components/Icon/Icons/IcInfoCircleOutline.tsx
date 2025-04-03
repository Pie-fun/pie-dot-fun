import { SVGProps } from 'react'

export default function IcInfoCircleOutline({
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
        d='M36 63c14.912 0 27-12.088 27-27S50.912 9 36 9 9 21.088 9 36s12.088 27 27 27Zm0 3c16.569 0 30-13.431 30-30C66 19.431 52.569 6 36 6 19.431 6 6 19.431 6 36c0 16.569 13.431 30 30 30Z'
        clipRule='evenodd'
      />
      <path d='M38.68 26.94v18.4h5.94V48h-15.8v-2.66h6.5V29.6h-6.3v-2.66h9.66ZM36 17.08c.747 0 1.34.227 1.78.68a2.26 2.26 0 0 1 .68 1.66c0 .68-.227 1.253-.68 1.72-.44.453-1.033.68-1.78.68-.707 0-1.287-.227-1.74-.68-.453-.467-.68-1.04-.68-1.72 0-.653.227-1.207.68-1.66.453-.453 1.033-.68 1.74-.68Z' />
    </svg>
  )
}

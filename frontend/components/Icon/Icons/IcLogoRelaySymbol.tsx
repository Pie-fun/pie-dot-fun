import { SVGProps } from 'react'

export default function IcLogoRelaySymbol({
  ...props
}: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='12'
      fill='none'
      viewBox='0 0 11 12'
      data-icon
      {...props}
    >
      <g>
        <path
          fill='url(#bba8ba41-5346-4793-9c5c-e2ba83fbd8da)'
          d='M5.068 9.941 7.37 8.574V4.652L4.068 2.69l-2.3 1.366 3.3 1.96V9.94Z'
        />
        <path
          fill='url(#bba8ba41-5346-4793-9c5c-e2ba83fbd8da)'
          fillRule='evenodd'
          d='M5.083 1.41 6.301.684 5.205.034a.239.239 0 0 0-.244 0L.121 2.908A.252.252 0 0 0 0 3.126v5.749c0 .09.046.172.122.217l4.84 2.875a.239.239 0 0 0 .243 0l4.84-2.875a.253.253 0 0 0 .122-.217V7.57l-1.22.724-3.864 2.295L1.22 8.295v-4.59L5.083 1.41Z'
          clipRule='evenodd'
        />
        <path
          fill='url(#bba8ba41-5346-4793-9c5c-e2ba83fbd8da)'
          d='m7.881 8.266 2.284-1.356V3.133a.253.253 0 0 0-.122-.218L6.864 1.027l-2.255 1.34L7.882 4.31v3.956Z'
        />
      </g>
      <defs>
        <linearGradient
          id='bba8ba41-5346-4793-9c5c-e2ba83fbd8da'
          x1='4.983'
          x2='4.048'
          y1='3.347'
          y2='9.684'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#624AFF' />
          <stop offset='.98' stopColor='#DD09FF' />
        </linearGradient>
        <linearGradient
          id='bba8ba41-5346-4793-9c5c-e2ba83fbd8da'
          x1='4.43'
          x2='5.921'
          y1='11.524'
          y2='-.388'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#EF41FF' />
          <stop offset='.67' stopColor='#1F6BFF' />
          <stop offset='1' stopColor='#7DEFFF' />
        </linearGradient>
        <linearGradient
          id='bba8ba41-5346-4793-9c5c-e2ba83fbd8da'
          x1='8.284'
          x2='6.843'
          y1='.58'
          y2='6.738'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7DEFFF' />
          <stop offset='.98' stopColor='#5707FF' />
        </linearGradient>
        <clipPath id='bba8ba41-5346-4793-9c5c-e2ba83fbd8da'>
          <path fill='#fff' d='M0 0h10.167v12H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

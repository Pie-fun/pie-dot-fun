import { SVGProps } from 'react'

export default function IcSolanaFixedColorFill({
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
      <path
        fill='url(#7c44aafa-c5a2-44f3-a866-7e952c5af8e7)'
        d='m59.753 48.113-7.923 8.314a1.839 1.839 0 0 1-1.344.573H12.922a.93.93 0 0 1-.504-.148.881.881 0 0 1-.337-.396.86.86 0 0 1-.062-.51.915.915 0 0 1 .233-.464l7.932-8.314a1.842 1.842 0 0 1 1.34-.568h37.559a.93.93 0 0 1 .504.148.881.881 0 0 1 .337.397.86.86 0 0 1 .062.51.954.954 0 0 1-.233.463v-.005ZM51.83 31.371a1.839 1.839 0 0 0-1.344-.573H12.922a.93.93 0 0 0-.504.148.881.881 0 0 0-.337.396.86.86 0 0 0-.062.51.915.915 0 0 0 .233.464l7.932 8.314a1.842 1.842 0 0 0 1.34.568h37.559a.93.93 0 0 0 .504-.148.881.881 0 0 0 .337-.396.86.86 0 0 0 .062-.511.914.914 0 0 0-.233-.463l-7.923-8.314v.005ZM12.922 25.4h37.564a1.842 1.842 0 0 0 1.345-.573l7.922-8.314a.899.899 0 0 0-.166-1.37.942.942 0 0 0-.504-.148H21.519c-.252 0-.499.053-.732.148a1.88 1.88 0 0 0-.608.42l-7.932 8.324a.899.899 0 0 0 .166 1.37.929.929 0 0 0 .504.148l.005-.005Z'
      />
      <defs>
        <linearGradient
          id='7c44aafa-c5a2-44f3-a866-7e952c5af8e7'
          x1='16.634'
          x2='55.063'
          y1='58.508'
          y2='14.226'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.08' stopColor='#9945FF' />
          <stop offset='.3' stopColor='#8752F3' />
          <stop offset='.5' stopColor='#5497D5' />
          <stop offset='.6' stopColor='#43B4CA' />
          <stop offset='.72' stopColor='#28E0B9' />
          <stop offset='.97' stopColor='#19FB9B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

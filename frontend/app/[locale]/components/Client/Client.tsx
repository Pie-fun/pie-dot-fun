'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { queries } from '@/libs/vanilla-extract/queries'
import * as styles from '@/app/[locale]/components/Client/Client.css'
import { Image } from '@/components/Image/Image'
import imgPie from '@/app/[locale]/components/Client/img_pie.png'

export function BackgroundPieImages() {
  const isWideDesktop = useMediaQuery({
    query: queries.breakpoints.wideDesktop,
  })

  return (
    <>
      {isWideDesktop && (
        <>
          <div className={styles.topLeft()}>
            <Image
              src={imgPie.src}
              placeholder='blur'
              blurDataURL={imgPie.blurDataURL}
              alt=''
              width={200}
              height={200}
              unoptimized
            />
          </div>
          <div className={styles.bottomRight()}>
            <Image
              src={imgPie.src}
              placeholder='blur'
              blurDataURL={imgPie.blurDataURL}
              alt=''
              width={168}
              height={168}
              unoptimized
            />
          </div>
        </>
      )}
    </>
  )
}

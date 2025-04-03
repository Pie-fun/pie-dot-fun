'use client'

import { AnimateSpringImages } from '@/app/components/AnimateSpringImages/AnimateSpringImages'
import imgHomePieAnimationBg from '@/app/components/HomePieAnimation/img_home_pie_animation_bg.png'
import imgHomePieAnimationTransition01 from '@/app/components/HomePieAnimation/img_home_pie_animation_transition01.png'
import imgHomePieAnimationTransition02 from '@/app/components/HomePieAnimation/img_home_pie_animation_transition02.png'
import imgHomePieAnimationTransition03 from '@/app/components/HomePieAnimation/img_home_pie_animation_transition03.png'
import imgHomePieAnimationTransition04 from '@/app/components/HomePieAnimation/img_home_pie_animation_transition04.png'
import imgHomePieAnimationTransition05 from '@/app/components/HomePieAnimation/img_home_pie_animation_transition05.png'
import { Image } from '@/components/Image/Image'
import * as styles from '@/app/components/HomePieAnimation/HomePieAnimation.css'

export function HomePieAnimation() {
  const images = [
    imgHomePieAnimationTransition01.src,
    imgHomePieAnimationTransition02.src,
    imgHomePieAnimationTransition03.src,
    imgHomePieAnimationTransition04.src,
    imgHomePieAnimationTransition05.src,
  ]

  return (
    <div className={styles.root()}>
      <Image
        src={imgHomePieAnimationBg.src}
        placeholder='blur'
        blurDataURL={imgHomePieAnimationBg.blurDataURL}
        alt=''
        width={112}
        height={112}
      />
      <div className={styles.content()}>
        <AnimateSpringImages images={images} width='6rem' height='6rem' />
      </div>
    </div>
  )
}

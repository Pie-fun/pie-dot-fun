'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as styles from '@/components/Slider/Slider.css'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ defaultValue, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={styles.root()}
    defaultValue={defaultValue}
    value={value}
    {...props}
  >
    <SliderPrimitive.Track className={styles.track()}>
      <SliderPrimitive.Range className={styles.range()} />
    </SliderPrimitive.Track>
    {(defaultValue || value)?.map((value) => (
      <SliderPrimitive.Thumb key={value} className={styles.thumb()} />
    ))}
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

import { CSSProperties, keyframes } from '@vanilla-extract/css'

const fadeInKeyframes = keyframes({
  '0%': { opacity: 0 },
})

const fadeOutKeyframes = keyframes({
  '100%': { opacity: 0 },
})

const moveRightKeyframes = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(300%)',
  },
})

const slideInFromTopKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
  },
})

const slideOutToTopKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
  },
})

const slideInFromBottomKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
  },
})

const slideOutToBottomKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
  },
})

const slideInFromLeftKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
  },
})

const slideOutToLeftKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
  },
})

const slideInFromRightKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
  },
})

const slideOutToRightKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
  },
})

const pulseKeyframes = keyframes({
  '50%': {
    opacity: '.5',
  },
})

const spinKeyframes = keyframes({
  '100%': {
    transform: 'rotate(1turn)',
  },
})

export const defaultTransition = 'all 150ms ease-in'

export const fadeIn = {
  animationName: fadeInKeyframes,
  animationDuration: '0.25s',
} satisfies CSSProperties

export const fadeOut = {
  animationName: fadeOutKeyframes,
  animationDuration: '0.25s',
} satisfies CSSProperties

export const moveRight = {
  animationName: moveRightKeyframes,
  animationDuration: '1.1s',
  animationTimingFunction: 'cubic-bezier(.455,.03,.515,.955)',
  animationIterationCount: 'infinite',
} satisfies CSSProperties

export const slideInFromTop = {
  animationName: slideInFromTopKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideOutToTop = {
  animationName: slideOutToTopKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideInFromBottom = {
  animationName: slideInFromBottomKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideOutToBottom = {
  animationName: slideOutToBottomKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideInFromLeft = {
  animationName: slideInFromLeftKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideOutToLeft = {
  animationName: slideOutToLeftKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideInFromRight = {
  animationName: slideInFromRightKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const slideOutToRight = {
  animationName: slideOutToRightKeyframes,
  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(.4,0,.2,1)',
} satisfies CSSProperties

export const pulse = {
  animationName: pulseKeyframes,
  animationDuration: '2s',
  animationTimingFunction: 'cubic-bezier(.4,0,.6,1)',
  animationIterationCount: 'infinite',
} satisfies CSSProperties

export const spin = {
  animationName: spinKeyframes,
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
} satisfies CSSProperties

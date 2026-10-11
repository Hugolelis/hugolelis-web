import type { Transition } from 'motion/react'

// Tuned to the durations/easings already used elsewhere on the site
// (buttons, reveals) — kept local to this component rather than global
// CSS variables since nothing else references them.
export const motionTokens = {
  ease: {
    enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
    standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
  spring: {
    morph: { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 } as Transition,
    snappy: { type: 'spring', stiffness: 420, damping: 32, mass: 0.6 } as Transition,
  },
  duration: {
    fast: 0.16,
  },
  blur: {
    soft: 6,
    subtle: 3,
  },
}

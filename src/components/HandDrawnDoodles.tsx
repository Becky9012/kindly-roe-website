import { motion } from 'motion/react'

export function HandDrawnStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.path
        d="M50 15 L55 40 L80 45 L60 60 L65 85 L50 70 L35 85 L40 60 L20 45 L45 40 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function HandDrawnSpiral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.path
        d="M50 50 Q60 50 60 40 Q60 30 50 30 Q40 30 40 40 Q40 55 55 55 Q70 55 70 40 Q70 20 50 20 Q30 20 30 40 Q30 65 55 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function HandDrawnSquiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.path
        d="M5 20 Q15 10 25 20 T45 20 T65 20 T85 20 L95 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function HandDrawnHeart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.path
        d="M50 85 C50 85 15 60 15 40 C15 25 25 20 35 25 C40 27 45 32 50 40 C55 32 60 27 65 25 C75 20 85 25 85 40 C85 60 50 85 50 85 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function ScribbleHighlight({
  className = '',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 200 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M5 15 Q20 10 40 15 T80 12 T120 16 T160 13 T195 15"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M3 18 Q25 12 45 17 T85 14 T125 18 T165 15 T198 17"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.2"
        fill="none"
      />
    </svg>
  )
}

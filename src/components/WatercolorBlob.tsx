import { motion } from 'motion/react'

interface WatercolorBlobProps {
  color: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function WatercolorBlob({ color, className = '', size = 'md' }: WatercolorBlobProps) {
  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  }

  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 40%, ${color}40 0%, ${color}20 40%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.1, 0.95, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

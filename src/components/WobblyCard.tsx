import { ReactNode } from 'react'

interface WobblyCardProps {
  children: ReactNode
  className?: string
  borderColor?: string
}

export function WobblyCard({ children, className = '', borderColor = '#4A4A4A' }: WobblyCardProps) {
  // Create a wobbly SVG border path
  const wobblePath = `
    M 10,5 
    Q 15,3 25,5 
    L 95,5 
    Q 97,7 95,15 
    L 95,85 
    Q 97,87 90,90 
    L 15,90 
    Q 8,92 10,85 
    L 10,15 
    Q 8,10 10,5
  `

  return (
    <div className={`relative ${className}`}>
      {/* Wobbly border as SVG */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d={wobblePath}
          fill="none"
          stroke={borderColor}
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content */}
      <div className="relative p-6">{children}</div>
    </div>
  )
}

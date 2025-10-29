import React from 'react'

import HeroSvg from '../assets/Hero.svg'

interface HeroIllustrationProps {
  className?: string
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`hero-illustration ${className}`}>
      <img src={HeroSvg} alt="Hand-drawn hero illustration" className="h-auto w-full" />
    </div>
  )
}

export default HeroIllustration

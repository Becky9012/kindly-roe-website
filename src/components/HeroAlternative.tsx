import { motion } from 'motion/react'

import familyIllustration from '@/assets/family.png'
import girlIllustration from '@/assets/girl.png'
import familyCard from '@/assets/familycard.svg'
import adultCard from '@/assets/girlcard1.svg'

import { HandDrawnCircle } from './HandDrawnCircle'
import { RoeLogo } from './RoeLogo'

interface HeroAlternativeProps {
  logo: string
}

export function HeroAlternative({ logo }: HeroAlternativeProps) {
  return (
    <section className="hero-bg relative min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="nav-gradient absolute top-0 right-0 left-0 z-50">
        <div className="navbar-thick mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center">
            <img src={logo} alt="Kindly Roe" className="logo-white" />
          </div>
          <div className="flex items-center">{/* Placeholder for future menu items */}</div>
        </div>
      </nav>

      {/* Hero Content - Alternative Layout */}
      <div className="pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 pb-10">
          {/* Split Layout: Illustration Left, Content Right */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Family Illustrations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <img
                src={familyIllustration}
                alt="Family illustration"
                className="h-auto w-full max-w-md"
              />
              <img
                src={girlIllustration}
                alt="Girl illustration"
                className="h-auto w-full max-w-sm"
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <HandDrawnCircle className="mb-4 h-12 w-12 text-[color:var(--copper-500)] opacity-40" />
              </div>
              <h1 className="hero-title text-5xl tracking-tight text-[color:var(--ink)] md:text-6xl lg:text-7xl">
                Whether you're exploring or ready to begin
              </h1>
              <p className="hero-subtitle mt-4 text-xl text-[color:var(--ink)]/70 md:text-2xl lg:text-3xl">
                Two gentle paths. Choose what fits today.
              </p>

              {/* Path Cards - Vertical Stack */}
              <div className="mt-12 space-y-6">
                {/* Families path */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group relative flex items-center gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] p-6 shadow-[var(--shadow-soft)] ring-2 ring-[#B87333]/30 transition-all duration-300 hover:shadow-xl hover:ring-[#B87333]/50"
                >
                  <img
                    src={familyCard}
                    alt="Family navigating support"
                    className="h-24 w-24 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
                      For Families
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--ink)]/70 md:text-base">
                      Navigate your journey together
                    </p>
                  </div>
                  <div className="text-[color:var(--copper-500)]">
                    <RoeLogo className="h-8 w-8" />
                  </div>
                </motion.a>

                {/* Adults path */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="group relative flex items-center gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] p-6 shadow-[var(--shadow-soft)] ring-2 ring-[#B87333]/30 transition-all duration-300 hover:shadow-xl hover:ring-[#B87333]/50"
                >
                  <img
                    src={adultCard}
                    alt="Adult seeking clarity"
                    className="h-24 w-24 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
                      For Adults
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--ink)]/70 md:text-base">
                      Take time for yourself
                    </p>
                  </div>
                  <div className="text-[color:var(--copper-500)]">
                    <RoeLogo className="h-8 w-8" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

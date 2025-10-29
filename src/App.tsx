import { BookOpen, Calendar, Check, FileText, Heart, Lightbulb, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'

import familyCard from '@/assets/familycard.svg'
import adultCard from '@/assets/girlcard1.svg'
import kindlyRoeLogo from '@/assets/Kindlyroe.svg'

import { BrandIllustration } from './components/BrandIllustration'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { HandDrawnArrow } from './components/HandDrawnArrow'
import { HandDrawnCircle } from './components/HandDrawnCircle'
import { HandDrawnUnderline } from './components/HandDrawnUnderline'
import { KindlyRoeLogo } from './components/KindlyRoeLogo'
import { RoeLogo } from './components/RoeLogo'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

export default function App() {
  useEffect(() => {
    document.title = `Kindly Roe - ${new Date().toLocaleTimeString()}`
  }, [])

  const testimonials = [
    {
      name: 'Emma',
      role: 'Parent of two',
      content:
        "Roe helped me see patterns I'd missed. It doesn't feel like another task - it feels like someone's finally listening.",
      rating: 5,
    },
    {
      name: 'James',
      role: 'Single dad',
      content:
        'I was drowning in paperwork and appointments. Roe helped me organize my thoughts and feel more prepared for meetings.',
      rating: 5,
    },
    {
      name: 'Priya',
      role: 'Foster carer',
      content:
        "The way Roe validates my feelings before offering suggestions makes such a difference. I don't feel judged, just supported.",
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section with Navigation - Full Background */}
      <section className="hero-bg relative min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="nav-gradient absolute top-0 right-0 left-0 z-50">
          <div className="navbar-thick mx-auto flex max-w-7xl items-center justify-between px-6">
            {/* Left side - Kindly Roe Logo */}
            <div className="flex items-center">
              <img src={kindlyRoeLogo} alt="Kindly Roe" className="logo-white" />
            </div>

            {/* Right side - could add menu items here later */}
            <div className="flex items-center">{/* Placeholder for future menu items */}</div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="pt-32 md:pt-40">
          <div className="mx-auto max-w-7xl px-6 pb-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="hero-title text-7xl tracking-tight text-[color:var(--ink)] md:text-8xl lg:text-9xl">
                Whether you're exploring or ready to begin
              </h1>
              <p className="hero-subtitle mt-6 text-2xl text-[color:var(--ink)]/70 md:text-3xl lg:text-4xl">
                Two gentle paths. Choose what fits today.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Families door */}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] p-8 shadow-[var(--shadow-soft)] ring-2 ring-[#B87333]/30 backdrop-blur transition-all duration-300 hover:shadow-xl hover:ring-[#B87333]/50"
                aria-label="Go to support for families"
                role="region"
                aria-labelledby="families-heading"
              >
                <div className="hero-card-families-overlay pointer-events-none absolute inset-0" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={familyCard}
                      alt="Family navigating support"
                      className="mx-auto mb-6 aspect-[3/4] w-full max-w-56 object-contain"
                    />
                    <div className="hero-card-image-fade pointer-events-none absolute inset-x-0 bottom-0"></div>
                  </div>
                  <h3
                    id="families-heading"
                    className="hero-card-title text-4xl tracking-[-0.01em] text-[color:var(--ink)] md:text-5xl"
                  >
                    For Families
                  </h3>
                  <p className="hero-card-description mt-3 text-lg leading-relaxed text-[color:var(--ink)]/70 md:text-xl">
                    Navigate your journey together. Track patterns, celebrate progress, and build
                    understanding as a family unit.
                  </p>
                  <button className="kr-btn-primary mt-6 bg-[#B87333] text-white hover:bg-[#A65D3A]">
                    Start family journey
                  </button>
                </div>
              </motion.a>

              {/* Adults door */}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FFFEFA] to-[#F5F0E8] p-8 shadow-[var(--shadow-soft)] ring-2 ring-[#B87333]/30 backdrop-blur transition-all duration-300 hover:shadow-xl hover:ring-[#B87333]/50"
                aria-label="Go to support for adults"
                role="region"
                aria-labelledby="adults-heading"
              >
                <div className="hero-card-adults-overlay pointer-events-none absolute inset-0" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={adultCard}
                      alt="Adult seeking clarity"
                      className="mx-auto mb-6 aspect-[3/4] w-full max-w-56 object-contain"
                    />
                    <div className="hero-card-image-fade pointer-events-none absolute inset-x-0 bottom-0"></div>
                  </div>
                  <h3
                    id="adults-heading"
                    className="hero-card-title text-4xl tracking-[-0.01em] text-[color:var(--ink)] md:text-5xl"
                  >
                    For Adults
                  </h3>
                  <p className="hero-card-description mt-3 text-lg leading-relaxed text-[color:var(--ink)]/70 md:text-xl">
                    Take time for yourself. Reflect on your experiences, understand your needs, and
                    find clarity in your personal journey.
                  </p>
                  <button className="kr-btn-primary mt-6 bg-[#B87333] text-white hover:bg-[#A65D3A]">
                    Begin personal journey
                  </button>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="main-container relative w-full bg-[var(--kr-bg)]">
        {/* Features Section - Bento Box Style */}
        <section
          id="features"
          className="kr-bg-eggshell border-y border-[color:var(--ink)]/15 px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-[color:var(--ink)]">
                <span className="relative inline-block">
                  <span className="inline-flex items-center gap-2">
                    How <RoeLogo className="inline-block h-8" /> can help
                  </span>
                  <HandDrawnUnderline className="kr-underline-blush absolute -bottom-2 left-0 h-3 w-full opacity-50" />
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-[color:var(--ink)]/80">
                From what you've shared with other families, these are the things that might make
                your days a bit lighter.
              </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {/* Large Card - Spans 2 columns and 2 rows */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 md:row-span-2"
              >
                <Card className="kr-card-stroke kr-bg-eggshell relative h-full overflow-hidden p-8 md:p-12">
                  <div className="absolute top-0 right-0 h-48 w-48 rounded-full [color:var(--copper-500)] opacity-10 blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6 inline-block">
                      <HandDrawnCircle className="absolute -top-2 -left-2 h-20 w-20 text-[#C97A47] opacity-30" />
                      <Heart className="relative z-10 mt-5 ml-5 h-10 w-10 text-[color:var(--ink)]" />
                    </div>
                    <h3 className="mb-4 text-[color:var(--ink)]">A companion who listens</h3>
                    <p className="mb-6 text-[color:var(--ink)]/80">
                      <span className="inline-flex items-center gap-1">
                        <RoeLogo className="inline-block h-5" /> is
                      </span>{' '}
                      here to help you understand your child's needs, track what matters, and find
                      moments of calm in the everyday.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="border-2 border-[color:var(--ink)] bg-[#EBC8B2]/50 px-3 py-1 text-sm text-[color:var(--ink)]">
                        understanding
                      </span>
                      <span className="border-2 border-[color:var(--ink)] bg-white px-3 py-1 text-sm text-[color:var(--ink)]">
                        non-judgemental
                      </span>
                      <span className="border-2 border-[color:var(--ink)] bg-white px-3 py-1 text-sm text-[color:var(--ink)]">
                        always here
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Medium Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="md:col-span-1 lg:col-span-2"
              >
                <Card className="kr-card-stroke relative h-full overflow-hidden bg-[color:var(--copper-400)] p-6">
                  <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white opacity-15 blur-2xl"></div>
                  <div className="relative z-10">
                    <BookOpen className="mb-4 h-8 w-8 text-[color:var(--ink)]" />
                    <h3 className="mb-3 text-[color:var(--ink)]">
                      Track patterns, not just behaviors
                    </h3>
                    <p className="text-[color:var(--ink)]/90">
                      Notice what's working, what might need support, and celebrate small wins along
                      the way.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Medium Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-1 lg:col-span-2"
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <MessageCircle className="mb-4 h-8 w-8 text-[color:var(--ink)]" />
                  <h3 className="mb-3 text-[color:var(--ink)]">Plain language support</h3>
                  <p className="text-[color:var(--ink)]/80">
                    We help make sense of EHCPs, meetings, and paperwork - without the jargon.
                  </p>
                </Card>
              </motion.div>

              {/* Small Card with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-1"
              >
                <Card className="kr-card-stroke flex h-full flex-col items-center justify-center bg-[color:var(--silver-300)] p-6 text-center">
                  <Calendar className="mb-3 h-12 w-12 text-[color:var(--ink)]" />
                  <h4 className="text-[color:var(--ink)]">Track routines</h4>
                  <p className="text-sm text-[color:var(--ink)]/80">Your family's rhythm</p>
                </Card>
              </motion.div>

              {/* Small Card with reflection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-1"
              >
                <Card className="kr-card-stroke kr-bg-eggshell flex h-full flex-col items-center justify-center p-6 text-center">
                  <Lightbulb className="mb-3 h-12 w-12 text-[#D4AF37]" />
                  <h4 className="text-[color:var(--ink)]">Notice wins</h4>
                  <p className="text-sm text-[color:var(--ink)]/80">Even the small ones</p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-16 text-center"
            >
              <div className="absolute -top-20 right-0 h-32 w-32 opacity-10">
                <BrandIllustration className="h-full w-full text-[#C97A47]" />
              </div>
              <HandDrawnArrow className="mx-auto mb-4 h-24 w-24 rotate-90 text-[color:var(--copper-500)] opacity-40" />
              <p className="text-[color:var(--ink)]/80">
                you might want to explore what{' '}
                <span className="inline-flex items-center gap-1">
                  <RoeLogo className="inline-block h-5" /> can
                </span>{' '}
                do for you
              </p>
            </motion.div>
          </div>
        </section>

        {/* How it Works */}
        <section className="kr-bg-eggshell relative overflow-hidden px-6 py-20">
          {/* Decorative illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute right-10 bottom-10 hidden h-64 w-64 lg:block"
          >
            <BrandIllustration className="h-full w-full text-[color:var(--gold-300)]" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-[color:var(--ink)]">
                <span className="relative inline-block">
                  <span className="inline-flex items-center gap-2">
                    How <RoeLogo className="inline-block h-8" /> speaks to you
                  </span>
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 h-3 w-full text-[color:var(--copper-500)] opacity-40" />
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-[color:var(--ink)]/80">
                Every word is chosen with care. Here's what it feels like to use{' '}
                <span className="inline-flex items-center gap-1">
                  <RoeLogo className="inline-block h-5" />
                </span>
                .
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Welcome moment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#B87333] px-3 py-1 text-xs text-white">
                      welcome
                    </span>
                  </div>
                  <p className="mb-4 text-[color:var(--ink)]/80 italic">
                    "Hi, I'm{' '}
                    <span className="inline-flex items-center gap-1">
                      <RoeLogo className="inline-block h-5" />
                    </span>
                    . I'm here to help you make sense of things - calmly, one step at a time."
                  </p>
                  <p className="text-[color:var(--ink)]/80/70 text-xs">first thing you see</p>
                </Card>
              </motion.div>

              {/* Gentle reminder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#D9D9D9] px-3 py-1 text-xs text-[color:var(--ink)]">
                      check-in
                    </span>
                  </div>
                  <p className="mb-4 text-[color:var(--ink)]/80 italic">
                    "Would now be a good time to reflect on today?"
                  </p>
                  <p className="text-[color:var(--ink)]/80/70 text-xs">
                    never demanding, always inviting
                  </p>
                </Card>
              </motion.div>

              {/* Confirmation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#B8C5B3] px-3 py-1 text-xs text-white">
                      saved
                    </span>
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#B8C5B3]" />
                    <p className="text-[color:var(--ink)]/80 italic">"that's saved"</p>
                  </div>
                  <p className="text-[color:var(--ink)]/80/70 text-xs">
                    simple, reassuring confirmations
                  </p>
                </Card>
              </motion.div>

              {/* After tough entry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card className="kr-card-stroke h-full bg-[#FAF8F3] p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#B87D5C] px-3 py-1 text-xs text-white">
                      care moment
                    </span>
                  </div>
                  <p className="mb-4 text-[color:var(--ink)]/80 italic">
                    "That sounds heavy. Thank you for trusting me with it."
                  </p>
                  <p className="text-[color:var(--ink)]/80/70 text-xs">
                    validation before anything else
                  </p>
                </Card>
              </motion.div>

              {/* Button examples */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#D4DDD0] px-3 py-1 text-xs text-[color:var(--ink)]">
                      actions
                    </span>
                  </div>
                  <div className="space-y-3">
                    <button className="kr-btn-secondary w-full rounded-lg bg-[color:var(--sage-500)] px-4 py-2 text-sm text-white lowercase hover:bg-[color:var(--sage-600)]">
                      save reflection
                    </button>
                    <button className="kr-bg-eggshell kr-btn-secondary w-full rounded-lg px-4 py-2 text-sm text-[color:var(--ink)] lowercase hover:bg-[color:var(--clay-50)]">
                      maybe later
                    </button>
                  </div>
                  <p className="text-[color:var(--ink)]/80/70 mt-4 text-xs">
                    calm, gentle language
                  </p>
                </Card>
              </motion.div>

              {/* Error state */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                  <div className="mb-4">
                    <span className="inline-block rounded-full border-2 border-[color:var(--ink)] bg-[#C6837D] px-3 py-1 text-xs text-white">
                      if something goes wrong
                    </span>
                  </div>
                  <p className="mb-4 text-[color:var(--ink)]/80 italic">
                    "That didn't work just now. Let's try again in a moment."
                  </p>
                  <p className="text-[color:var(--ink)]/80/70 text-xs">no panic, just patience</p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="mx-auto max-w-2xl text-[color:var(--ink)]/80">
                Every interaction with{' '}
                <span className="inline-flex items-center gap-1">
                  <RoeLogo className="inline-block h-5" /> feels
                </span>{' '}
                like talking to someone who genuinely cares. No rush, no judgement - just
                understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Features - Bento Box Style */}
        <section id="support" className="kr-bg-eggshell relative overflow-hidden px-6 py-20">
          {/* Decorative illustration */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.06, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-20 left-10 hidden h-48 w-48 lg:block"
          >
            <BrandIllustration className="h-full w-full text-[#9CA896]" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-[color:var(--ink)]">
                <span className="relative inline-block">
                  <span className="inline-flex items-center gap-2">
                    What <RoeLogo className="inline-block h-8" /> helps with
                  </span>
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 h-3 w-full text-[color:var(--mist-500)] opacity-40" />
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-[color:var(--ink)]/80">
                From what you've told us, these are the things that might make the hard days a bit
                easier.
              </p>
            </motion.div>

            {/* Bento Grid for Support Features */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {/* Large Card - Spans 2 columns and 2 rows */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:col-span-2 md:row-span-2"
              >
                <div className="kr-card-stroke h-full rotate-[-1deg] overflow-hidden rounded-2xl hover:rotate-0">
                  <div className="kr-bg-eggshell relative flex h-96 flex-col justify-between p-8 md:h-full md:p-12">
                    <div>
                      <BookOpen className="mb-6 h-12 w-12 text-[color:var(--sage-500)]" />
                      <h3 className="mb-4 text-[color:var(--ink)]">
                        Document your child's journey
                      </h3>
                      <p className="mb-6 text-[color:var(--ink)]/80">
                        Keep track of what works, what doesn't, and those small moments that matter.
                        It's not about perfection - it's about understanding.
                      </p>
                    </div>
                    <div className="kr-card-stroke overflow-hidden rounded-xl">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGpvdXJuYWwlMjBub3RlYm9va3xlbnwxfHx8fDE3NjAzNjcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Journal for reflection"
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Medium Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="md:col-span-1 lg:col-span-2"
              >
                <div className="kr-card-stroke kr-bg-eggshell h-full rotate-[1deg] overflow-hidden rounded-2xl p-6 hover:rotate-0">
                  <FileText className="mb-4 h-8 w-8 text-[color:var(--ink)]" />
                  <h3 className="mb-3 text-[color:var(--ink)]">Make sense of the paperwork</h3>
                  <p className="text-[color:var(--ink)]/80">
                    EHCPs, Section F, statutory duties - we explain what it all means in plain
                    language, so you can focus on what matters.
                  </p>
                </div>
              </motion.div>

              {/* Tall Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-1 md:row-span-2"
              >
                <div className="kr-card-stroke h-full overflow-hidden rounded-2xl bg-[color:var(--gold-400)]">
                  <div className="flex h-full flex-col justify-between p-8">
                    <div>
                      <HandDrawnCircle className="mb-6 h-16 w-16 text-[color:var(--ink)] opacity-30" />
                      <h3 className="mb-3 text-[color:var(--ink)]">Spot patterns</h3>
                      <p className="mb-6 text-[color:var(--ink)]/90">
                        Sometimes triggers are obvious. Sometimes they're not.{' '}
                        <span className="inline-flex items-center gap-1">
                          <RoeLogo className="inline-block h-5 text-[color:var(--ink)]" /> helps
                        </span>{' '}
                        you notice connections you might have missed.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg border-2 border-[color:var(--ink)] bg-white/20 p-3 text-sm backdrop-blur-sm">
                        <p className="text-[color:var(--ink)]">
                          better mornings after quiet evenings
                        </p>
                      </div>
                      <div className="rounded-lg border-2 border-[color:var(--ink)] bg-white/20 p-3 text-sm backdrop-blur-sm">
                        <p className="text-[color:var(--ink)]">
                          meltdowns often before transitions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Wide Card with Color */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-2 lg:col-span-2"
              >
                <div className="kr-card-stroke h-full overflow-hidden rounded-2xl bg-[color:var(--mist-500)]">
                  <div className="flex h-full items-center justify-between p-8">
                    <div className="flex-1">
                      <h3 className="mb-3 text-[color:var(--ink)]">Prepare for meetings</h3>
                      <p className="mb-4 text-[color:var(--ink)]/90">
                        We can help you gather your thoughts, organize evidence, and feel more
                        confident walking into that EHCP review or school meeting.
                      </p>
                    </div>
                    <MessageCircle className="ml-4 h-20 w-20 flex-shrink-0 text-[color:var(--ink)]/20" />
                  </div>
                </div>
              </motion.div>

              {/* Small Square Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-1"
              >
                <div className="kr-card-stroke kr-bg-eggshell flex h-full items-center justify-center overflow-hidden rounded-2xl p-6">
                  <div className="text-center">
                    <Heart className="mx-auto mb-3 h-12 w-12 text-[color:var(--copper-500)]" />
                    <p className="text-sm text-[color:var(--ink)]/80">
                      always validating, never judging
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="border-y border-[color:var(--ink)]/15 bg-[#FAF8F3] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-[color:var(--ink)]">
                <span className="relative inline-block">
                  You're not alone
                  <HandDrawnUnderline className="absolute -bottom-2 left-0 h-3 w-full text-[#9CA896] opacity-40" />
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-[color:var(--ink)]/80">
                Here's what other families have shared about using{' '}
                <span className="inline-flex items-center gap-1">
                  <RoeLogo className="inline-block h-5" />
                </span>
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="kr-card-stroke kr-bg-eggshell h-full p-6">
                    <Heart className="mb-4 h-6 w-6 text-[color:var(--copper-500)]" />
                    <p className="mb-6 text-[color:var(--ink)]/80 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-[var(--font-weight-medium)] text-[color:var(--ink)]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[color:var(--ink)]/80">{testimonial.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="kr-bg-eggshell px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Decorative illustration in background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.04 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute -top-20 -right-20 hidden h-80 w-80 lg:block"
              >
                <BrandIllustration className="h-full w-full text-[color:var(--copper-500)]" />
              </motion.div>

              <div className="kr-card-stroke absolute inset-0 rotate-2 rounded-3xl bg-gradient-to-br from-[color:var(--sage-500)]/20 to-[color:var(--copper-500)]/20"></div>
              <Card className="kr-card-stroke kr-bg-eggshell relative rounded-3xl p-12 text-center">
                <div className="mx-auto max-w-2xl">
                  <h2 className="mb-4 text-[color:var(--ink)]">
                    You might want to{' '}
                    <span className="relative inline-block">
                      <span className="inline-flex items-center gap-2">
                        try <RoeLogo className="inline-block h-9" />
                      </span>
                      <HandDrawnUnderline className="absolute -bottom-2 left-0 h-3 w-full text-[#B8C5B3] opacity-50" />
                    </span>
                  </h2>
                  <p className="mb-8 text-[color:var(--ink)]/80">
                    It sounds like today has been really full. Maybe we could take a moment together
                    and see if{' '}
                    <span className="inline-flex items-center gap-1">
                      <RoeLogo className="inline-block h-5" /> can
                    </span>{' '}
                    help make things feel a bit lighter.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button className="kr-btn-secondary inline-flex items-center gap-1.5 bg-[color:var(--sage-500)] text-white lowercase hover:bg-[color:var(--sage-600)]">
                      <Heart className="h-4 w-4" />
                      open <RoeLogo className="inline-block h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="kr-btn-secondary text-[color:var(--ink)] lowercase hover:bg-[#D4DDD0]/50"
                    >
                      read more
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-3 border-[#1F1D1A] bg-[#1F1D1A] px-6 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4">
                  <KindlyRoeLogo className="h-8 text-white" />
                </div>
                <p className="text-sm text-gray-400">
                  A companion who listens, understands, and helps you feel a bit lighter.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-white">support</h4>
                <ul className="space-y-2 text-sm text-gray-400 lowercase">
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 transition-colors hover:text-[#E7C873]"
                    >
                      how <RoeLogo className="inline-block h-3.5" /> helps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      EHCP guidance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      understanding SEND
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-white">about</h4>
                <ul className="space-y-2 text-sm text-gray-400 lowercase">
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      our story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      privacy & safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      get in touch
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-white">community</h4>
                <ul className="space-y-2 text-sm text-gray-400 lowercase">
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      parent stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#E7C873]">
                      support groups
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              <p>
                © 2025 Kindly Roe. built with care for SEND families.{' '}
                <span className="inline-flex items-center gap-0.5">
                  <RoeLogo className="inline-block h-3.5" /> is
                </span>{' '}
                not a replacement for professional support.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

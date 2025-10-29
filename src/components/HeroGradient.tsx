// Using direct paths to public/images for better Netlify compatibility

export default function HeroGradient() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-gradient relative isolate min-h-[88vh] overflow-hidden text-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 pt-16 pb-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Left: Adult illustration */}
        <div className="mx-auto w-full max-w-lg lg:mx-0">
          <img
            src="/images/adult-hero.png"
            alt="An adult pausing to take stock"
            className="w-full h-auto select-none"
            loading="eager"
          />
        </div>

        {/* Right: Title + cards + Family art floated */}
        <div className="relative">
          <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Finding your way through the maze, together
          </h1>
          <p className="mt-3 sm:mt-4 text-inkMuted max-w-prose text-base sm:text-lg">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Families card */}
            <article className="rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm hover:shadow-md transition">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Families Navigating Support</h2>
                <p className="mt-1 text-sm text-stone">
                  Guide your child, log milestones, and find patterns so both can breathe easier.
                </p>
                <a
                  href="/families"
                  className="mt-4 inline-flex items-center rounded-xl px-5 py-3 text-white bg-teal-deep hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-pale focus-visible:ring-offset-2"
                >
                  Find family guidance
                </a>
              </div>
            </article>

            {/* Adults card */}
            <article className="rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm hover:shadow-md transition">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Adults Seeking Clarity</h2>
                <p className="mt-1 text-sm text-stone">
                  Navigate forms and feelings, and find your footing without the noise.
                </p>
                <a
                  href="/adults"
                  className="mt-4 inline-flex items-center rounded-xl px-5 py-3 text-white bg-copper hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-pale focus-visible:ring-offset-2"
                >
                  Explore adult support
                </a>
              </div>
            </article>
          </div>

          {/* Family illustration, floated to the right for the balanced "two halves" feel */}
          <img
            src="/images/family-hero.png"
            alt="A caring adult and child, hand in hand"
            className="pointer-events-none absolute right-0 top-2 hidden w-[46%] max-w-md lg:block"
          />
        </div>
      </div>
    </section>
  )
}

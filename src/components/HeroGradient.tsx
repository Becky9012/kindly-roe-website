// Using direct paths to public/images for better compatibility

export default function HeroGradient() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-gradient text-ink relative isolate min-h-[88vh] overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 pt-16 pb-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Left: Adult illustration */}
        <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[560px]">
          <img
            src="/images/adult-hero.png"
            alt="An adult pausing to take stock"
            className="h-auto w-full select-none"
            loading="eager"
          />
        </div>

        {/* Right: Title + cards + Family art floated */}
        <div className="relative flex h-full flex-col justify-center gap-8">
          <h1
            id="hero-heading"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Finding your way through the maze, together
          </h1>
          <p className="text-inkMuted mt-3 max-w-prose text-base sm:mt-4 sm:text-lg">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Families card */}
            <article className="rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur-sm transition hover:shadow-md">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Families Navigating Support</h2>
                <p className="text-stone mt-1 text-sm">
                  Guide your child, log milestones, and find patterns so both can breathe easier.
                </p>
                <a
                  href="/families"
                  className="bg-teal-deep focus-visible:ring-teal-pale mt-4 inline-flex items-center rounded-xl px-5 py-3 font-medium text-white hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  Find family guidance
                </a>
              </div>
            </article>

            {/* Adults card */}
            <article className="rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur-sm transition hover:shadow-md">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Adults Seeking Clarity</h2>
                <p className="text-stone mt-1 text-sm">
                  Navigate forms and feelings, and find your footing without the noise.
                </p>
                <a
                  href="/adults"
                  className="bg-copper focus-visible:ring-copper-pale mt-4 inline-flex items-center rounded-xl px-5 py-3 font-medium text-white hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
            className="pointer-events-none absolute top-1/2 right-0 hidden w-[44%] max-w-md -translate-y-1/2 lg:block"
          />
        </div>
      </div>

      {/* Smooth section handoff */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-b from-transparent to-[#F7F2EA]/80"></div>

      {/* Optional brand sparkle */}
      <div className="hero-noise"></div>
    </section>
  )
}

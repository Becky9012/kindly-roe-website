// Using direct paths to public/images for better Netlify compatibility

export default function HeroGradient() {
  return (
    <section aria-labelledby="hero-heading" className="text-ink relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="bg-[radial-gradient(70%_60%_at_20%_35%,#C97B47_0%,#E9C29E_28%,transparent_60%),radial-gradient(65%_55%_at_80%_40%,#1C7A77_0%,#9BC8C6_32%,transparent_62%),linear-gradient(#F7F2EA,#F7F2EA)] pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#00000010] [mask-image:radial-gradient(120%_120%_at_50%_40%,black,transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 lg:flex lg:items-start lg:gap-12 lg:px-8">
        {/* Left illustration */}
        <div className="mx-auto max-w-md lg:max-w-lg lg:mx-0 lg:w-[42%]">
          <img
            src="/images/adult-hero.png"
            alt="An adult pausing to take stock"
            className="w-full h-auto select-none"
          />
        </div>

        {/* Right column */}
        <div className="mt-10 lg:mt-2 lg:w-[58%]">
          <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Finding your way through the maze, together
          </h1>
          <p className="mt-3 sm:mt-4 text-inkMuted max-w-prose text-base sm:text-lg">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-8 flex flex-col-reverse lg:flex-row lg:items-start lg:gap-6">
            <div className="lg:flex-1 grid gap-6 sm:grid-cols-2">
              {/* Families card */}
              <article className="rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm hover:shadow-card transition">
                <div className="p-5">
                  <h2 className="font-serif text-xl text-ink">For Families</h2>
                  <p className="mt-1 text-sm text-stone">
                    Navigate together, spot patterns, and celebrate progress.
                  </p>
                  <a
                    href="/families"
                    className="mt-4 inline-flex items-center rounded-xl px-5 py-3 text-white bg-teal-deep hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-pale focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Start family journey
                  </a>
                </div>
              </article>

              {/* Adults card */}
              <article className="rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm hover:shadow-card transition">
                <div className="p-5">
                  <h2 className="font-serif text-xl text-ink">For Adults</h2>
                  <p className="mt-1 text-sm text-stone">
                    Reflect, find clarity, and take your next step.
                  </p>
                  <a
                    href="/adults"
                    className="mt-4 inline-flex items-center rounded-xl px-5 py-3 text-white bg-copper hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-pale focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Begin personal journey
                  </a>
                </div>
              </article>
            </div>

            <div className="mb-8 lg:mb-0 lg:w-[46%] lg:ml-auto">
              <img
                src="/images/family-hero.png"
                alt="A caring adult and child, hand in hand"
                className="w-full max-w-md h-auto ml-auto select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

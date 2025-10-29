// Using direct paths to public/images for better Netlify compatibility

export default function HeroGradient() {
  return (
    <section aria-labelledby="hero-heading" className="text-[#2B2A29] relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="bg-[radial-gradient(70%_60%_at_20%_35%,#C97B47_0%,#E9C29E_28%,transparent_60%),radial-gradient(65%_55%_at_80%_40%,#1C7A77_0%,#9BC8C6_32%,transparent_62%),linear-gradient(#F7F2EA,#F7F2EA)] pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#00000010] [mask-image:radial-gradient(120%_120%_at_50%_40%,black,transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-16 lg:flex lg:items-start lg:gap-12 lg:px-8">
        {/* Left illustration */}
        <div className="mx-auto max-w-md lg:mx-0 lg:w-[42%]">
          <img
            src="/images/adult-hero.png"
            alt="An adult pausing to take stock"
            className="h-auto w-full select-none"
          />
        </div>

        {/* Right column */}
        <div className="mt-10 lg:mt-2 lg:w-[58%]">
          <h1 id="hero-heading" className="font-serif text-4xl tracking-tight sm:text-5xl">
            Finding your way through the maze, together
          </h1>
          <p className="text-[#4A4743] mt-4 max-w-prose">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Families card */}
            <article className="bg-white/70 hover:shadow-md rounded-2xl border border-white/60 shadow-sm backdrop-blur-sm transition">
              <div className="p-5">
                <h2 className="text-[#2B2A29] font-serif text-xl">For Families</h2>
                <p className="text-[#595651] mt-1 text-sm">
                  Navigate together, spot patterns, and celebrate progress.
                </p>
                <a
                  href="/families"
                  className="bg-[#0D5C59] focus:ring-[#9BC8C6] focus:ring-offset-[#F7F2EA] mt-4 inline-flex items-center rounded px-4 py-2 font-medium text-white transition hover:brightness-95 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  Start family journey
                </a>
              </div>
            </article>

            {/* Adults card */}
            <article className="bg-white/70 hover:shadow-md rounded-2xl border border-white/60 shadow-sm backdrop-blur-sm transition">
              <div className="p-5">
                <h2 className="text-[#2B2A29] font-serif text-xl">For Adults</h2>
                <p className="text-[#595651] mt-1 text-sm">
                  Reflect, find clarity, and take your next step.
                </p>
                <a
                  href="/adults"
                  className="bg-[#B8744A] focus:ring-[#E9C29E] focus:ring-offset-[#F7F2EA] mt-4 inline-flex items-center rounded px-4 py-2 font-medium text-white transition hover:brightness-95 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  Begin personal journey
                </a>
              </div>
            </article>
          </div>

          {/* Optional second illustration, visible from sm+ */}
          <div className="mt-8 hidden sm:block">
            <img
              src="/images/family-hero.png"
              alt="A caring adult and child, hand in hand"
              className="ml-auto h-auto w-[360px] select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

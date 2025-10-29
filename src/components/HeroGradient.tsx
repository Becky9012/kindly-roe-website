import familyIllustration from '@/assets/family.png'
import girlIllustration from '@/assets/girl.png'

export default function HeroGradient() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden text-[#2B2A29]"
    >
      {/* Background gradient and soft vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(70%_60%_at_20%_35%,#C97B47_0%,#E9C29E_28%,transparent_60%),radial-gradient(65%_55%_at_80%_40%,#1C7A77_0%,#9BC8C6_32%,transparent_62%),linear-gradient(#F7F2EA,#F7F2EA)]" />
      
      <div className="pointer-events-none absolute inset-0 -z-10
        [mask-image:radial-gradient(120%_120%_at_50%_40%,black,transparent)]
        bg-[#00000010]" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-16 lg:flex lg:items-start lg:gap-12 lg:px-8">
        {/* Left illustration */}
        <div className="mx-auto max-w-md lg:mx-0 lg:w-[42%]">
          <img
            src={girlIllustration}
            alt="An adult pausing to take stock"
            className="h-auto w-full select-none"
          />
        </div>

        {/* Right column */}
        <div className="mt-10 lg:mt-2 lg:w-[58%]">
          <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl tracking-tight">
            Finding your way through the maze, together
          </h1>
          <p className="mt-4 max-w-prose text-[#4A4743]">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Families card */}
            <article className="rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm hover:shadow-md transition">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Families</h2>
                <p className="mt-1 text-sm text-[#595651]">
                  Navigate together, spot patterns, and celebrate progress.
                </p>
                <a href="/families"
                   className="mt-4 inline-flex items-center rounded-xl bg-[#0D5C59] px-4 py-2 text-white hover:brightness-95">
                  Start family journey
                </a>
              </div>
            </article>

            {/* Adults card */}
            <article className="rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm hover:shadow-md transition">
              <div className="p-5">
                <h2 className="font-serif text-xl">For Adults</h2>
                <p className="mt-1 text-sm text-[#595651]">
                  Reflect, find clarity, and take your next step.
                </p>
                <a href="/adults"
                   className="mt-4 inline-flex items-center rounded-xl bg-[#B8744A] px-4 py-2 text-white hover:brightness-95">
                  Begin personal journey
                </a>
              </div>
            </article>
          </div>

          {/* Optional second illustration, visible from sm+ */}
          <div className="mt-8 hidden sm:block">
            <img
              src={familyIllustration}
              alt="A caring adult and child, hand in hand"
              className="h-auto w-full max-w-md ml-auto select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

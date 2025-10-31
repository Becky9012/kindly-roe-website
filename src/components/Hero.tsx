import adultPng from '@/assets/hero/adult.png'
import familyPng from '@/assets/hero/family.png'

export default function Hero() {
  // Debug: Log the imported image URLs
  console.log('adultPng URL:', adultPng)
  console.log('familyPng URL:', familyPng)

  return (
    <section
      aria-label="Kindly Roe — a calm companion for SEND families"
      className="hero-section relative isolate pt-[var(--header-h,64px)] min-h-[calc(100svh-var(--header-h,64px))] md:min-h-[720px] lg:min-h-[820px] overflow-visible w-full"
    >
      {/* Background */}
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-8%] h-[40%] -z-10 bg-gradient-to-t from-[rgba(80,50,40,0.25)] via-transparent to-transparent"
      />

      {/* Left figure (adult) */}
      <img
        src={adultPng}
        alt="Adult illustration"
        className="max-md:hidden block absolute bottom-[3%] left-[-6vw] z-[30] w-[31vw] max-w-[460px] min-w-[260px] object-contain select-none pointer-events-none"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        onError={(e) => {
          console.error('Failed to load adult.png for desktop:', adultPng, 'Current src:', e.currentTarget.src)
        }}
        onLoad={(e) => {
          console.log('Adult image loaded! URL:', adultPng, 'Actual src:', e.currentTarget.src)
        }}
      />

      {/* Right figure (family) */}
      <img
        src={familyPng}
        alt="Family illustration"
        className="max-md:hidden block absolute bottom-[3%] right-[-6vw] z-[30] w-[33vw] max-w-[520px] min-w-[300px] object-contain select-none pointer-events-none"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        onError={(e) => {
          console.error('Failed to load family.png:', familyPng, 'Current src:', e.currentTarget.src)
        }}
        onLoad={(e) => {
          console.log('Family image loaded! URL:', familyPng, 'Actual src:', e.currentTarget.src)
        }}
      />

      {/* Mobile single figure */}
      <div className="md:hidden relative mx-auto mt-4 aspect-[3/4] w-[72%] z-[10]">
        <img
          src={adultPng}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain"
          onError={(e) => {
            console.error('Failed to load adult.png:', adultPng)
            console.error('Error event:', e)
          }}
          onLoad={() => {
            console.log('Successfully loaded adult.png:', adultPng)
          }}
        />
      </div>

      {/* Centre copy */}
      <div className="relative z-[40] mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pt-6 md:pt-10 lg:pt-12 text-center">
          <h1 className="font-semibold tracking-tight text-[color:var(--ink)] leading-tight text-[clamp(2rem,4.8vw,3.25rem)]">
            Finding Your Way Through the Maze, Together
          </h1>
          <p className="mt-3 text-[color:var(--ink)]/80 leading-relaxed text-[clamp(1rem,1.5vw,1.125rem)] max-w-[52ch] mx-auto">
            Two gentle paths. Choose what fits today.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/families"
              className="inline-flex items-center rounded-2xl bg-white/75 px-4 py-2 text-[color:var(--ink)] shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white"
            >
              For Families · Find guidance
            </a>
            <a
              href="/adults"
              className="inline-flex items-center rounded-2xl bg-white/75 px-4 py-2 text-[color:var(--ink)] shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white"
            >
              For Adults · Explore support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

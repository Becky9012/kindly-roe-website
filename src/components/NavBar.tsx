export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,250,0.6)] backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-[color:var(--ink)]">
          Kindly Roe
        </a>
        <nav className="hidden sm:flex gap-6 text-[color:var(--ink)]/80">
          <a href="#how" className="hover:text-[color:var(--ink)]">
            How it works
          </a>
          <a href="#helps" className="hover:text-[color:var(--ink)]">
            What Roe helps with
          </a>
          <a href="#services" className="hover:text-[color:var(--ink)]">
            Local services
          </a>
          <a href="#about" className="hover:text-[color:var(--ink)]">
            About
          </a>
        </nav>
      </div>
    </header>
  )
}


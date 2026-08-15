function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
        alt="Beautiful mountain landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-10">

        <div className="max-w-2xl text-white">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
            Discover India
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Find the India
            <br />
            you've never seen.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Discover hidden places, unforgettable experiences and
            destinations worth adding to your journey.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full bg-white px-7 py-3.5 font-medium text-slate-900 transition hover:bg-slate-100">
              Explore India
            </button>

            <button className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
              Plan Your Journey
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Destination Label */}
      <div className="absolute bottom-8 left-6 z-10 text-white lg:left-10">
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">
          Featured Destination
        </p>

        <p className="mt-1 text-lg font-medium">
          Himachal Pradesh
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-white/70 md:flex lg:right-10">
        <span className="text-xs uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <div className="h-10 w-px bg-white/50"></div>
      </div>

    </section>
  )
}

export default Hero
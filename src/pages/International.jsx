function International() {
  return (
    <main className="min-h-screen bg-[#F7F9F6]">

      {/* Hero */}
      <section className="px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-700">
            Beyond India
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-slate-800 md:text-7xl">
            The world is
            <br />
            waiting.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Discover international destinations, cultures and experiences
            worth travelling for — all at your own pace.
          </p>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2.5rem] bg-slate-800 px-7 py-14 text-white md:px-12 md:py-20">

            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Coming soon
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              International journeys,
              <br />
              coming to VOYARA.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              We're working on a curated collection of international
              destinations and experiences. Soon you'll be able to discover
              and plan journeys beyond India with VOYARA.
            </p>

          </div>

        </div>
      </section>

      {/* What to expect */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-700">
            What's coming
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-slate-800 md:text-5xl">
            A world of possibilities.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-2xl">🌏</p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Global destinations
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore carefully selected places across different parts of
                the world.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-2xl">🗺️</p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Thoughtful itineraries
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Build international trips around your interests, time and
                budget.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <p className="text-2xl">✈️</p>

              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Travel your way
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                From quick escapes to longer journeys, make every trip feel
                personal.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default International;
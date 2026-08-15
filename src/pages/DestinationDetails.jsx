function DestinationDetails() {
  return (
    <main className="min-h-screen bg-[#F7F9F6]">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">

        <img
          src="/images/destinations/meghalaya/meghalaya.jpg"
          alt="Meghalaya"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-10 lg:pb-20">

          <div className="max-w-3xl text-white">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
              Northeast India
            </p>

            <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
              Meghalaya
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Where clouds meet the hills, waterfalls hide in forests,
              and every road leads somewhere beautiful.
            </p>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_0.7fr]">

          {/* About */}
          <div>

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-700">
              Discover Meghalaya
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 md:text-5xl">
              A place that feels
              <br />
              untouched.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Meghalaya is known for its mist-covered hills, living root
              bridges, crystal-clear rivers and some of the most beautiful
              landscapes in Northeast India.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From quiet villages to dramatic waterfalls, it is the kind
              of destination where slowing down becomes part of the journey.
            </p>

          </div>

          {/* Quick Facts */}
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_12px_40px_rgba(30,41,59,0.05)]">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              At a glance
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <p className="text-sm text-slate-400">
                  Best for
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  Nature · Adventure · Slow Travel
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Ideal duration
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  5–7 days
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Best time
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  October – April
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Must Visit */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-700">
              Don't miss these
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-slate-800 md:text-5xl">
              Places worth the detour.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              These are the places that should be on every Meghalaya
              traveller's list.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                name: "Living Root Bridges",
                image: "/images/destinations/meghalaya/root-bridge.jpg",
                text: "Walk through one of nature's most fascinating creations.",
              },
              {
                name: "Dawki",
                image: "/images/destinations/meghalaya/dawki.jpg",
                text: "Crystal-clear waters surrounded by green hills.",
              },
              {
                name: "Shillong",
                image: "/images/destinations/meghalaya/shillong.jpg",
                text: "The lively hill capital surrounded by misty landscapes.",
              },
              {
                name: "Nongriat",
                image: "/images/destinations/meghalaya/nongriat.jpg",
                text: "A hidden village reached through a memorable trek.",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="group overflow-hidden rounded-[1.75rem] bg-[#F7F9F6]"
              >

                <div className="h-64 overflow-hidden">

                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-slate-800">
                    {place.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {place.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Experiences */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-700">
            Experience it
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-slate-800 md:text-5xl">
            More than places.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "🌿 Trek through living root bridges",
              "💧 Chase hidden waterfalls",
              "🛶 Explore the Dawki river",
              "🍛 Taste Khasi cuisine",
            ].map((experience) => (
              <div
                key={experience}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:border-green-700/30 hover:shadow-sm"
              >
                {experience}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Plan CTA */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-800 px-7 py-12 text-white md:px-12 md:py-16">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Ready to go?
              </p>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Make Meghalaya
                <br />
                your next story.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
                Build a trip around the places and experiences you
                actually want to discover.
              </p>

            </div>

            <button className="shrink-0 rounded-full bg-white px-7 py-3.5 font-medium text-slate-800 transition hover:bg-green-100">
              Plan this trip →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default DestinationDetails;
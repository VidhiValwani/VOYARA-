function About() {
  return (
    <main className="min-h-screen bg-[#F7F9F6]">

      {/* Hero */}
      <section className="px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#6B8E60]">
            About VOYARA
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#3E4D3A] md:text-7xl">
            Travel should feel
            <br />
            personal.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#6B8E60] md:text-lg">
            VOYARA helps travellers discover meaningful places, plan
            thoughtfully and build journeys around what they actually want
            to experience.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#6B8E60]">
              Why VOYARA
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3E4D3A] md:text-5xl">
              Beyond simply
              <br />
              booking a trip.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#6B8E60]">
            <p>
              We believe travel is more than choosing a destination and
              booking a ticket. It is about finding places that match your
              interests, your pace and the kind of memories you want to make.
            </p>

            <p>
              VOYARA brings destinations, experiences and trip planning
              together in one simple space, helping you move from inspiration
              to an actual journey.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#6B8E60]">
              What we believe
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#3E4D3A] md:text-5xl">
              Travel with intention.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">

              <p className="text-2xl">🌿</p>

              <h3 className="mt-6 text-xl font-semibold text-[#3E4D3A]">
                Discover differently
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Find places and experiences beyond the usual tourist trails.
              </p>

            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">

              <p className="text-2xl">🧭</p>

              <h3 className="mt-6 text-xl font-semibold text-[#3E4D3A]">
                Plan thoughtfully
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Build trips around your dates, interests, travellers and
                budget.
              </p>

            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">

              <p className="text-2xl">✨</p>

              <h3 className="mt-6 text-xl font-semibold text-[#3E4D3A]">
                Make it yours
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Your journey should reflect what you enjoy, not someone
                else's itinerary.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;
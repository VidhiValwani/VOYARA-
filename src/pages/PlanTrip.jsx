import TripPlanner from "../components/TripPlanner"

function PlanTrip() {
  return (
    <main className="min-h-screen bg-[#F7F9F6]">
      <section className="px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">

          {/* Page Heading */}
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-700">
              Your journey, your way
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-slate-800 md:text-7xl">
              Plan a trip
              <br />
              that feels like you.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Tell us where you want to go, when you want to travel and
              what you want to experience. We'll help you find the right
              journey.
            </p>
          </div>

          {/* Planner */}
          <TripPlanner />

        </div>
      </section>
    </main>
  )
}

export default PlanTrip
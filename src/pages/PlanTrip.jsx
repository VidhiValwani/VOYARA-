import TripPlanner from "../components/TripPlanner";

function PlanTrip() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F9F6]">
      <section className="w-full px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto w-full max-w-[1280px]">

          {/* Page Heading */}
          <div className="mb-12 max-w-3xl">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#6B8E60]">
              Your journey, your way
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-[#3E4D3A] md:text-7xl">
              Plan a trip
              <br />
              that feels like you.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B8E60] md:text-lg">
              Tell us where you want to go, when you want to travel and
              what you want to experience. We'll help you find the right
              journey.
            </p>

          </div>

          {/* Planner */}
          <div className="w-full min-w-0">
            <TripPlanner />
          </div>

        </div>
      </section>
    </main>
  );
}

export default PlanTrip;
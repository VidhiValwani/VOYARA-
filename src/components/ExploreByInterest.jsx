import mountainsImage from "../assets/images/experiences/mountains.jpg"
import spiritualImage from "../assets/images/experiences/spiritual.jpg"
import natureImage from "../assets/images/experiences/nature.jpg"
import heritageImage from "../assets/images/experiences/heritage.jpg"
import coastalImage from "../assets/images/experiences/coastal.jpg"
import wildlifeImage from "../assets/images/experiences/wildlife.jpg"

const interests = [
  {
    title: "Mountains",
    description: "Escape to quiet valleys and dramatic peaks.",
    image:mountainsImage,
  },
  {
    title: "Spiritual Journeys",
    description: "Find stillness in India's sacred places.",
    image:spiritualImage,
  },
  {
    title: "Hidden Nature",
    description: "Discover forests, rivers and places off the usual trail.",
    image:natureImage,
  },
  {
    title: "Heritage & History",
    description: "Walk through centuries of stories and architecture.",
    image:heritageImage,
  },
  {
    title: "Coastal Escapes",
    description: "Slow down beside India's beautiful coastline.",
    image:coastalImage,
  },
  {
    title: "Wildlife",
    description: "Step into the wild and meet India's incredible biodiversity.",
    image:wildlifeImage,
  },
]

function ExploreByInterest() {
  return (
    <section className="bg-[#F7F9F6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-700">
            Find your kind of journey
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-800 md:text-6xl">
            What brings
            <br />
            you here?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Whether you seek adventure, stillness, nature or history,
            discover destinations that match the way you want to travel.
          </p>
        </div>

        {/* Interest Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {interests.map((interest) => (
            <button
              key={interest.title}
              className="group relative h-[360px] overflow-hidden rounded-[2rem] text-left"
            >

              {/* Image */}
              <img
                src={interest.image}
                alt={interest.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">

                <h3 className="text-2xl font-semibold md:text-3xl">
                  {interest.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                  {interest.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                  Explore
                  <span className="transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>

            </button>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ExploreByInterest
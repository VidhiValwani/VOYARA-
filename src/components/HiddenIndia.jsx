import meghalaya from "../assets/images/destinations/meghalaya.jpg"
import varanasi from "../assets/images/destinations/varanasi.jpg"
import hampi from "../assets/images/destinations/hampi.jpg"
import munsiyari from "../assets/images/destinations/munsiyari.jpg"
import { Link } from "react-router-dom"

const destinations = [
  {
    name: "Meghalaya",
    slug: "meghalaya",
    type: "Hidden Nature",
    description: "Living root bridges, misty hills and crystal-clear rivers.",
    image: meghalaya,
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    type: "Spiritual Journey",
    description: "Ancient ghats, sacred rituals and timeless stories.",
    image: varanasi,
  },
  {
    name: "Hampi",
    slug: "hampi",
    type: "Heritage & History",
    description: "Ruins, temples and stories carved into the landscape.",
    image: hampi,
  },
  {
    name: "Munsiyari",
    slug: "munsiyari",
    type: "Mountain Escape",
    description: "Quiet Himalayan valleys far from the usual crowds.",
    image: munsiyari,
  },
]
function HiddenIndia() {
  return (
    <section className="bg-[#F7F9F6] px-6 pt-16 pb-4 lg:px-10 lg:pt-20 lg:pb-6">
      
      {/* Section Heading */}
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-700">
            Beyond the usual
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-800 md:text-6xl">
            Hidden India
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Discover places, stories and experiences that deserve
            to be known beyond the usual tourist trails.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {destinations.map((destination) => (
  <Link
    key={destination.name}
    to={`/destinations/${destination.slug}`}
    className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
  >

              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                    {destination.type}
                  </p>

                  <h3 className="text-2xl font-semibold">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-white/80">
                    {destination.description}
                  </p>
                </div>

              </div>

</Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default HiddenIndia
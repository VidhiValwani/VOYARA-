import { Link } from "react-router-dom";

import meghalaya from "../assets/images/destinations/meghalaya.jpg";
import varanasi from "../assets/images/destinations/varanasi.jpg";
import hampi from "../assets/images/destinations/hampi.jpg";
import munsiyari from "../assets/images/destinations/munsiyari.jpg";

const destinations = [
  {
    name: "Meghalaya",
    slug: "meghalaya",
    region: "Northeast",
    type: "Nature",
    duration: "5–7 days",
    image: meghalaya,
    description:
      "Misty hills, living root bridges and crystal-clear rivers.",
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    region: "North",
    type: "Spiritual",
    duration: "3–4 days",
    image: varanasi,
    description:
      "Ancient ghats, sacred rituals and timeless stories.",
  },
  {
    name: "Hampi",
    slug: "hampi",
    region: "South",
    type: "Heritage",
    duration: "3–4 days",
    image: hampi,
    description:
      "Ancient ruins, temples and stories carved into the landscape.",
  },
  {
    name: "Munsiyari",
    slug: "munsiyari",
    region: "North",
    type: "Mountains",
    duration: "4–6 days",
    image: munsiyari,
    description:
      "Quiet Himalayan valleys far from the usual tourist trails.",
  },
];

const regions = ["All", "North", "South", "East", "West", "Northeast"];

const types = [
  "All",
  "Mountains",
  "Nature",
  "Spiritual",
  "Heritage",
  "Beach",
  "Wildlife",
];

function DiscoverIndia() {
  return (
    <main className="min-h-screen bg-[#F7F9F6] px-6 pb-20 pt-32 lg:px-10">

      {/* Header */}
      <section className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-700">
            Explore beyond the obvious
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-800 md:text-7xl">
            Discover India.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Find places that match the way you want to travel — from
            quiet Himalayan escapes to ancient cities and spiritual journeys.
          </p>

        </div>

      </section>

      {/* Filters */}
      <section className="mx-auto mt-14 max-w-7xl">

        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_12px_40px_rgba(30,41,59,0.04)]">

          {/* Region */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Region
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    region === "All"
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-slate-300 text-slate-600 hover:border-green-700 hover:text-green-700"
                  }`}
                >
                  {region}
                </button>
              ))}

            </div>

          </div>

          {/* Travel Type */}
          <div className="mt-7 border-t border-slate-100 pt-7">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Travel style
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    type === "All"
                      ? "border-slate-800 bg-slate-800 text-white"
                      : "border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-800"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Destination Grid */}
      <section className="mx-auto mt-14 max-w-7xl">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm text-slate-400">
              Explore curated destinations
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-slate-800">
              Places to begin with
            </h2>
          </div>

          <p className="hidden text-sm text-slate-400 sm:block">
            {destinations.length} destinations
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              to={`/destinations/${destination.slug}`}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-[360px] overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {destination.region} · {destination.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-white/80">
                    {destination.description}
                  </p>

                  <p className="mt-4 text-xs text-white/60">
                    Ideal duration · {destination.duration}
                  </p>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}

export default DiscoverIndia;
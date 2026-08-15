import { useState } from "react";
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
    duration: 6,
    image: meghalaya,
    description:
      "Misty hills, living root bridges and crystal-clear rivers.",
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    region: "North",
    type: "Spiritual",
    duration: 4,
    image: varanasi,
    description:
      "Ancient ghats, sacred rituals and timeless stories.",
  },
  {
    name: "Hampi",
    slug: "hampi",
    region: "South",
    type: "Heritage",
    duration: 4,
    image: hampi,
    description:
      "Ancient ruins, temples and stories carved into the landscape.",
  },
  {
    name: "Munsiyari",
    slug: "munsiyari",
    region: "North",
    type: "Mountains",
    duration: 5,
    image: munsiyari,
    description:
      "Quiet Himalayan valleys far from the usual tourist trails.",
  },
];

const regions = [
  "All",
  "North",
  "South",
  "East",
  "West",
  "Northeast",
];

const types = [
  "All",
  "Mountains",
  "Nature",
  "Spiritual",
  "Heritage",
  "Beach",
  "Wildlife",
];

const durations = [
  "All",
  "Weekend",
  "3–5 days",
  "1 week",
];

function DiscoverIndia() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const filteredDestinations = destinations.filter((destination) => {
    const regionMatch =
      selectedRegion === "All" ||
      destination.region === selectedRegion;

    const typeMatch =
      selectedType === "All" ||
      destination.type === selectedType;

    let durationMatch = true;

    if (selectedDuration === "Weekend") {
      durationMatch = destination.duration <= 2;
    }

    if (selectedDuration === "3–5 days") {
      durationMatch =
        destination.duration >= 3 &&
        destination.duration <= 5;
    }

    if (selectedDuration === "1 week") {
      durationMatch =
        destination.duration >= 6 &&
        destination.duration <= 7;
    }

    return regionMatch && typeMatch && durationMatch;
  });

  const clearFilters = () => {
    setSelectedRegion("All");
    setSelectedType("All");
    setSelectedDuration("All");
  };

  const hasActiveFilter =
    selectedRegion !== "All" ||
    selectedType !== "All" ||
    selectedDuration !== "All";

  return (
    <main className="min-h-screen bg-[#F7F9F6] px-6 pb-20 pt-32 lg:px-10">

      {/* Header */}
      <section className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#6B8E60]">
            Explore beyond the obvious
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#3E4D3A] md:text-7xl">
            Discover India.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B8E60] md:text-lg">
            Find places that match the way you want to travel — from
            quiet Himalayan escapes to ancient cities and spiritual journeys.
          </p>

        </div>

      </section>

      {/* Filters */}
      <section className="mx-auto mt-14 max-w-7xl">

        <div className="rounded-[2rem] border border-[#A8C5B0]/70 bg-white p-6 shadow-[0_12px_40px_rgba(62,77,58,0.04)]">

          {/* Region */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B8E60]">
              Region
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedRegion === region
                      ? "border-[#6B8E60] bg-[#6B8E60] text-white"
                      : "border-[#A8C5B0] text-[#3E4D3A] hover:border-[#6B8E60] hover:text-[#6B8E60]"
                  }`}
                >
                  {region}
                </button>
              ))}

            </div>

          </div>

          {/* Travel Style */}
          <div className="mt-7 border-t border-[#A8C5B0]/40 pt-7">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B8E60]">
              Travel style
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedType === type
                      ? "border-[#3E4D3A] bg-[#3E4D3A] text-white"
                      : "border-[#A8C5B0] text-[#3E4D3A] hover:border-[#6B8E60] hover:text-[#6B8E60]"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>

          </div>

          {/* Duration */}
          <div className="mt-7 border-t border-[#A8C5B0]/40 pt-7">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B8E60]">
              Trip duration
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {durations.map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setSelectedDuration(duration)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedDuration === duration
                      ? "border-[#3E4D3A] bg-[#3E4D3A] text-white"
                      : "border-[#A8C5B0] text-[#3E4D3A] hover:border-[#6B8E60] hover:text-[#6B8E60]"
                  }`}
                >
                  {duration}
                </button>
              ))}

            </div>

          </div>

          {/* Active Filters */}
          {hasActiveFilter && (
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#A8C5B0]/40 pt-6">

              <span className="text-xs text-[#6B8E60]">
                Active filters:
              </span>

              {selectedRegion !== "All" && (
                <span className="rounded-full bg-[#A8C5B0]/30 px-3 py-1 text-xs text-[#3E4D3A]">
                  {selectedRegion}
                </span>
              )}

              {selectedType !== "All" && (
                <span className="rounded-full bg-[#D9E6F2] px-3 py-1 text-xs text-[#3E4D3A]">
                  {selectedType}
                </span>
              )}

              {selectedDuration !== "All" && (
                <span className="rounded-full bg-[#D9E6F2] px-3 py-1 text-xs text-[#3E4D3A]">
                  {selectedDuration}
                </span>
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto text-xs font-medium text-[#6B8E60] hover:text-[#3E4D3A]"
              >
                Clear all
              </button>

            </div>
          )}

        </div>

      </section>

      {/* Results */}
      <section className="mx-auto mt-14 max-w-7xl">

        <div className="mb-8 flex items-end justify-between">

          <div>

            <p className="text-sm text-[#6B8E60]">
              Explore curated destinations
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#3E4D3A]">
              Places to begin with
            </h2>

          </div>

          <p className="hidden text-sm text-[#6B8E60] sm:block">
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "destination"
              : "destinations"}
          </p>

        </div>

        {filteredDestinations.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {filteredDestinations.map((destination) => (

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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E4D3A]/80 via-[#3E4D3A]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                    <p className="text-xs uppercase tracking-[0.2em] text-[#D9E6F2]/80">
                      {destination.region} · {destination.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {destination.name}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-white/80">
                      {destination.description}
                    </p>

                    <p className="mt-4 text-xs text-[#D9E6F2]/80">
                      Ideal duration · {destination.duration} days
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="rounded-[2rem] bg-white px-6 py-20 text-center">

            <p className="text-lg font-medium text-[#3E4D3A]">
              No destinations found.
            </p>

            <p className="mt-2 text-sm text-[#6B8E60]">
              Try changing your filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#3E4D3A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6B8E60]"
            >
              Clear filters
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default DiscoverIndia;
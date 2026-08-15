import { Link } from "react-router-dom";

import nature from "../assets/images/experiences/nature.jpg";
import mountains from "../assets/images/experiences/mountains.jpg";
import heritage from "../assets/images/experiences/heritage.jpg";
import spiritual from "../assets/images/experiences/spiritual.jpg";
import coastal from "../assets/images/experiences/coastal.jpg";
import wildlife from "../assets/images/experiences/wildlife.jpg";

const experiences = [
  {
    name: "Nature",
    image: nature,
    description:
      "Slow down among forests, waterfalls, valleys and landscapes that invite you to breathe.",
    tags: ["Waterfalls", "Forests", "Lakes"],
  },
  {
    name: "Mountains",
    image: mountains,
    description:
      "Find quieter trails, mountain villages and views that make the journey worth taking.",
    tags: ["Trekking", "Hills", "Himalayas"],
  },
  {
    name: "Heritage",
    image: heritage,
    description:
      "Walk through ancient cities, forgotten ruins and stories shaped by centuries of history.",
    tags: ["Forts", "Temples", "History"],
  },
  {
    name: "Spiritual",
    image: spiritual,
    description:
      "Experience India's sacred spaces, rituals and traditions at your own pace.",
    tags: ["Ghats", "Temples", "Rituals"],
  },
  {
    name: "Coastal",
    image: coastal,
    description:
      "Discover quieter coastlines, fishing villages and slow days by the sea.",
    tags: ["Beaches", "Islands", "Sea"],
  },
  {
    name: "Wildlife",
    image: wildlife,
    description:
      "Step into India's forests and discover wildlife beyond the usual tourist trails.",
    tags: ["Safaris", "Forests", "Wildlife"],
  },
];

function Experiences() {
  return (
    <main className="min-h-screen bg-[#F7F9F6] px-6 pb-20 pt-32 lg:px-10">

      {/* Header */}
      <section className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#6B8E60]">
            Travel differently
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#3E4D3A] md:text-7xl">
            Experiences
            <br />
            worth travelling for.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B8E60] md:text-lg">
            Choose how you want to experience India — from quiet mountain
            mornings to ancient streets, wild forests and coastal escapes.
          </p>

        </div>

      </section>

      {/* Experience Grid */}
      <section className="mx-auto mt-16 max-w-7xl">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {experiences.map((experience) => (
            <Link
              key={experience.name}
              to={`/plan-trip?interest=${experience.name}`}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-[360px] overflow-hidden">

                <img
                  src={experience.image}
                  alt={experience.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3E4D3A]/80 via-[#3E4D3A]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <p className="text-xs uppercase tracking-[0.25em] text-[#D9E6F2]/80">
                    Experience
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold">
                    {experience.name}
                  </h2>

                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <p className="text-sm leading-6 text-[#6B8E60]">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F7F9F6] px-3 py-1.5 text-xs text-[#3E4D3A]"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="mt-7 flex items-center justify-between">

                  <span className="text-sm font-medium text-[#3E4D3A]">
                    Plan around this
                  </span>

                  <span className="text-lg text-[#6B8E60] transition group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="mx-auto mt-16 max-w-7xl">

        <div className="rounded-[2.5rem] bg-[#3E4D3A] px-7 py-12 text-white md:px-12 md:py-16">

          <p className="text-xs uppercase tracking-[0.25em] text-[#D9E6F2]/70">
            Build your journey
          </p>

          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <h2 className="text-4xl font-semibold md:text-5xl">
                You choose the experience.
                <br />
                VOYARA finds the way.
              </h2>

              <p className="mt-5 text-sm leading-6 text-[#F7F9F6]/75">
                Tell us what you want to experience, when you want to travel
                and how much you want to spend.
              </p>

            </div>

            <Link
              to="/plan-trip"
              className="shrink-0 rounded-full bg-[#F7F9F6] px-7 py-3.5 font-medium text-[#3E4D3A] transition hover:bg-[#D9E6F2]"
            >
              Plan a Trip →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Experiences;
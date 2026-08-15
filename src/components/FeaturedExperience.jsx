import { Link } from "react-router-dom";
import meghalayaImage from "../assets/images/destinations/meghalaya.jpg";

const featuredExperience = {
  name: "Meghalaya",
  tagline: "Where the clouds meet the hills.",
  description:
    "Discover living root bridges, misty hills, crystal-clear rivers and the quiet beauty of India's northeast.",

  mustVisit: ["Nongriat Living Root Bridge", "Dawki River", "Shillong"],

  experiences: [
    "Trek through living root bridges",
    "Explore hidden waterfalls",
    "Experience Khasi culture",
  ],

  bestFor: ["Nature", "Adventure", "Hidden Gems"],
};

function FeaturedExperience() {
  return (
    <section className="bg-[#F7F9F6] px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#6B8E60]">
            Go beyond the destination
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[#3E4D3A] md:text-6xl">
            Don't just visit.
            <br />
            Experience it.
          </h2>
        </div>

        {/* Main content */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[320px] lg:min-h-[500px]">

            <img
              src={meghalayaImage}
              alt={featuredExperience.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3E4D3A]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">

              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#D9E6F2]/80">
                Featured destination
              </p>

              <h3 className="text-4xl font-semibold md:text-5xl">
                {featuredExperience.name}
              </h3>

            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

            <p className="text-2xl font-medium leading-relaxed text-[#3E4D3A] md:text-3xl">
              {featuredExperience.tagline}
            </p>

            <p className="mt-5 max-w-xl leading-7 text-[#6B8E60]">
              {featuredExperience.description}
            </p>

            {/* Must Visit */}
            <div className="mt-10 border-t border-[#A8C5B0] pt-8">

              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8E60]">
                Must Visit
              </h4>

              <div className="mt-5 space-y-3">

                {featuredExperience.mustVisit.map((place, index) => (
                  <div
                    key={place}
                    className="flex items-center gap-4 text-[#3E4D3A]"
                  >
                    <span className="text-sm text-[#C7A76A]">
                      0{index + 1}
                    </span>

                    <span>{place}</span>
                  </div>
                ))}

              </div>
            </div>

            {/* Experiences */}
            <div className="mt-8 border-t border-[#A8C5B0] pt-8">

              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8E60]">
                Experience
              </h4>

              <div className="mt-5 space-y-3">

                {featuredExperience.experiences.map((experience) => (
                  <p
                    key={experience}
                    className="text-[#3E4D3A]"
                  >
                    {experience}
                  </p>
                ))}

              </div>
            </div>

            {/* Best for */}
            <div className="mt-8 border-t border-[#A8C5B0] pt-8">

              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8E60]">
                Best for
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">

                {featuredExperience.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#A8C5B0] bg-[#F7F9F6] px-4 py-2 text-sm text-[#3E4D3A]"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

            {/* CTA */}
            <Link
              to="/destinations/meghalaya"
              className="mt-5 inline-flex shrink-0 rounded-full bg-[#3E4D3A] px-7 py-3.5 font-medium text-[#F7F9F6] transition hover:bg-[#6B8E60]"
            >
              Explore Meghalaya →
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedExperience;
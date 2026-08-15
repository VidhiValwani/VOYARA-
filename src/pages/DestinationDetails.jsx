import { Link, useParams } from "react-router-dom";

import meghalaya from "../assets/images/destinations/meghalaya.jpg";
import varanasi from "../assets/images/destinations/varanasi.jpg";
import hampi from "../assets/images/destinations/hampi.jpg";
import munsiyari from "../assets/images/destinations/munsiyari.jpg";

import nature from "../assets/images/experiences/nature.jpg";
import coastal from "../assets/images/experiences/coastal.jpg";
import mountains from "../assets/images/experiences/mountains.jpg";
import heritage from "../assets/images/experiences/heritage.jpg";
import spiritual from "../assets/images/experiences/spiritual.jpg";

const destinations = {
  meghalaya: {
    name: "Meghalaya",
    region: "Northeast India",
    tagline: "Where clouds meet the hills.",
    description:
      "Meghalaya is known for mist-covered hills, living root bridges, crystal-clear rivers and some of the most beautiful landscapes in Northeast India.",
    descriptionTwo:
      "From quiet villages to dramatic waterfalls, it is the kind of destination where slowing down becomes part of the journey.",
    bestFor: "Nature · Adventure · Slow Travel",
    duration: "5–7 days",
    bestTime: "October – April",
    image: meghalaya,
    places: [
      {
        name: "Living Root Bridges",
        image: nature,
        text: "Walk through one of nature's most fascinating creations.",
      },
      {
        name: "Dawki",
        image: coastal,
        text: "Discover crystal-clear waters surrounded by green hills.",
      },
      {
        name: "Shillong",
        image: mountains,
        text: "Explore Meghalaya's lively hill capital and surrounding landscapes.",
      },
      {
        name: "Nongriat",
        image: nature,
        text: "Discover a hidden village surrounded by forests and waterfalls.",
      },
    ],
    experiences: [
      "🌿 Trek through living root bridges",
      "💧 Chase hidden waterfalls",
      "🛶 Explore the Dawki river",
      "🍛 Taste Khasi cuisine",
    ],
  },

  varanasi: {
    name: "Varanasi",
    region: "Uttar Pradesh · North India",
    tagline: "Where every morning feels timeless.",
    description:
      "Varanasi is a city of ancient ghats, sacred rituals, winding lanes and stories that have travelled through generations.",
    descriptionTwo:
      "From sunrise boat rides to evening Ganga Aarti, Varanasi offers an experience that is deeply connected to India's spiritual and cultural heritage.",
    bestFor: "Spiritual · Culture · Heritage",
    duration: "3–4 days",
    bestTime: "October – March",
    image: varanasi,
    places: [
      {
        name: "Dashashwamedh Ghat",
        image: spiritual,
        text: "Experience the energy of one of Varanasi's most iconic ghats.",
      },
      {
        name: "Ganga Aarti",
        image: spiritual,
        text: "Witness the evening ritual that lights up the riverfront.",
      },
      {
        name: "Assi Ghat",
        image: nature,
        text: "Start your morning slowly beside the Ganga.",
      },
      {
        name: "Old City",
        image: heritage,
        text: "Get lost in centuries-old lanes filled with colour, food and stories.",
      },
    ],
    experiences: [
      "🪔 Experience the Ganga Aarti",
      "🚣 Take a sunrise boat ride",
      "🥘 Explore local Banarasi food",
      "🏛️ Walk through the old city",
    ],
  },

  hampi: {
    name: "Hampi",
    region: "Karnataka · South India",
    tagline: "Ruins that still tell their stories.",
    description:
      "Hampi is a remarkable landscape of ancient temples, enormous boulders and ruins from the once-powerful Vijayanagara Empire.",
    descriptionTwo:
      "The best way to experience Hampi is slowly — walking through ruins, watching the light change across the landscape and discovering details hidden around every corner.",
    bestFor: "Heritage · History · Exploration",
    duration: "3–4 days",
    bestTime: "October – February",
    image: hampi,
    places: [
      {
        name: "Virupaksha Temple",
        image: heritage,
        text: "Explore one of Hampi's most important surviving temples.",
      },
      {
        name: "Vittala Temple",
        image: heritage,
        text: "Discover the famous stone architecture and musical pillars.",
      },
      {
        name: "Hampi Bazaar",
        image: heritage,
        text: "Walk through the historic marketplace near Virupaksha Temple.",
      },
      {
        name: "Matanga Hill",
        image: mountains,
        text: "Climb up for sweeping views across Hampi's landscape.",
      },
    ],
    experiences: [
      "🏛️ Explore ancient ruins",
      "🚲 Cycle through Hampi",
      "🌅 Watch the sunset from Matanga Hill",
      "📸 Discover hidden architectural details",
    ],
  },

  munsiyari: {
    name: "Munsiyari",
    region: "Uttarakhand · North India",
    tagline: "A quieter side of the Himalayas.",
    description:
      "Munsiyari is a peaceful Himalayan destination surrounded by mountain landscapes, forests and quiet valleys.",
    descriptionTwo:
      "Far from crowded tourist routes, Munsiyari is ideal for travellers looking for slower days, mountain walks and expansive Himalayan views.",
    bestFor: "Mountains · Nature · Slow Travel",
    duration: "4–6 days",
    bestTime: "March – June · October – November",
    image: munsiyari,
    places: [
      {
        name: "Panchachuli Peaks",
        image: mountains,
        text: "Take in the dramatic views of the Panchachuli mountain range.",
      },
      {
        name: "Khaliya Top",
        image: mountains,
        text: "Trek through alpine landscapes with spectacular mountain views.",
      },
      {
        name: "Birthi Falls",
        image: nature,
        text: "Stop by this impressive waterfall surrounded by greenery.",
      },
      {
        name: "Munsiyari Village",
        image: nature,
        text: "Slow down and experience the peaceful mountain settlement.",
      },
    ],
    experiences: [
      "🥾 Trek through Himalayan trails",
      "🏔️ Watch the Panchachuli peaks",
      "🌲 Explore quiet mountain forests",
      "☕ Enjoy slow mornings in the hills",
    ],
  },
};

function DestinationDetails() {
  const { slug } = useParams();

  const destination = destinations[slug];

  if (!destination) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F9F6] px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-green-700">
            Destination not found
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-slate-800">
            We couldn't find this place.
          </h1>

          <Link
            to="/"
            className="mt-7 inline-block rounded-full bg-slate-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F9F6]">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">

        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl text-white">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
              {destination.region}
            </p>

            <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              {destination.tagline}
            </p>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_0.7fr]">

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-700">
              Discover {destination.name}
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-800 md:text-5xl">
              A place worth
              <br />
              slowing down for.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              {destination.description}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              {destination.descriptionTwo}
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
                  {destination.bestFor}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Ideal duration
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {destination.duration}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Best time
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {destination.bestTime}
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
              A few places to start exploring {destination.name}.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {destination.places.map((place) => (
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

            {destination.experiences.map((experience) => (
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
                Make {destination.name}
                <br />
                your next story.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
                Build a trip around the places and experiences you actually
                want to discover.
              </p>

            </div>

            <Link
              to="/plan-trip"
              className="shrink-0 rounded-full bg-white px-7 py-3.5 font-medium text-slate-800 transition hover:bg-green-100"
            >
              Plan this trip →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default DestinationDetails;
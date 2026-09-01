import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero/hero.jpg";

function Hero() {
  return (
    <section className="relative mt-20 min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
     <img
  src={heroImage}
  alt="Misty mountain road through the Himalayas"
  className="absolute inset-0 h-full w-full object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3E4D3A]/45"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl text-white">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#D9E6F2]">
            Discover India
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Find the India
            <br />
            you've never seen.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
            Discover hidden places, unforgettable experiences and destinations
            worth adding to your journey.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/discover-india"
              className="rounded-full bg-[#F7F9F6] px-7 py-3.5 font-medium text-[#3E4D3A] transition hover:bg-[#D9E6F2]"
            >
              Explore India
            </Link>

            <Link
              to="/plan-trip"
              className="rounded-full border border-[#A8C5B0]/70 bg-[#3E4D3A]/30 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition hover:bg-[#6B8E60]/60"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Destination Label */}
      <div className="absolute bottom-8 left-6 z-10 text-white lg:left-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9E6F2]/80">
          Featured Destination
        </p>

        <p className="mt-1 text-lg font-medium">Himachal Pradesh</p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[#D9E6F2]/80 md:flex lg:right-10">
        <span className="text-xs uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <div className="h-10 w-px bg-[#A8C5B0]/70"></div>
      </div>
    </section>
  );
}

export default Hero;

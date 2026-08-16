import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3E4D3A] px-6 py-14 text-white lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-[0.25em]">
              VOYARA
            </Link>

            <p className="mt-2 text-sm italic text-[#D9E6F2]/80">
              Where the journey feels their aura.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#F7F9F6]/70">
              Discover meaningful places, thoughtful experiences and journeys
              worth remembering.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9E6F2]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                to="/discover-india"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                Discover India
              </Link>

              <Link
                to="/experiences"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                Experiences
              </Link>

              <Link
                to="/plan-trip"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                Plan a Trip
              </Link>

              <Link
                to="/international"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                International
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9E6F2]">
              VOYARA
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                to="/about"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/login"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-sm text-[#F7F9F6]/70 transition hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Keep Exploring */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D9E6F2]/70">
              Keep exploring
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              There’s always another
              <br />
              story waiting to be found.
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#F7F9F6]/65">
              Discover differently.
              <br />
              Travel thoughtfully.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#F7F9F6]/50">
            © 2026 VOYARA. All rights reserved.
          </p>

          <p className="text-xs text-[#F7F9F6]/50">
            Made for travellers who want to discover differently.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

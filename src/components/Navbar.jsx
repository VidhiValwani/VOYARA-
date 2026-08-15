import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="text-2xl font-semibold tracking-[0.25em] text-slate-800">
          VOYARA
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-700 transition hover:text-green-700">
            Home
          </a>

          <a href="#" className="text-sm font-medium text-slate-700 transition hover:text-green-700">
            Discover India
          </a>

          <a href="#" className="text-sm font-medium text-slate-700 transition hover:text-green-700">
            Experiences
          </a>

         <Link
  to="/plan-trip"
  className="text-sm font-medium text-slate-700 transition hover:text-green-700"
>
  Plan a Trip
</Link>

          <a href="#" className="text-sm font-medium text-slate-700 transition hover:text-green-700">
            International
          </a>

          <a href="#" className="text-sm font-medium text-slate-700 transition hover:text-green-700">
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
            Login
          </button>

          <button className="rounded-full bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-2xl text-slate-800 md:hidden">
          ☰
        </button>

      </div>
    </nav>
  )
}

export default Navbar
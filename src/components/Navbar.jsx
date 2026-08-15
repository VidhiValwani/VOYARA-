import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#A8C5B0]/40 bg-[#F7F9F6]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-semibold tracking-[0.25em] text-[#3E4D3A]"
        >
          VOYARA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            Home
          </Link>

          <Link
            to="/discover-india"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            Discover India
          </Link>

          <Link
            to="/experiences"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            Experiences
          </Link>

          <Link
            to="/plan-trip"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            Plan a Trip
          </Link>

          <Link
            to="/international"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            International
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            About
          </Link>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/login"
            className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#3E4D3A] px-5 py-2.5 text-sm font-medium text-[#F7F9F6] transition hover:bg-[#6B8E60]"
          >
            Sign Up
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-2xl text-[#3E4D3A] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#A8C5B0]/50 bg-[#F7F9F6] px-6 py-6 shadow-lg md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              Home
            </Link>

            <Link
              to="/discover-india"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              Discover India
            </Link>

            <Link
              to="/experiences"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              Experiences
            </Link>

            <Link
              to="/plan-trip"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              Plan a Trip
            </Link>

            <Link
              to="/international"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              International
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              About
            </Link>

            {/* Divider */}
            <div className="my-1 border-t border-[#A8C5B0]" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="text-sm font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="w-full rounded-full bg-[#3E4D3A] px-5 py-3 text-center text-sm font-medium text-[#F7F9F6] transition hover:bg-[#6B8E60]"
            >
              Sign Up
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
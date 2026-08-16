import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-[#6B8E60]"
        : "text-[#3E4D3A] hover:text-[#6B8E60]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-[#6B8E60]"
        : "text-[#3E4D3A] hover:text-[#6B8E60]"
    }`;

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

          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/discover-india" className={navClass}>
            Discover India
          </NavLink>

          <NavLink to="/experiences" className={navClass}>
            Experiences
          </NavLink>

          <NavLink to="/plan-trip" className={navClass}>
            Plan a Trip
          </NavLink>

          <NavLink to="/international" className={navClass}>
            International
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          <NavLink to="/login" className={navClass}>
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-[#6B8E60] text-[#F7F9F6]"
                  : "bg-[#3E4D3A] text-[#F7F9F6] hover:bg-[#6B8E60]"
              }`
            }
          >
            Sign Up
          </NavLink>

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

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/discover-india"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Discover India
            </NavLink>

            <NavLink
              to="/experiences"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Experiences
            </NavLink>

            <NavLink
              to="/plan-trip"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Plan a Trip
            </NavLink>

            <NavLink
              to="/international"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              International
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              About
            </NavLink>

            <div className="my-1 border-t border-[#A8C5B0]" />

            <NavLink
              to="/login"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                  isActive
                    ? "bg-[#6B8E60] text-[#F7F9F6]"
                    : "bg-[#3E4D3A] text-[#F7F9F6] hover:bg-[#6B8E60]"
                }`
              }
            >
              Sign Up
            </NavLink>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
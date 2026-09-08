import { useContext, useEffect } from "react";
import useTravel from "../hooks/useTravel";
import ThemeContext from "../context/ThemeContext";

function HooksDemo() {
  // Context API
  const {
    travellerName,
    trips,
    tripDetails,
    // updateTripDetails,
  } = useTravel();

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Group offer based on number of travellers
  const offerMessage =
    tripDetails.travellers >= 5
      ? "🎉 Group Offer Unlocked — 10% OFF"
      : tripDetails.travellers >= 3
        ? "🎉 Group Offer Unlocked — 5% OFF"
        : "Add more travellers to unlock a group offer.";

  // useEffect
  // Updates browser tab title whenever traveller count changes
  useEffect(() => {
    document.title = `VOYARA | ${tripDetails.travellers} Traveller${
      tripDetails.travellers > 1 ? "s" : ""
    }`;
  }, [tripDetails.travellers]);

  // New user detection
  const isNewUser = trips === 0;

  // Loyalty offer based on previous trips
  const loyaltyOffer =
    trips >= 5
      ? "✨ Loyalty Offer — 10% OFF"
      : trips >= 3
        ? "✨ Returning Traveller — 5% OFF"
        : "Book more trips to unlock a loyalty offer.";

  return (
    <main
      className={`min-h-screen px-6 py-16 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#1F291D] text-[#F7F9F6]"
          : "bg-[#F7F9F6] text-[#3E4D3A]"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#6B8E60]">
            React Hooks
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            VOYARA Hooks Demo
          </h1>

          <p className="mt-4 max-w-2xl text-[#6B8E60]">
            A practical demonstration of useState, useEffect, useContext and
            reusable custom hooks.
          </p>
        </div>

        {/* ================= THEME ================= */}
        <section
          className={`mb-6 rounded-[2rem] p-7 shadow-sm ${
            theme === "dark" ? "bg-[#3E4D3A]" : "bg-white"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#6B8E60]">
            Theme
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </h2>

            <button
              onClick={toggleTheme}
              className="rounded-full bg-[#3E4D3A] px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Switch Theme
            </button>
          </div>
        </section>

        {/* ================= NEW USER ================= */}
        <section
          className={`mb-6 rounded-[2rem] p-7 shadow-sm ${
            theme === "dark" ? "bg-[#3E4D3A]" : "bg-white"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#6B8E60]">
            Welcome Offer
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Welcome, {travellerName}! 👋
          </h2>

          <p className="mt-3">
            {isNewUser
              ? "🎁 New User Offer — 10% OFF on your first trip!"
              : "You are already a returning VOYARA traveller."}
          </p>
        </section>

        {/* ================= COUNTERS ================= */}
        <div className="grid items-stretch gap-6 md:grid-cols-2">

          {/* ---------- Traveller Counter ---------- */}
          <section
            className={`rounded-[2rem] p-7 shadow-sm ${
              theme === "dark" ? "bg-[#3E4D3A]" : "bg-white"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6B8E60]">
              Trip Planning
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Number of Travellers
            </h2>

            {/* <div className="mt-6 flex items-center justify-center gap-6">
              <button
                onClick={() =>
                  updateTripDetails({
                    travellers: Math.max(
                      1,
                      tripDetails.travellers - 1
                    ),
                  })
                }
                disabled={tripDetails.travellers <= 1}
                className="h-12 w-12 rounded-full border border-[#A8C5B0] text-xl transition hover:bg-[#F7F9F6] disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <span className="text-4xl font-semibold">
                {tripDetails.travellers}
              </span>

              <button
                onClick={() =>
                  updateTripDetails({
                    travellers: tripDetails.travellers + 1,
                  })
                }
                className="h-12 w-12 rounded-full border border-[#A8C5B0] text-xl transition hover:bg-[#F7F9F6]"
              >
                +
              </button>
            </div> */}
            <div className="mt-6 flex items-center justify-center">
  <span className="text-4xl font-semibold">
    {tripDetails.travellers}
  </span>
</div>

            <p className="mt-5 text-center text-[#6B8E60]">
              {offerMessage}
            </p>
          </section>

          {/* ---------- Trip Counter ---------- */}
          <section
            className={`rounded-[2rem] p-7 shadow-sm ${
              theme === "dark" ? "bg-[#3E4D3A]" : "bg-white"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#6B8E60]">
              Travel History
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Your VOYARA Trips
            </h2>

            {/* Trips update automatically after booking */}
            <div className="mt-6 flex items-center justify-center">
              <span className="text-4xl font-semibold">
                {trips}
              </span>
            </div>

            <p className="mt-5 text-center text-[#6B8E60]">
              {loyaltyOffer}
            </p>

            {/* ================= SHARED TRIP STATE ================= */}
            <div className="mt-6 rounded-2xl border border-[#A8C5B0] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B8E60]">
                Shared Trip State
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <strong>Destination:</strong>{" "}
                  {tripDetails.destination || "No trip planned yet"}
                </p>

                <p>
                  <strong>Travel Dates:</strong>{" "}
                  {tripDetails.startDate && tripDetails.endDate
                    ? `${tripDetails.startDate} — ${tripDetails.endDate}`
                    : "Not selected"}
                </p>

                <p>
                  <strong>Travellers:</strong>{" "}
                  {tripDetails.travellers}
                </p>

                <p>
                  <strong>Budget:</strong>{" "}
                  ₹{tripDetails.budget.toLocaleString("en-IN")}
                </p>

                <p>
                  <strong>Interests:</strong>{" "}
                  {tripDetails.interests.length > 0
                    ? tripDetails.interests.join(", ")
                    : "None selected"}
                </p>
              </div>
            </div>
          </section>
        </div>

            
          </div>
  
    </main>
  );
}

export default HooksDemo;
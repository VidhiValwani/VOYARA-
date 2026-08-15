import { useState } from "react";

function TripPlanner() {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(50000);
  const [tripMessage, setTripMessage] = useState("");
  const [tripSearched, setTripSearched] = useState(false);

  const handleFindTrip = () => {
    if (!destination) {
      setTripMessage("Please choose a destination.");
      setTripSearched(false);
      return;
    }

    if (!startDate || !endDate) {
      setTripMessage("Please select your travel dates.");
      setTripSearched(false);
      return;
    }

    if (selectedInterests.length === 0) {
      setTripMessage("Please choose at least one travel interest.");
      setTripSearched(false);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (duration > 14) {
      setTripMessage("Your trip is longer than the current 14-day limit.");
      setTripSearched(false);
      return;
    }

    setTripMessage("");
    setTripSearched(true);
  };
  const destinations = ["Meghalaya", "Varanasi", "Hampi", "Munsiyari"];
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const getMaxEndDate = () => {
    if (!startDate) return "";

    const date = new Date(startDate);
    date.setDate(date.getDate() + 14);

    return date.toISOString().split("T")[0];
  };

  const interests = [
    "Nature",
    "Spiritual",
    "Adventure",
    "Heritage",
    "Beach",
    "Wildlife",
  ];

  return (
    <div className="grid w-full min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.65fr)]">
      {/* Planner Form */}
      <div className="w-full min-w-0 rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_12px_40px_rgba(30,41,59,0.05)] md:p-9">
        {/* Destination */}
        <div>
          <label className="text-sm font-medium text-slate-700">
            Where do you want to go?
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => setDestinationOpen(!destinationOpen)}
              className="mt-3 flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-[#FBFCFA] px-5 py-4 text-left text-slate-700 transition hover:border-green-700/40 hover:bg-white"
            >
              <span>{destination || "Choose a destination"}</span>

              <span
                className={`transition ${destinationOpen ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            {destinationOpen && (
              <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                {destinations.map((place) => (
                  <button
                    key={place}
                    type="button"
                    onClick={() => {
                      setDestination(place);
                      setDestinationOpen(false);
                    }}
                    className="block w-full px-5 py-3 text-left text-sm text-slate-700 transition hover:bg-[#F5F8F3] hover:text-green-700"
                  >
                    {place}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dates */}
        <div className="mt-8">
          <label className="text-sm font-medium text-slate-700">
            When would you like to travel?
          </label>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {/* From */}
            <label className="rounded-2xl border border-slate-200 bg-[#FBFCFA] px-5 py-3 transition focus-within:border-green-700/40">
              <span className="block text-xs uppercase tracking-wider text-slate-400">
                From
              </span>

              <input
                type="date"
                min={getTodayDate()}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);

                  if (endDate && new Date(endDate) < new Date(e.target.value)) {
                    setEndDate("");
                  }
                }}
                className="mt-1 w-full bg-transparent text-slate-700 outline-none"
              />
            </label>

            {/* To */}
            <label className="rounded-2xl border border-slate-200 bg-[#FBFCFA] px-5 py-3 transition focus-within:border-green-700/40">
              <span className="block text-xs uppercase tracking-wider text-slate-400">
                To
              </span>

              <input
                type="date"
                min={startDate || getTodayDate()}
                max={getMaxEndDate()}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 w-full bg-transparent text-slate-700 outline-none"
              />

              {startDate && (
                <p className="mt-2 text-xs text-slate-400">
                  Trips can currently be planned for up to 14 days.
                </p>
              )}
            </label>
          </div>
        </div>

        {/* Travellers */}
        <div className="mt-8">
          <label className="text-sm font-medium text-slate-700">
            Who's travelling?
          </label>

          <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-[#FBFCFA] px-5 py-4">
            <span className="text-slate-700">Travellers</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTravellers(Math.max(1, travellers - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition hover:border-green-700 hover:text-green-700"
              >
                −
              </button>

              <span className="font-medium text-slate-800">{travellers}</span>

              <button
                type="button"
                onClick={() => setTravellers(travellers + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition hover:border-green-700 hover:text-green-700"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-8">
          <label className="text-sm font-medium text-slate-700">
            What are you looking for?
          </label>

          <div className="mt-3 flex flex-wrap gap-3">
            {interests.map((interest) => {
              const isSelected = selectedInterests.includes(interest);

              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => {
                    setSelectedInterests((current) =>
                      isSelected
                        ? current.filter((item) => item !== interest)
                        : [...current, interest],
                    );
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isSelected
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-slate-300 text-slate-600 hover:border-green-700 hover:text-green-700"
                  }`}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget */}
        <div className="mt-8">
          <label className="text-sm font-medium text-slate-700">
            Approximate budget
          </label>

          <input
            type="range"
            min="5000"
            max="100000"
            step="5000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="mt-5 w-full accent-green-700"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>₹{budget.toLocaleString("en-IN")}</span>
            <span>₹1,00,000+</span>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleFindTrip}
          className="mt-10 w-full rounded-full bg-slate-800 px-7 py-4 font-medium text-white transition hover:bg-green-700"
        >
          Find My Trip →
        </button>
        {tripMessage && (
          <p className="mt-4 text-center text-sm text-red-600">{tripMessage}</p>
        )}
      </div>

      {/* Feasibility Panel */}
      <aside className="w-full min-w-0 rounded-[2rem] bg-slate-800 p-7 text-white md:p-9">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          Smart travel window
        </p>

        <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
          Plan around what's actually possible.
        </h2>

        <p className="mt-5 text-sm leading-6 text-white/65">
          VOYARA can help you understand when your trip is realistically
          bookable based on travel availability, seasonality and your selected
          dates.
        </p>

        {/* Example Result */}
        <div className="mt-10 border-t border-white/15 pt-7">
          {tripSearched ? (
            <>
              <p className="text-xs uppercase tracking-wider text-white/45">
                Your trip
              </p>

              <p className="mt-3 text-lg font-medium">{destination}</p>

              <p className="mt-2 text-white/70">
                {startDate} — {endDate}
              </p>

              <p className="mt-4 text-sm text-white/60">
                {travellers} {travellers === 1 ? "traveller" : "travellers"} · ₹
                {budget.toLocaleString("en-IN")}
              </p>
            </>
          ) : (
            <>
              <p className="text-xs uppercase tracking-wider text-white/45">
                Your trip
              </p>

              <p className="mt-3 text-lg font-medium">Ready when you are.</p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Select your destination, dates and interests to see your trip
                summary here.
              </p>
            </>
          )}
        </div>

        {/* Booking Insight */}
        <div className="mt-7 border-t border-white/15 pt-7">
          <p className="text-xs uppercase tracking-wider text-white/45">
            Booking insight
          </p>

          <p className="mt-3 text-sm leading-6 text-white/70">
            We'll help you plan around booking availability, travel season and
            your selected dates.
          </p>
        </div>
      </aside>
    </div>
  );
}

export default TripPlanner;

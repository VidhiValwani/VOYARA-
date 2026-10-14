import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useTravel from "../hooks/useTravel";

function TripPlanner() {
  const [searchParams] = useSearchParams();

  const { addTrip, trips, updateTripDetails } = useTravel();

  const destinationFromUrl = searchParams.get("destination");
  const interestFromUrl = searchParams.get("interest");

  const interests = [
    "Nature",
    "Spiritual",
    "Adventure",
    "Heritage",
    "Beach",
    "Wildlife",
  ];

  const destinations = ["Meghalaya", "Varanasi", "Hampi", "Munsiyari"];

  const initialInterest =
    interestFromUrl && interests.includes(interestFromUrl)
      ? [interestFromUrl]
      : [];

  const initialDestination =
    destinationFromUrl &&
    destinations.includes(
      destinationFromUrl.charAt(0).toUpperCase() + destinationFromUrl.slice(1),
    )
      ? destinationFromUrl.charAt(0).toUpperCase() + destinationFromUrl.slice(1)
      : "";

  const [destination, setDestination] = useState(initialDestination);
  const [destinationOpen, setDestinationOpen] = useState(false);

  const [travellers, setTravellers] = useState(2);
  const [selectedInterests, setSelectedInterests] = useState(initialInterest);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [budget, setBudget] = useState(50000);

  const [tripMessage, setTripMessage] = useState("");
  const [tripSearched, setTripSearched] = useState(false);

  // NEW: prevents the same planned trip from being counted twice
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

  const getTripDuration = () => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

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

    const duration = getTripDuration();

    if (duration < 1) {
      setTripMessage("Your end date must be after your start date.");
      setTripSearched(false);
      return;
    }

    if (duration > 14) {
      setTripMessage("Your trip is longer than the current 14-day limit.");
      setTripSearched(false);
      return;
    }

 updateTripDetails({
  destination,
  startDate,
  endDate,
  travellers,
  budget,
  interests: selectedInterests,
});

setTripMessage("");
setTripSearched(true);
setBookingConfirmed(false);
};
  const groupDiscount = travellers >= 5 ? 10 : travellers >= 3 ? 5 : 0;
  const personalOffer =
    trips === 0
      ? "🎁 New Traveller Offer — 10% OFF"
      : trips >= 5
        ? "✨ Loyalty Offer — 10% OFF"
        : trips >= 3
          ? "✨ Returning Traveller Offer — 5% OFF"
          : "Welcome back to VOYARA.";

  {
    /* Personal Offer */
  }
  <div className="mt-4 rounded-2xl bg-[#D9E6F2]/15 p-4">
    <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
      Your Special Offer
    </p>

    <p className="mt-2 text-sm font-medium text-white">{personalOffer}</p>
  </div>;
  // NEW: confirm booking and automatically increase trip count
const handleConfirmBooking = async () => {
  if (bookingConfirmed) return;

  try {
    const token = localStorage.getItem("token");

const response = await fetch(
  "https://voyara-backend-bvcf.onrender.com/api/trips",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
      body: JSON.stringify({
        destination,
        startDate,
        endDate,
        travellers,
        budget,
        interests: selectedInterests,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save trip");
    }

    await response.json();

    addTrip();
    setBookingConfirmed(true);
  } catch (error) {
    console.error("Booking error:", error);
    setTripMessage("Unable to save your trip. Please try again.");
  }
};

  return (
    <div className="grid w-full min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.65fr)]">
      {/* Planner Form */}
      <div className="w-full min-w-0 rounded-[2rem] border border-[#A8C5B0]/60 bg-white p-6 shadow-[0_12px_40px_rgba(62,77,58,0.06)] md:p-9">
        {/* Destination */}
        <div>
          <label className="text-sm font-medium text-[#3E4D3A]">
            Where do you want to go?
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => setDestinationOpen(!destinationOpen)}
              className="mt-3 flex w-full items-center justify-between rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-4 text-left text-[#3E4D3A] transition hover:border-[#6B8E60] hover:bg-white"
            >
              <span>{destination || "Choose a destination"}</span>

              <span
                className={`transition ${destinationOpen ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            {destinationOpen && (
              <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-[#A8C5B0] bg-white shadow-lg">
                {destinations.map((place) => (
                  <button
                    key={place}
                    type="button"
                    onClick={() => {
                      setDestination(place);
                      setDestinationOpen(false);
                      setTripSearched(false);
                      setBookingConfirmed(false);
                    }}
                    className="block w-full px-5 py-3 text-left text-sm text-[#3E4D3A] transition hover:bg-[#F7F9F6] hover:text-[#6B8E60]"
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
          <label className="text-sm font-medium text-[#3E4D3A]">
            When would you like to travel?
          </label>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {/* From */}
            <label className="rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3 transition focus-within:border-[#6B8E60]">
              <span className="block text-xs uppercase tracking-wider text-[#6B8E60]">
                From
              </span>

              <input
                type="date"
                min={getTodayDate()}
                value={startDate}
                onChange={(e) => {
                  const newStartDate = e.target.value;

                  setStartDate(newStartDate);
                  setTripSearched(false);
                  setBookingConfirmed(false);
                  setTripMessage("");

                  if (endDate && new Date(endDate) < new Date(newStartDate)) {
                    setEndDate("");
                  }
                }}
                className="mt-1 w-full bg-transparent text-[#3E4D3A] outline-none"
              />
            </label>

            {/* To */}
            <label className="rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3 transition focus-within:border-[#6B8E60]">
              <span className="block text-xs uppercase tracking-wider text-[#6B8E60]">
                To
              </span>

              <input
                type="date"
                min={startDate || getTodayDate()}
                max={getMaxEndDate()}
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setTripSearched(false);
                  setBookingConfirmed(false);
                  setTripMessage("");
                }}
                className="mt-1 w-full bg-transparent text-[#3E4D3A] outline-none"
              />

              {startDate && (
                <p className="mt-2 text-xs text-[#6B8E60]">
                  Trips can currently be planned for up to 14 days.
                </p>
              )}
            </label>
          </div>
        </div>

        {/* Travellers */}
        <div className="mt-8">
          <label className="text-sm font-medium text-[#3E4D3A]">
            Who's travelling?
          </label>

          <div className="mt-3 flex items-center justify-between rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-4">
            <span className="text-[#3E4D3A]">Travellers</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTravellers(Math.max(1, travellers - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A8C5B0] text-[#3E4D3A] transition hover:border-[#6B8E60] hover:text-[#6B8E60]"
              >
                −
              </button>

              <span className="font-medium text-[#3E4D3A]">{travellers}</span>

              <button
                type="button"
                onClick={() => setTravellers(travellers + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A8C5B0] text-[#3E4D3A] transition hover:border-[#6B8E60] hover:text-[#6B8E60]"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-8">
          <label className="text-sm font-medium text-[#3E4D3A]">
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

                    setTripSearched(false);
                    setBookingConfirmed(false);
                    setTripMessage("");
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isSelected
                      ? "border-[#6B8E60] bg-[#6B8E60] text-white"
                      : "border-[#A8C5B0] text-[#3E4D3A] hover:border-[#6B8E60] hover:text-[#6B8E60]"
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
          <label className="text-sm font-medium text-[#3E4D3A]">
            Approximate budget
          </label>

          <input
            type="range"
            min="5000"
            max="100000"
            step="5000"
            value={budget}
            onChange={(e) => {
              setBudget(Number(e.target.value));
              setTripSearched(false);
              setBookingConfirmed(false);
            }}
            className="mt-5 w-full accent-[#6B8E60]"
          />

          <div className="mt-2 flex justify-between text-xs text-[#6B8E60]">
            <span>₹{budget.toLocaleString("en-IN")}</span>

            <span>₹1,00,000+</span>
          </div>
        </div>

        {/* Find Trip */}
        <button
          type="button"
          onClick={handleFindTrip}
          className="mt-10 w-full rounded-full bg-[#3E4D3A] px-7 py-4 font-medium text-white transition hover:bg-[#6B8E60]"
        >
          Find My Trip →
        </button>

        {tripMessage && (
          <p className="mt-4 text-center text-sm text-red-600">{tripMessage}</p>
        )}
      </div>

      {/* Right Panel */}
      <aside className="w-full min-w-0 rounded-[2rem] bg-[#3E4D3A] p-7 text-white md:p-9">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D9E6F2]/70">
          Smart travel window
        </p>

        <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
          Plan around what's actually possible.
        </h2>

        <p className="mt-5 text-sm leading-6 text-[#F7F9F6]/75">
          VOYARA can help you understand when your trip is realistically
          bookable based on travel availability, seasonality and your selected
          dates.
        </p>

        {/* Trip Result */}
        <div className="mt-10 border-t border-white/15 pt-7">
          {tripSearched ? (
            <>
              <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
                Your trip
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{destination}</h3>

              <p className="mt-2 text-sm text-[#F7F9F6]/75">
                {startDate} — {endDate}
              </p>

              <p className="mt-2 text-sm text-[#D9E6F2]/70">
                {getTripDuration()} {getTripDuration() === 1 ? "day" : "days"}
              </p>

              {/* Trip Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#D9E6F2]/15 p-4">
                  <p className="text-xs text-[#D9E6F2]/70">Travellers</p>

                  <p className="mt-1 text-sm font-medium">{travellers}</p>
                </div>

                <div className="rounded-2xl bg-[#D9E6F2]/15 p-4">
                  <p className="text-xs text-[#D9E6F2]/70">Budget</p>

                  <p className="mt-1 text-sm font-medium">
                    ₹{budget.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
                  Your interests
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-[#D9E6F2]/15 px-3 py-1.5 text-xs text-[#F7F9F6]/90"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-7 rounded-2xl bg-[#D9E6F2]/15 p-5">
                <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
                  Recommended for you
                </p>

                <p className="mt-3 text-sm leading-6 text-[#F7F9F6]/80">
                  Your trip has been planned around your selected destination,
                  travel dates, interests and budget.
                </p>
              </div>
              {/* Group Discount */}
              {groupDiscount > 0 && (
                <div className="mt-4 rounded-2xl bg-[#D9E6F2]/15 p-4">
                  <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
                    Group Offer
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    🎉 {groupDiscount}% OFF for your group
                  </p>

                  <p className="mt-1 text-xs text-[#F7F9F6]/70">
                    You’re travelling with {travellers} people, so you qualify
                    for this group discount.
                  </p>
                </div>
              )}
              {/* Confirm Booking */}
              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={bookingConfirmed}
                className={`mt-6 w-full rounded-full px-6 py-3 font-medium transition ${
                  bookingConfirmed
                    ? "cursor-not-allowed bg-[#6B8E60] text-white"
                    : "bg-[#F7F9F6] text-[#3E4D3A] hover:bg-[#D9E6F2]"
                }`}
              >
                {bookingConfirmed ? "✓ Trip Booked" : "Confirm & Book Trip →"}
              </button>

              {bookingConfirmed && (
                <p className="mt-3 text-center text-sm text-[#D9E6F2]">
                  🎉 Your VOYARA trip has been added to your travel history.
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
                Your trip
              </p>

              <p className="mt-3 text-lg font-medium">Ready when you are.</p>

              <p className="mt-2 text-sm leading-6 text-[#F7F9F6]/70">
                Select your destination, dates and interests to see your trip
                summary here.
              </p>
            </>
          )}
        </div>

        {/* Booking Insight */}
        <div className="mt-7 border-t border-white/15 pt-7">
          <p className="text-xs uppercase tracking-wider text-[#D9E6F2]/70">
            Booking insight
          </p>

          <p className="mt-3 text-sm leading-6 text-[#F7F9F6]/75">
            We'll help you plan around booking availability, travel season and
            your selected dates.
          </p>
        </div>
      </aside>

      {/* Suggested Itinerary */}
      {tripSearched && (
        <section className="rounded-[2rem] border border-[#A8C5B0]/60 bg-white p-6 shadow-[0_12px_40px_rgba(62,77,58,0.06)] md:p-9 lg:col-span-2">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#6B8E60]">
              Suggested itinerary
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3E4D3A]">
              A simple way to spend your time.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#6B8E60]">
              Here's a starting point based on your selected destination,
              interests and travel window.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Day 1 */}
            <div className="rounded-2xl bg-[#F7F9F6] p-6">
              <p className="text-xs uppercase tracking-wider text-[#6B8E60]">
                Day 1
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#3E4D3A]">
                Arrival & local exploration
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Arrive, settle in and explore places close to where you're
                staying.
              </p>
            </div>

            {/* Middle Days */}
            <div className="rounded-2xl bg-[#F7F9F6] p-6">
              <p className="text-xs uppercase tracking-wider text-[#6B8E60]">
                Explore
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#3E4D3A]">
                Experience what you came for
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Spend your main travel days discovering experiences that match
                your selected interests.
              </p>
            </div>

            {/* Final Days */}
            <div className="rounded-2xl bg-[#F7F9F6] p-6">
              <p className="text-xs uppercase tracking-wider text-[#6B8E60]">
                Final days
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#3E4D3A]">
                Slow down & return
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Keep some time flexible for local food, hidden spots and your
                journey back home.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default TripPlanner;

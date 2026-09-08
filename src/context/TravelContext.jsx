import { createContext, useState } from "react";

const TravelContext = createContext();

export function TravelProvider({ children }) {
  const [travellerName, setTravellerName] = useState("Vidhi");

  // Completed trips
  const [trips, setTrips] = useState(() => {
    return Number(localStorage.getItem("voyara-trips")) || 0;
  });

  // Shared trip details
  const [tripDetails, setTripDetails] = useState(() => {
    const savedTrip = localStorage.getItem("voyara-trip-details");

    return savedTrip
      ? JSON.parse(savedTrip)
      : {
          destination: "",
          startDate: "",
          endDate: "",
          travellers: 2,
          budget: 50000,
          interests: [],
        };
  });

  // Update and save shared trip details
  const updateTripDetails = (details) => {
    setTripDetails((currentDetails) => {
      const updatedDetails = {
        ...currentDetails,
        ...details,
      };

      localStorage.setItem(
        "voyara-trip-details",
        JSON.stringify(updatedDetails)
      );

      return updatedDetails;
    });
  };

  // Increase completed trip count after booking
  const addTrip = () => {
    setTrips((currentTrips) => {
      const newTrips = currentTrips + 1;

      localStorage.setItem("voyara-trips", newTrips);

      return newTrips;
    });
  };

  return (
    <TravelContext.Provider
      value={{
        travellerName,
        setTravellerName,
        trips,
        addTrip,
        tripDetails,
        updateTripDetails,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export default TravelContext;
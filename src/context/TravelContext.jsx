import { createContext,  useState } from "react";

const TravelContext = createContext();

export function TravelProvider({ children }) {
  const [travellerName, setTravellerName] = useState("Vidhi");

  const [trips, setTrips] = useState(() => {
    return Number(localStorage.getItem("voyara-trips")) || 0;
  });

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
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}



export default TravelContext;
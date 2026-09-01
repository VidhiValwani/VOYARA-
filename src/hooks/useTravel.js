import { useContext } from "react";
import TravelContext from "../context/TravelContext";

function useTravel() {
  return useContext(TravelContext);
}

export default useTravel;
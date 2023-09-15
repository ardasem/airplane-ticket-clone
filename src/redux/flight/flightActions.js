import { SET_FLIGHT_DATA } from "../flight/flightTypes";

export const setFlightData = (flightData) => {
    return {
      type: SET_FLIGHT_DATA,
      info: "Fligh search data is set.",
      payload: flightData,
    };
  };
import { SET_FLIGHT_SEARCH } from "../search/searchTypes";

export const setFlightSearch = (flightSearchData) => {
    return {
      type: SET_FLIGHT_SEARCH,
      info: "Fligh search data is set.",
      payload: flightSearchData,
    };
  };
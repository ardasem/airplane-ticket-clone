import { BUY_FLIGHT, SET_USER_DATA, SET_FLIGHT_DATA,SET_FLIGHT_SEARCH } from "./userTypes";


export const setFlightData = (flightData) => {
  return {
    type: SET_FLIGHT_DATA,
    info: "Fligh data is set.",
    payload: flightData,
  };
};

export const setFlightSearch = (flightSearchData) => {
  return {
    type: SET_FLIGHT_SEARCH,
    info: "Fligh search data is set.",
    payload: flightSearchData,
  };
};


export const setUserData = (userData) => {
    return {
      type: SET_USER_DATA,
      info: "User data is set.",
      payload: userData,
    };
  };

  export const buyFlight = (number = 1) => {
    return {
      type: BUY_FLIGHT,
      info: "Fligh bought.",
      payload: number,
    };
  };
  
  

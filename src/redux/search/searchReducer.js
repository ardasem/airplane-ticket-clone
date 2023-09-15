import { SET_FLIGHT_SEARCH } from "./searchTypes";

const initialState = {
  searchState: {
    numberOfPassengers: 1,
    travelFrom: "",
    travelTo: "",
    departureDate: "",
    arrivalDate: "",
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_SEARCH: {
      return {
        ...state.searchState,
        numberOfPassengers: action.payload.numberOfPassengers,
        travelFrom: action.payload.departurePort,
        travelTo: action.payload.arrivalPort,
        departureDate: action.payload.departureDate,
        arrivalDate: action.payload.arrivalDate,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;

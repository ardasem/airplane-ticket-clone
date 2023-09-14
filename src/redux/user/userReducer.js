import {
  BUY_FLIGHT,
  SET_FLIGHT_DATA,
  SET_USER_DATA,
  SET_FLIGHT_SEARCH,
} from "./userTypes";

const initialState = {
  passengers: [{ name: "", surname: "", dateOfBirth: "", IDNumber: 0 }],
  numberOfPassengers: 1,
  travelFrom: "",
  travelTo: "",
  departureDate: "",
  arrivalDate: "",
  flightInsurance: false,
  depTime: "",
  arrTime: "",
  arrPort: "",
  depPort: "",
  airline: "",
  price: "",
  currency: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_SEARCH: {
      return {
        ...state,
        numberOfPassengers: action.payload.numberOfPassengers,
        travelFrom: action.payload.departurePort,
        travelTo: action.payload.arrivalPort,
        departureDate: action.payload.departureDate,
        arrivalDate: action.payload.arrivalDate,
      };
    }
    case SET_FLIGHT_DATA: {
      return {
        ...state,
        depTime: action.payload.depTime,
        arrTime: action.payload.arrTime,
        arrPort: action.payload.arrPort,
        depPort: action.payload.depPort,
        airline: action.payload.airline,
        price: action.payload.price,
        currency: action.payload.currency,
      };
    }
    case SET_USER_DATA: {
      return {
        ...state,
        passengers: action.payload.passengers,
        flightInsurance: action.payload.flightInsurance,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

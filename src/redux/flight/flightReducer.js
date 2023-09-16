import { SET_FLIGHT_DATA } from "./flightTypes";

const initialState = {
  flightState: {
    depTime: "",
    arrTime: "",
    arrPort: "",
    depPort: "",
    airline: "",
    price: "",
    currency: "",
    totalPrice: "",
  },
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_DATA: {
      return {
        ...state.flightState,
        depTime: action.payload.depTime,
        arrTime: action.payload.arrTime,
        arrPort: action.payload.arrPort,
        depPort: action.payload.depPort,
        airline: action.payload.airline,
        price: action.payload.price,
        currency: action.payload.currency,
        tax: action.payload.tax,
        cut: action.payload.cut,
        totalPrice: action.payload.totalPrice,
      };
    }

    default:
      return state;
  }
};

export default flightReducer;

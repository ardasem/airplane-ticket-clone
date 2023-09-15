import { SET_USER_DATA,ADD_PASSENGERS,ADD_CONTACT_INFO,ADD_BILLING_INFO } from "./userTypes";

const initialState = {
  userState: {
    passengers: [],
    flightInsurance: false,
    contactInfo: [],
    billingInfo: [],      
    
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSENGERS: {
   
      return {
        ...state.userState,       
          passengers: [...state.userState.passengers, action.payload],         
      };
    }

    case ADD_CONTACT_INFO: {   
      return {
        ...state,       
          contactInfo: action.payload,         
      };
    }

    case ADD_BILLING_INFO: {
      return {
        ...state,       
          billingInfo: action.payload,         
      };
    }
    case SET_USER_DATA: {
      return {
        ...state.userState,
        flightInsurance: action.payload.flightInsurance,
        contactInfo: action.payload.contactInfo,
        billingInfo: action.payload.billingInfo,
      };
    }

    default:
      return state;
  }
};

export default userReducer;

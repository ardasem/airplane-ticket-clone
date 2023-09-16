import {ADD_PASSENGERS,ADD_CONTACT_INFO,ADD_BILLING_INFO,ADD_INSURANCE_INFO } from "./userTypes";

const initialState = {
  userState: {
    passengers: [],
    insurance: false,
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

    case ADD_INSURANCE_INFO: {
      return {
        ...state,       
          insurance: action.payload,         
      };
    }

    

    default:
      return state;
  }
};



export default userReducer;

import { BUY_FLIGHT, SET_USER_DATA, ADD_PASSENGERS, ADD_CONTACT_INFO ,ADD_BILLING_INFO,ADD_INSURANCE_INFO} from "./userTypes";


export const addPassengers = (newPassengers) => ({
  type: ADD_PASSENGERS,
  info: 'Passengers added.',
  payload: newPassengers,
});

export const addContactInfo = (contactData) => ({
  type: ADD_CONTACT_INFO,
  info: 'Contact data added',
  payload: contactData,
});

export const addBillingInfo = (billingData) => ({
  type: ADD_BILLING_INFO,
  info: 'Billing data added',
  payload: billingData,
});

export const addInsuranceInfo = (insuranceData) => ({
  type: ADD_INSURANCE_INFO,
  info: 'Insurance data added.',
  payload: insuranceData,
});

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

  
  

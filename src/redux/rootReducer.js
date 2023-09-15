import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import searchReducer from "./search/searchReducer";
import flightReducer from './flight/flightReducer'


const rootReducer = combineReducers({
    userState: userReducer,   
    searchState: searchReducer,
    flightState: flightReducer
  });
  
  
  export default rootReducer;
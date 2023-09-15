import React from "react";
import './FlightInfoCard.scss'
import { useDispatch, useSelector } from "react-redux";
import condor from "../../assets/img/condor.png";
import freebird from "../../assets/img/freebird.png";
import pegasus from "../../assets/img/pegasus-logo.jpg";
import sunexpress from "../../assets/img/sunexpress.png";


function FlightInfoCard() {
  const reduxState = useSelector((state) => state.flightState);

  const chooseLogo = () => {
    if (reduxState.airline === "SunExpress") {
      return sunexpress;
    } else if (reduxState.airline === "Condor") {
      return condor;
    } else if (reduxState.airline === "Pegasus Airlines") {
      return pegasus;
    } else {
      return freebird;
    }
  };

  return (
    <div className="flight-info-container">
      <img src={chooseLogo()} alt="" />
      <div className="flight-stats">
        {reduxState.depPort}
        {reduxState.arrPort}
        {reduxState.depTime}
        {reduxState.arrTime}
        {reduxState.price}
        {reduxState.currency}
      </div>
    </div>
  );
}

export default FlightInfoCard;

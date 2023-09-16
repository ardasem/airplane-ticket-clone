import React from "react";
import "./FlightInfoCard.scss";
import { useDispatch, useSelector } from "react-redux";
import condor from "../../assets/img/condor.png";
import freebird from "../../assets/img/freebird.png";
import pegasus from "../../assets/img/pegasus-logo.jpg";
import sunexpress from "../../assets/img/sunexpress.png";

function FlightInfoCard() {
  const reduxFlightState = useSelector((state) => state.flightState);
  const reduxSearchState = useSelector((state) => state.searchState);

  const chooseLogo = () => {
    if (reduxFlightState.airline === "SunExpress") {
      return sunexpress;
    } else if (reduxFlightState.airline === "Condor") {
      return condor;
    } else if (reduxFlightState.airline === "Pegasus Airlines") {
      return pegasus;
    } else {
      return freebird;
    }
  };

  return (
    <div className="flight-info-container">
      <p className="big-heading">Uçuş Bilgileri</p>

      <div className="flight-stats">
        <div className="airline-stats">
          <img src={chooseLogo()} alt="" />
          <p className="big-heading">{reduxFlightState.airline}</p>
        </div>

        <div className="stats-container">
          <p className="big-heading">
            Düsseldorf ({reduxFlightState.depPort}) {">"} Antalya (
            {reduxFlightState.arrPort})
          </p>

          <div className="flight-stats">

            <div className="stat-card">
              <p className="medium-heading">Kalkış Zamanı</p>
              <p className="small-heading"> {reduxSearchState.departureDate}</p>
              <p className="small-heading"> {reduxFlightState.depTime}</p>
            </div>

            <div className="stat-card">
              <p className="medium-heading">Varış Zamanı</p>
              <p className="small-heading"> {reduxSearchState.departureDate}</p>
              <p className="small-heading">{reduxFlightState.arrTime}</p>
            </div>

            <div className="stat-card">
              <p className="medium-heading">Bilet Fiyatı</p>
              <p className="small-heading">
                <strong>
                  {reduxFlightState.price} {reduxFlightState.currency}
                </strong>
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FlightInfoCard;

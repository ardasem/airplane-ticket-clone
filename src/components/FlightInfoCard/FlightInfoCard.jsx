import React from "react";
import "./FlightInfoCard.scss";
import { useDispatch, useSelector } from "react-redux";
import condor from "../../assets/img/condor.png";
import freebird from "../../assets/img/freebird.png";
import pegasus from "../../assets/img/pegasus-logo.jpg";
import sunexpress from "../../assets/img/sunexpress.png";
const moment = require('moment');

function calculateDuration(depTime, arrTime) {
  const departureTime = moment(depTime, 'HH:mm:ss');
  const arrivalTime = moment(arrTime, 'HH:mm:ss');

  const durationMinutes = arrivalTime.diff(departureTime, 'minutes');
  const formattedDuration = moment.utc(durationMinutes * 60 * 1000).format('HH:mm');

  return formattedDuration;
}

function FlightInfoCard() {
  const reduxFlightState = useSelector((state) => state.flightState);
 
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
      <p className="medium-heading">
            Düsseldorf ({reduxFlightState.depPort}) {">"} Antalya (
            {reduxFlightState.arrPort}) / {reduxFlightState.flightDate}
          </p>

      <div className="flight-stats">
        <div className="airline-stats">
          <img src={chooseLogo()} alt="" />
          <p className="big-heading">{reduxFlightState.airlineCode}</p>
          
        </div>

        <div className="stats-container">
         

          <div className="flight-stats">

          <div className="stat-card">
              <p className="medium-heading">Kuyruk No</p>
              <p className="big-heading">{reduxFlightState.flightNo}</p>
            </div>

         

            <div className="stat-card">
              <p className="medium-heading">Kalkış Zamanı</p>
              <p className="small-heading"> {reduxFlightState.flightDate}</p>
              <p className="small-heading"> {reduxFlightState.depTime}</p>
            </div>

            <div className="stat-card">
              <p className="medium-heading">Süre</p>
              <p className="small-heading"> {calculateDuration(reduxFlightState.depTime,reduxFlightState.arrTime)}</p>
            </div>

            <div className="stat-card">
              <p className="medium-heading">Varış Zamanı</p>
              <p className="small-heading"> {reduxFlightState.flightDate}</p>
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

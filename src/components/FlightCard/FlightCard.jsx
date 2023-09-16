import React from "react";
import "./FlightCard.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlightData } from "../../redux/flight/flightActions";
import { Link } from "react-router-dom";
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

function FlightCard(props) {
  const dispatch = useDispatch();
  const reduxSearchState = useSelector((state) => state.searchState);

  const tax = props.price * reduxSearchState.numberOfPassengers * 0.18;
  const cut = props.price * reduxSearchState.numberOfPassengers * 0.08;
  const totalPrice =
    props.price * reduxSearchState.numberOfPassengers + tax + cut;

  const [flightState, setFlightState] = useState({
    airline: "",
    depPort: "",
    arrPort: "",
    depTime: "",
    arrTime: "",
    price: "",
    currency: "",
    tax: "",
    cut: "",
    totalPrice: "",
  });

  useEffect(() => {
    setFlightState({
      airline: props.airline,
      depPort: props.depPort,
      arrPort: props.arrPort,
      depTime: props.depTime,
      arrTime: props.arrTime,
      price: props.price,
      currency: props.currency,
      flightNo: props.flightNo,
      flightDate: props.flightDate,
      airlineCode: props.airlineCode,
      tax: tax.toFixed(2),
      cut: cut.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
    });
  }, []);

  const handleSelect = () => {
    dispatch(setFlightData(flightState));
  };

  const chooseLogo = () => {
    if (flightState.airline === "SunExpress") {
      return sunexpress;
    } else if (flightState.airline === "Condor") {
      return condor;
    } else if (flightState.airline === "Pegasus Airlines") {
      return pegasus;
    } else {
      return freebird;
    }
  };

  return (
    <div className="flight-card-container">
      <div className="airline-data">
        <img src={chooseLogo()} alt="airline-logo" />
        <p>{flightState.airline}</p>
      </div>

      <div className="flight-data">
      <div>
          <p className="heading">Kuyruk No</p>
          <p>{flightState.flightNo}</p>
          
        </div>

        <div>
          <p className="heading">Kalkış</p>
          <p>{flightState.depPort}</p>
          <p>{flightState.depTime}</p>
        </div>

        <div>
          <p className="heading">Süre</p>
          <p>{calculateDuration(flightState.depTime,flightState.arrTime)}</p>
          <p>Direkt</p>
        </div>

        <div>
          <p className="heading">Varış</p>
          <p>{flightState.arrPort}</p>
          <p>{flightState.arrTime}</p>
        </div>

        <div className="pricing">
          <p className="heading">Fiyat (Kişi)</p>
          <p>
            {flightState.price} {flightState.currency}
          </p>
        </div>
      </div>


      <div className="search-button" onClick={handleSelect}>
        <Link className="link" to="/selected-flight">
          Seç
        </Link>
      </div>
    </div>
  );
}

export default FlightCard;

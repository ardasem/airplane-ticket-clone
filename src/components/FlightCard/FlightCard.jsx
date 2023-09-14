import React from "react";
import "./FlightCard.scss";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFlightData } from "../../redux/user/userActions";
import { Link } from "react-router-dom";

function FlightCard(props) {
const dispatch = useDispatch();

  const [flightState, setFlightState] = useState({
    airline: "",
    depPort: "",
    arrPort: "",
    depTime: "",
    arrTime: "",
    price: "",
    currency: "",
  });

  useEffect(()=>{
    setFlightState({ airline: props.airline,
      depPort: props.depPort,
      arrPort: props.arrPort,
      depTime: props.depTime,
      arrTime: props.arrTime,
      price: props.price,
      currency: props.currency, })

  },[])

  

  const handleSelect = () => {
    
      dispatch(setFlightData(flightState))
  };

  return (
    <div className="flight-card-container">
      <div className="airline-data">
        <img src="./a" alt="airline-logo" />
        <p>{props.airline}</p>
      </div>

      <div className="flight-data">
        <div>
          <p className="heading">Kalkis</p>
          <p>{props.depPort}</p>
          <p>{props.depTime}</p>
        </div>

        <div>
          <p className="heading">Sure</p>
          <p>s</p>
          <p>Direkt</p>
        </div>

        <div>
          <p className="heading">Inis</p>
          <p>{props.arrPort}</p>
          <p>{props.arrTime}</p>
        </div>

        <div className="pricing">
          <p className="heading">Fiyat</p>
          <p>
            {props.price} {props.currency}
          </p>
        </div>
      </div>

      <button onClick={handleSelect}><Link className="link" to='/selected-flight'>Seç</Link></button>
    </div>
  );
}

export default FlightCard;

import React from "react";
import { useSelector } from "react-redux";
import "./PriceCard.scss";

function PriceCard() {
  const reduxFlightState = useSelector((state) => state.flightState);
  const reduxSearchState = useSelector((state) => state.searchState);

  const tax =
    reduxFlightState.price * reduxSearchState.numberOfPassengers * 0.18;
  const cut =
    reduxFlightState.price * reduxSearchState.numberOfPassengers * 0.08;

  const totalPrice =
    reduxFlightState.price * reduxSearchState.numberOfPassengers + tax + cut;

  return (
    <div className="pricecard-container">

      <p className="big-heading">Fiyat Detayı</p>

      <div className="price-info">
        <div className="section">
          <label htmlFor="passenger-number">Yolcu Tipi</label>
          <p className="passenger-number">
            {reduxSearchState.numberOfPassengers} Yetişkin
          </p>
        </div>

        <div className="section">
          <label htmlFor="price" className="medium-heading">Fiyat</label>
          <p className="price"><strong> {reduxFlightState.totalPrice} {reduxFlightState.currency}</strong></p>
        </div>

        <div className="section">
          <label htmlFor="tax" className="medium-heading">Vergi/Harç (%18)</label>
          <p className="smal">{reduxFlightState.tax} {reduxFlightState.currency}</p>
        </div>

        <div className="section">
          <label htmlFor="cut" className="medium-heading">Hizmet Bedeli (%8)</label>
          <p className="cut">{reduxFlightState.cut} {reduxFlightState.currency}</p>
        </div>

      </div>
    </div>
  );
}

export default PriceCard;

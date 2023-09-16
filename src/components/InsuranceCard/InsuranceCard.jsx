import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/";
import "./InsuranceCard.scss";

function InsuranceCard({ onInsuranceDataChange }) {
  const reduxFlightState = useSelector((state) => state.flightState);

  const [insuranceState, setInsuranceState] = useState({
    insurance: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInsuranceState({
      ...insuranceState,
      [name]: checked,
    });
  };

  useEffect(() => {
    onInsuranceDataChange(insuranceState);
  }, [insuranceState, onInsuranceDataChange]);

  return (
    <div className="insurance-card-container">
      <p className="big-heading">Uçak Bileti Sigortası</p>

      <div className="insurance-card-form">
        <div className="checkbox">
          <input
            type="checkbox"
            name="insurance"
            id="insurance"
            checked={insuranceState.insurance}
            onChange={handleCheckboxChange}
          />
          <p htmlFor="insurance">Uçak bileti sigortası yaptırmak istiyorum.</p>
        </div>

        <div>
          <p>
          Toplam Fiyat: {" "}
            <strong>{reduxFlightState.totalPrice}{" "}
          {reduxFlightState.currency}</strong>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default InsuranceCard;

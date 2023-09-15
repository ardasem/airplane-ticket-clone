import React from "react";
import "./PassengerInfoCard.scss";
import { useState,useEffect} from "react";

function PassengerInfoCard({onFormStateChange,numberOfPassengers}) {


  const [passengerState, setPassengerState] = useState({
    passengerKey: '',
    name: "",
    surname: "",
    gender: "Kadın",
    TCKN: "",
    dob: "",
    tcCitizen: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerState({
      ...passengerState,
      [name]: value,
      passengerKey:numberOfPassengers,
    });
    onFormStateChange(passengerState,numberOfPassengers);
  };
  
  
  

  return (
    <div className="passenger-info-card-container">
      <form className="passenger-form">
        <p>{numberOfPassengers}. Yetişkin</p>

        <div className="radio-buttons">
          <label htmlFor="gender-radio-female">Kadin</label>
          <input
            type="radio"
            name="gender"
            id="gender-radio"
            value="Kadın"
            checked
            onChange={handleInputChange}
          />

          <label htmlFor="gender-radio-male">Erkek</label>
          <input
            type="radio"
            name="gender"
            id="gender-radio"
            value="Erkek"
            onChange={handleInputChange}
          />
        </div>

        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="İsim"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Soyisim"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Doğum Tarihi"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="TCKN"
            placeholder="T.C. Kimlik"
            onChange={handleInputChange}
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="not-citizen"
            id="not-citizen"
            onChange={handleInputChange}
          />
          <label htmlFor="not-citizen">T.C. Vatandaşı değilim.</label>
        </div>
      </form>
    </div>
  );
}

export default PassengerInfoCard;

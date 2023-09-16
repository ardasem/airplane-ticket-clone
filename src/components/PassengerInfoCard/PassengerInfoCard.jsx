import React from "react";
import "./PassengerInfoCard.scss";
import { useState,useEffect} from "react";

function PassengerInfoCard({onPassengerStateChange,numberOfPassengers}) {


  const [passengerState, setPassengerState] = useState({
    passengerKey: '',
    name: "",
    surname: "",
    gender: "Kadın",
    TCKN: "",
    dob: "",
    notCitizen: false,
  });

   
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
 
    setPassengerState((prevPassengerState) => {
      let updatedPassengerState = {
        ...prevPassengerState,
        [name]: type === "checkbox" ? checked : value,
        passengerKey: numberOfPassengers,
      };
  
      onPassengerStateChange(updatedPassengerState, numberOfPassengers);
        
      return updatedPassengerState;
    });
  };

  return (
    <div className="passenger-info-card-container">
      <form className="passenger-form">
        <p className="small-heading"> {`${numberOfPassengers}. Yetişkin`}</p>

        <div className="radio-buttons">
          <label htmlFor="gender-radio-female">Kadin</label>
          <input
            type="radio"
            name="gender"
            id="gender-radio-female"
            value="Kadın"
            checked={passengerState.gender === "Kadın"}
            onChange={handleInputChange}
          />

          <label htmlFor="gender-radio-male">Erkek</label>
          <input
            type="radio"
            name="gender"
            id="gender-radio-male"
            value="Erkek"
            checked={passengerState.gender === "Erkek"}
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
            name="notCitizen"
            id="notCitizen"
            checked={passengerState.notCitizen}
            onChange={handleInputChange}
          />
          <label htmlFor="tcCitizen">T.C. Vatandaşı değilim.</label>
        </div>
      </form>
    </div>
  );
}

export default PassengerInfoCard;

import React from "react";
import PassengerInfoCard from "../PassengerInfoCard/PassengerInfoCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import "./PassengerInfoContainer.scss";

function PassengerInfoContainer({onPassengerDataChange}) {

  const searchState = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const [passengerStates, setPassengerStates] = useState([]);

  const handleFormStateChange = (newState, passengerNumber) => {
    setPassengerStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[passengerNumber - 1] = newState;
      return updatedStates;
    });
    
  };

  useEffect(()=>{
    onPassengerDataChange(passengerStates); 
  },[passengerStates])
 
  const cards = () => {
    let cardsArr = [];
    for (let i = 1; i <= searchState.numberOfPassengers; i++) {
      cardsArr.push(
        <PassengerInfoCard
          passengerStates={passengerStates}
          onPassengerStateChange={handleFormStateChange}
          numberOfPassengers={i}
        />
      );
    }

    return cardsArr;
  };

  return (
    <div className="passenger-info-container">
      <p>Yolcu Bilgileri</p>
      <div className="cards">
        {cards().map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>

        </div>
  );
}

export default PassengerInfoContainer;

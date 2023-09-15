import React from "react";
import { useState,useEffect } from 'react';
import "./InsuranceCard.scss";


function InsuranceCard({onInsuranceDataChange}) {

  
  const [insuranceState,setInsuranceState] = useState({
    insurance:false,
  });



  const handleCheckboxChange = (event) => {
  
    const { name,checked} = event.target;
    setInsuranceState({
      ...insuranceState,
       [name]: checked,
     });

     console.log(insuranceState)
    
  };


  useEffect(() => {
    console.log(insuranceState); // Log the updated state
    onInsuranceDataChange(insuranceState);
  }, [insuranceState, onInsuranceDataChange]);

  return (
    <div className="insurance-card-container">
      <p>Uçak Bileti Sigortası</p>

      <div className="insurance-card-form">
        <div>
        <input type="checkbox" name="insurance" id="insurance" checked={insuranceState.insurance} onChange={handleCheckboxChange}/>
        <label htmlFor="insurance">
          Uçak bileti sigortası yaptırmak istiyorum.
        </label>
        </div>
       

        <div>totalPrice</div>
      </div>
    </div>
  );
}

export default InsuranceCard;

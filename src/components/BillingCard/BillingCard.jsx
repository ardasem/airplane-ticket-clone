import React from 'react'
import { useState,useEffect } from 'react';
import './BillingCard.scss'

function BillingCard({onBillingDataChange}) {

  const [billingState,setBillingState] = useState({
    name:'',
    surname: '',
    TCKN: '',
    citizen: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingState({
     ...billingState,
      [name]: value,
    });
  };

  useEffect(() => {
    onBillingDataChange(billingState);
  }, [billingState, onBillingDataChange]);


  return (
     <div className="billing-card-container">
      <p>
        Fatura Bilgileri
      </p>
    <form className="billing-form">
     
      <div className="inputs">
        <input type="text" name='name' placeholder="İsim" onChange={handleInputChange}/>
        <input type="text" name='surname' placeholder="Soyisim" onChange={handleInputChange}/>
        <input type="text" name='TCKN' placeholder="T.C. Kimlik" onChange={handleInputChange}/>
      </div>

      <div className="checkbox">
        <input type="checkbox" name="citizen" id="not-citizen"  onChange={handleInputChange}/>
        <label htmlFor="not-citizen">T.C. Vatandaşı değilim.</label>
      </div>
    </form>
  </div>
  )
}

export default BillingCard
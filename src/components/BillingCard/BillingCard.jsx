import React from 'react'
import { useState,useEffect } from 'react';
import './BillingCard.scss'

function BillingCard({onBillingDataChange}) {

  const [billingState,setBillingState] = useState({
    name:'',
    surname: '',
    TCKN: '',
    notCitizen: false,
  });

  const handleInputChange = (event) => {
    
    const { name, value,checked} = event.target;
    setBillingState({
     ...billingState,
     [name]: name === 'notCitizen' ? checked : value,
    });
  };

  useEffect(() => {
    onBillingDataChange(billingState);
  }, [billingState, onBillingDataChange]);


  return (
     <div className="billing-card-container">
      <p className='big-heading'>
        Fatura Bilgileri
      </p>
    <form className="billing-form">
     
      <div className="inputs">
        <input type="text" name='name' placeholder="İsim" onChange={handleInputChange}/>
        <input type="text" name='surname' placeholder="Soyisim" onChange={handleInputChange}/>
        <input type="text" name='TCKN' placeholder="T.C. Kimlik" onChange={handleInputChange}/>
      </div>

      <div className="checkbox">
        <input type="checkbox" name="notCitizen" id="notCitizen" checked={billingState.notCitizen} onChange={handleInputChange}/>
        <label htmlFor="notCitizen">T.C. Vatandaşı değilim.</label>
      </div>
    </form>
  </div>
  )
}

export default BillingCard
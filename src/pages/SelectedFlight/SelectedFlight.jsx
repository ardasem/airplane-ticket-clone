import React from 'react'
import Header from '../../components/Header/Header'
import FlightInfoCard from '../../components/FlightInfoCard/FlightInfoCard'
import PriceCard from '../../components/PriceCard/PriceCard'
import PassengerInfoContainer from '../../components/PassengerInfoContainer/PassengerInfoContainer'
import ContactCard from '../../components/ContactCard/ContactCard'
import BillingCard from '../../components/BillingCard/BillingCard'
import InsuranceCard from '../../components/InsuranceCard/InsuranceCard'
import Footer from '../../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addPassengers, addContactInfo,addBillingInfo } from '../../redux/user/userActions'

function SelectedFlight() {

  const [passengerState,setPassengerState] = useState('');
  const [billingState,setBillingState] = useState('');
  const [contactState,setContactState] = useState('');
  const [insuranceState,setInsuranceState] = useState('');

  const dispatch = useDispatch();

  const handleReduxDispatch = () => {
    
    console.log(passengerState)
    dispatch(addPassengers(passengerState));
    dispatch(addContactInfo(contactState));
    dispatch(addBillingInfo(billingState));
    
  };

  const handlePassengerDataChange = (data) => {
    setPassengerState(data);
    
  };

  const handleContactDataChange = (data)=> {
    setContactState(data);
    
  }

  const handleBillingDataChange = (data)=> {
    setBillingState(data);
  }

  return (
    <div className='selected-flight-page'>
      <Header />
      <FlightInfoCard />
      <PriceCard />
      <PassengerInfoContainer onPassengerDataChange={handlePassengerDataChange}/>
      <ContactCard onContactDataChange={handleContactDataChange}/>
      <BillingCard onBillingDataChange={handleBillingDataChange}/>
      <InsuranceCard />
      <Footer />

      <button onClick={handleReduxDispatch}>Click to dispatch</button>
 
    </div>
  )
}

export default SelectedFlight
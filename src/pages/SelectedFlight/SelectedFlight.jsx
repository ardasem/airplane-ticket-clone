import React from "react";
import "./SelectedFlight.scss";
import Header from "../../components/Header/Header";
import FlightInfoCard from "../../components/FlightInfoCard/FlightInfoCard";
import PriceCard from "../../components/PriceCard/PriceCard";
import PassengerInfoContainer from "../../components/PassengerInfoContainer/PassengerInfoContainer";
import ContactCard from "../../components/ContactCard/ContactCard";
import BillingCard from "../../components/BillingCard/BillingCard";
import InsuranceCard from "../../components/InsuranceCard/InsuranceCard";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addPassengers,
  addContactInfo,
  addBillingInfo,
  addInsuranceInfo,
} from "../../redux/user/userActions";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function SelectedFlight() {
  const [passengerState, setPassengerState] = useState("");
  const [billingState, setBillingState] = useState("");
  const [contactState, setContactState] = useState("");
  const [insuranceState, setInsuranceState] = useState("");
  const breadcrumbPath = [
    { label: 'Ana Sayfa', url: '/' },
    { label: 'Uçuşlar', url: '/available-flights' },
    { label: 'Seçilen Uçuş', url: '/category/selected-flight' },
    
  ];

  const dispatch = useDispatch();

  const handleReduxDispatch = () => {
    console.log(passengerState);
    dispatch(addPassengers(passengerState));
    dispatch(addContactInfo(contactState));
    dispatch(addBillingInfo(billingState));
    dispatch(addInsuranceInfo(insuranceState));
  };

  const handlePassengerDataChange = (data) => {
    setPassengerState(data);
  };

  const handleContactDataChange = (data) => {
    setContactState(data);
  };

  const handleBillingDataChange = (data) => {
    setBillingState(data);
  };

  const handleInsuranceDataChange = (data) => {
    setInsuranceState(data);
  };

  return (
    <div className="selected-flight-page">
      <Header />
      <Breadcrumb path={breadcrumbPath}/>
      <FlightInfoCard />
      <PriceCard />
      <PassengerInfoContainer
        onPassengerDataChange={handlePassengerDataChange}
      />
      <ContactCard onContactDataChange={handleContactDataChange} />
      <BillingCard onBillingDataChange={handleBillingDataChange} />
      <InsuranceCard onInsuranceDataChange={handleInsuranceDataChange} />

      <div className="proceed-button" onClick={handleReduxDispatch}>
        <Link className="link" to="/payment">
          Ödeme ekranına git
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default SelectedFlight;

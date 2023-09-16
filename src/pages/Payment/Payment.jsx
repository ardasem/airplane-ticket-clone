import React from "react";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Payment.scss";
import PaymentSuccessBox from "../../components/PaymentSuccessBox/PaymentSuccessBox";
import { useState } from "react";

function Payment() {
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
  };

  const closePopup = () => {
    setPaymentSuccessful(false);
  };

  return (
    <div>
      <Header />
      <PaymentCard />
      <Footer />
    </div>
  );
}

export default Payment;

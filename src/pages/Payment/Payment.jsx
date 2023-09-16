import React from "react";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Payment.scss";


function Payment() {

  return (
    <div>
      <Header />
      <PaymentCard />
      <Footer />
    </div>
  );
}

export default Payment;

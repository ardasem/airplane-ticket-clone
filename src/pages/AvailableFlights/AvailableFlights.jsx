import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightCard from "../../components/FlightCard/FlightCard";
import Footer from "../../components/Footer/Footer";
import flightData from "../../assets/data/search.json";

function AvailableFlights() {
  const flightCards = flightData.departureLegs.map((flight) => {
    return (
      <FlightCard
        key={flight.flightId}
        airline={flight.airline}
        depTime={flight.depTime}
        arrTime={flight.arrTime}
        depPort={flight.depPort}
        arrPort={flight.arrPort}
        price={flight.priceDetail.basePrice.amount}
        currency={flight.priceDetail.basePrice.currency}
      />
    );
  });



  return (
    <div className="available-flights-container">
      <Header />
      <SearchBar />
      {flightCards}
      <Footer />
    </div>
  );
}

export default AvailableFlights;

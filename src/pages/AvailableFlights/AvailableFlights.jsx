import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightCard from "../../components/FlightCard/FlightCard";
import Footer from "../../components/Footer/Footer";
import flightData from "../../assets/data/search.json";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


function AvailableFlights() {
  const breadcrumbPath = [
    { label: 'Ana Sayfa', url: '/' },
    { label: 'Uçuşlar', url: '/available-flights' },
    
  ];
  
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
        flightNo = {flight.flightNo}
        flightDate = {flight.flightDate}
        airlineCode = {flight.airlineCode}
      />
    );
  });



  return (
    <div className="available-flights-container">
      <Header />
      <Breadcrumb path={breadcrumbPath}/>
      <SearchBar className='search-bar' />
      {flightCards}
      <Footer />
    </div>
  );
}

export default AvailableFlights;

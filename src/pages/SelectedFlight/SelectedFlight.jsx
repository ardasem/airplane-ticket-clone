import React from 'react'
import Header from '../../components/Header/Header'
import FlightInfoCard from '../../components/FlightInfoCard/FlightInfoCard'
import PriceCard from '../../components/PriceCard/PriceCard'
import PassengerInfoContainer from '../../components/PassengerInfoContainer/PassengerInfoContainer'
import ContactCard from '../../components/ContactCard/ContactCard'
import BillingCard from '../../components/BillingCard/BillingCard'
import InsuranceCard from '../../components/InsuranceCard/InsuranceCard'
import Footer from '../../components/Footer/Footer'

function SelectedFlight() {
  return (
    <div>
      <Header />
      <FlightInfoCard />
      <PriceCard />
      <PassengerInfoContainer />
      <ContactCard />
      <BillingCard />
      <InsuranceCard />
      <Footer />
    </div>
  )
}

export default SelectedFlight
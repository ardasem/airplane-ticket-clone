import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import './HomePage.scss'

function HomePage(props) {
  return (
    <div>
        <Header />
        <Hero />
        <Footer/>
        
      
    </div>
  )
}

export default HomePage
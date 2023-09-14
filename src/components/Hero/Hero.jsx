import React from "react";
import "./Hero.scss";
import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  return (
    <div className="hero">
      <h1>Keşfe Hazır Olun: En Uygun Uçuşlar Sizleri Bekliyor! </h1>
      <SearchBar />
    </div>
  );
}

export default Hero;

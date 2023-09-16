import React from "react";
import destinationData from "../../assets/data/destination.json";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlightSearch } from "../../redux/search/searchActions";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar({ data }) {
  const dispatch = useDispatch();
  const [routeState, setRouteState] = useState("one-way");
  const [errorMessage, setErrorMessage] = useState("");
  const reduxState = useSelector((state) => state.searchState);
  const [formData, setFormData] = useState({
    departurePort: reduxState.travelFrom,
    arrivalPort: reduxState.travelTo,
    departureDate: reduxState.departureDate,
    arrivalDate: reduxState.arrivalDate,
    numberOfPassengers: reduxState.numberOfPassengers,
    dataPassed: false,
  });

  useEffect(() => {
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      departurePort: reduxState.travelFrom,
      arrivalPort: reduxState.travelTo,
      departureDate: reduxState.departureDate,
      arrivalDate: reduxState.arrivalDate,
      numberOfPassengers: reduxState.numberOfPassengers,
      dataPassed: false,
    }));
   
  }, []);

  const handleRouteChange = (e) => {
    setRouteState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.departurePort !== "Düsseldorf" ||
      formData.arrivalPort !== "Antalya"
    ) {
      setErrorMessage("Uçuş Bulunamadı.");
      return;
    } else {
      dispatch(setFlightSearch(formData));
    }
  };

  const handleLinkClick = (e) => {
    if (
      formData.departurePort !== "Düsseldorf" ||
      formData.arrivalPort !== "Antalya"
    ) {
      e.preventDefault();
      setErrorMessage("Please select a route.");
    }
  };

  return (
    <div className="search-form">
      <div className="radio-buttons">
        <div className="radio-button-div">
          <input
            type="radio"
            name="travel-route"
            value="one-way"
            id="one-way"
            checked={routeState === "one-way"}
            onChange={handleRouteChange}
          />
          <label className="label" htmlFor="one-way">
            Tek Yön
          </label>
        </div>

        <div className="radio-button-div">
          <input
            type="radio"
            name="travel-route"
            value="two-way"
            id="two-way"
            checked={routeState === "two-way"}
            onChange={handleRouteChange}
          />
          <label className="label" htmlFor="two-way">
            Gidiş - Geliş
          </label>
        </div>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="search-inputs">
        <div className="search-div">
          <label className="label" htmlFor="departure-port">
            Kalkış
          </label>
          <select
            className="dropdown-input"
            name="departure-port"
            onChange={(e) =>
              setFormData({ ...formData, departurePort: e.target.value })
            }
            value={formData.travelFrom}
          >
            {!reduxState.travelFrom && <option value="">Seçiniz</option>}
            {reduxState.travelFrom && (
              <option value={reduxState.travelFrom}>
                {reduxState.travelFrom}
              </option>
            )}

            {destinationData.ports.map((port) => (
              <option key={port.code} value={port.explanation}>
                {port.explanation}
              </option>
            ))}
          </select>
        </div>

        <div className="search-div">
          <label className="label" htmlFor="arrival-port">
            İniş
          </label>
          <select
            className="dropdown-input"
            name="arrival-port"
            onChange={(e) =>
              setFormData({ ...formData, arrivalPort: e.target.value })
            }
            value={formData.travelTo}
          >
             {!reduxState.travelTo && <option value="">Seçiniz</option>}
            {reduxState.travelTo && (
              <option value={reduxState.travelTo}>
                {reduxState.travelTo}
              </option>
            )}

            {destinationData.ports.map((port) => (
              <option key={port.code} value={port.explanation}>
                {port.explanation}
              </option>
            ))}
          </select>
        </div>

        <div className="search-div">
          <label className="label" htmlFor="departure-date">
            Gidiş Tarihi
          </label>
          <input
            className="data-input"
            name="departure-date"
            type="date"
            value={reduxState.departureDate}
            onChange={(e) =>
              setFormData({ ...formData, departureDate: e.target.value })
            }
          />
        </div>

        <div className="search-div">
          <label className="label" htmlFor="departure-date">
            Dönüş Tarihi
          </label>
          <input
            className="data-input"
            name="departure-date"
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, arrivalDate: e.target.value })
            }
            disabled={routeState === "one-way"}
          />
        </div>

        <div className="search-div">
          <label className="label" htmlFor="number-of-passengers">
            Yolcu Sayısı
          </label>
          <select
            className="dropdown-input"
            name="number-of-passengers"
            value={formData.numberOfPassengers}
            onChange={(e) =>
              setFormData({ ...formData, numberOfPassengers: e.target.value })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div className="search-button" onClick={handleSubmit}>
          <Link
            className="link"
            to="/available-flights"
            onClick={handleLinkClick}
          >
            Ara
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

import React from "react";
import destinationData from "../../assets/data/destination.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlightSearch } from "../../redux/user/userActions";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar({ data }) {
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state.userState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.departurePort !== "Düsseldorf" &&
      formData.arrivalPort !== "Antalya"
    ) {
      setFormData((prevState) => ({ ...prevState, dataPassed: false }));
      console.log("Ucus Bulunamadi");
    } else {
      console.log("Form Data:", formData);
      dispatch(setFlightSearch(formData));
    }
  };

  const [formData, setFormData] = useState({
    departurePort: "",
    arrivalPort: "",
    departureDate: "",
    arrivalDate: "",
    numberOfPassengers: 1,
    dataPassed: false,
  });

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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
        >
          {!reduxState.travelTo && <option value="">Seçiniz</option>}
          {reduxState.travelTo && (
            <option value={reduxState.travelFrom}>{reduxState.travelFrom}</option>
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
        >
          {!reduxState.travelTo && <option value="">Seçiniz</option>}
          {reduxState.travelTo && (
            <option value={reduxState.travelTo}>{reduxState.travelTo}</option>
          )}{" "}
          {destinationData.ports.map((port) => (
            <option key={port.code} value={port.explanation}>
              {port.explanation}
            </option>
          ))}
        </select>
      </div>

      <div className="search-div">
        <label className="label" htmlFor="departure-date">
          Kalkış Tarihi
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
          İniş Tarihi
        </label>
        <input
          className="data-input"
          name="departure-date"
          type="date"
          value={reduxState.arrivalDate}
          onChange={(e) =>
            setFormData({ ...formData, arrivalDate: e.target.value })
          }
        />
      </div>

      <div className="search-div">
        <label className="label" htmlFor="number-of-passengers">
          Yolcu Sayısı
        </label>
        <select
          className="dropdown-input"
          name="number-of-passengers"
          value={reduxState.numberOfPassengers}
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

      <button type="submit" onClick={handleSubmit}>
        <Link className="link" to="/available-flights">
          Ara
        </Link>
      </button>
    </form>
  );
}

export default SearchBar;

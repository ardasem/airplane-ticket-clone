import React from "react";
import { useState, useEffect } from "react";
import "./ContactCard.scss";

function ContactCard({ onContactDataChange }) {
  const [contactState, setContactState] = useState({
    email: "",
    phoneNumber: "",
    isNews: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactState({
      ...contactState,
      [name]: value,
    });
  };

  useEffect(() => {
    onContactDataChange(contactState);
  }, [contactState, onContactDataChange]);

  return (
    <div className="contact-container">
      <p className="big-heading">İletişim Bilgileri</p>
      <form className="contact-form">
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="E-Posta"
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Cep Telefonu"
            onChange={handleInputChange}
          />

          <div className="campaign-container">
            <input className="checkbox"
              type="checkbox"
              name="isNews"
              id="campaign"
              onChange={handleInputChange}
            />
            <p >
            Fırsatlar ve kampanyalardan yararlanmak istiyorum.
          </p>
          </div>

          
        </div>
      </form>
    </div>
  );
}

export default ContactCard;

import React from "react";
import { useState,useEffect } from "react";
import './ContactCard.scss'

function ContactCard({onContactDataChange}) {

  const [contactState,setContactState] = useState({
    email:'',
    phoneNumber: '',
    isNews: '',
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
      <p className="heading">İletişim Bilgileri</p>
      <form className="contact-form">
        <input type="email" name="email" placeholder="E-Posta" onChange={handleInputChange}/>

        <input type="text" name="phoneNumber" placeholder="Cep Telefonu" onChange={handleInputChange}/>

        <input type="checkbox" name="isNews" id="campaign" onChange={handleInputChange}/>

        <label htmlFor="campaign">
          Fırsatlar ve kampanyalardan yararlanmak istiyorum.
        </label>
      </form>
    </div>
  );
}

export default ContactCard;

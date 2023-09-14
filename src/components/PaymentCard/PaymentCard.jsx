import React from "react";
import "./PaymentCard.scss";

function PaymentCard() {
  const handlePayment = () => {
    return 1;
  };

  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const start = 23;
  const end = 60;
  const years = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );

  return (
    <div className="payment-card-container">
      <h1>Ödeme Bilgileri</h1>
      <form onSubmit={handlePayment}>
        <input
          className="cardnumber-input"
          type="text"
          placeholder="Kart Numaram"
          maxLength="16"
        />
        <div>
          <select className="dropdown-input">
            {months.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <select className="dropdown-input">
            {years.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <input
            className="data-input"
            type="text"
            name="cvc"
            id="cvc"
            maxLength="3"
          />
        </div>

        <h2>Taksit Seçenekleri</h2>
        <div className="radio-buttons">
          <input type="radio" name="payment-option" value="1" id="tek" />
          <label className="label" htmlFor="tek">
            Tek Çekim
          </label>
          <input type="radio" name="payment-option" value="3" id="3-taksit" />
          <label className="label" htmlFor="3-taksit">
            3 Taksit
          </label>
          <input type="radio" name="payment-option" value="6" id="6-taksit" />
          <label className="label" htmlFor="6-taksit">
            6 Taksit
          </label>
          <input type="radio" name="payment-option" value="9" id="9-taksit" />
          <label className="label" htmlFor="9-taksit">
            9 Taksit
          </label>
        </div>

        <div className="checkbox-div">
          <input type="checkbox" name="agreement" id="" />
          <label className="label" htmlFor="agreement">
            Lorem ipsum kurallarını okudum ve kabul ediyorum.
          </label>
        </div>
      </form>

      <div className="final-price">
        <p className="label">Toplam ödenecek tutar: </p>
        <button>Ödemeyi Tamamla</button>
      </div>

     
    </div>
  );
}

export default PaymentCard;

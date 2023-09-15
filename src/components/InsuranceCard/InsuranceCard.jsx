import React from "react";
import "./InsuranceCard.scss";

function InsuranceCard() {
  return (
    <div className="insurance-card-container">
      <p>Uçak Bileti Sigortası</p>

      <div className="insurance-card-form">
        <div>
        <input type="checkbox" name="insurance" id="insurance" />
        <label htmlFor="insurance">
          Uçak bileti sigortası yaptırmak istiyorum.
        </label>
        </div>
       

        <div>totalPrice</div>
      </div>
    </div>
  );
}

export default InsuranceCard;

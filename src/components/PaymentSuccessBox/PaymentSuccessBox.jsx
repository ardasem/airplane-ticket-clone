import React from 'react';
import './PaymentSuccessBox.scss'
import { Link } from 'react-router-dom';

function PaymentSuccessBox(props) {
  return (
    <div className="payment-success-box">
      <div className="popup-content">
        <h2>Ödeme başarılı</h2>
        <p>Satın alma işlemini başarıyla tamamladınız.</p>


        <div className='buttons-container'>
        <div className='button' onClick={props.onClose}>
            <Link className='link'>Uçuş Bilgileri</Link>
        </div>
        <div className="button">
          <Link className="link" to="/" >
            Ana Sayfaya Dön
          </Link>
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default PaymentSuccessBox;
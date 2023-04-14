import React, { useState } from 'react';
import classes from './PaymentMethod.module.css';

function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (<section>

  
    
      <h2>Select a Payment Method</h2>
    <div className={classes.methods}>
      <div className={classes.options}>
        <div className={classes.option}>
          <input type="radio" id="upi" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={handlePaymentChange} />
          <label htmlFor="upi">UPI</label>
        </div>
        <div className={classes.wallet} >
          <input type="radio" id="wallet" name="payment" value="wallet" checked={paymentMethod === 'wallet'} onChange={handlePaymentChange} />
          <label htmlFor="wallet">Wallet / Postpaid</label>
        </div>
        <div className={classes.card}>
          <input type="radio" id="card" name="payment" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentChange} />
          <label htmlFor="card">Credit/Debit/ATM Card</label>
        </div>
        <div className={classes.netbanking}>
          <input type="radio" id="net-banking" name="payment" value="net-banking" checked={paymentMethod === 'net-banking'} onChange={handlePaymentChange} />
          <label htmlFor="net-banking">Net Banking</label>
        </div>
        <div className={classes.cod}>
          <input type="radio" id="cod" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={handlePaymentChange} />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
      </div>
    </div>
    </section>
  );
}

export default PaymentMethods;

import React, { useState } from 'react';

const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState('');

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with selected payment option
    console.log(paymentOption);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="Credit Card"
            checked={paymentOption === 'Credit Card'}
            onChange={handlePaymentOptionChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="Debit Card"
            checked={paymentOption === 'Debit Card'}
            onChange={handlePaymentOptionChange}
          />
          Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="Cash on Delivery"
            checked={paymentOption === 'Cash on Delivery'}
            onChange={handlePaymentOptionChange}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="UPI"
            checked={paymentOption === 'UPI'}
            onChange={handlePaymentOptionChange}
          />
          UPI
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Checkout;

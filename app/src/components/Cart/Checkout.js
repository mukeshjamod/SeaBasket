import React from 'react';
import Subtotal from './Subtotal';
import classes from './Checkout.module.css';


const Checkout = () => {

  return (
    <div className={classes.checkout}>
        <div className={classes.left}>
            <div>
                <h2 className={classes.title}>Your shoping cart is empty.</h2>
                <p>You have no items in your Cart.Buy one</p>
            </div>
        </div>
        <div className={classes.right}>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;
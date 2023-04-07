import React from 'react';
import Subtotal from './Subtotal';
import classes from './Checkout.module.css';
<<<<<<< HEAD
import CartItem from './CartItem';
import { useStateValue } from '../../store/CartProvider';

const Checkout = () => {

  const [{cart}] = useStateValue();
=======


const Checkout = () => {

>>>>>>> feature/authentication
  return (
    <div className={classes.checkout}>
        <div className={classes.left}>
          { 
          cart.length === 0 ? (
            <div>
                <h2 className={classes.title}>Your shoping cart is empty.</h2>
                <p>You have no items in your Cart.Buy one</p>
            </div>
          ): (<div>
            <h2 className={classes.carttitle}>Items in the shoppping cart</h2>
            {
              cart.map(item => (
                   <CartItem 
                   id= {item.id}
                   title= {item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   />
              )
              )
            }
            </div>)
            }
            
      </div>
        
        <div className={classes.right}>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;
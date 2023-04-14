import React from 'react';
import classes from './Subtotal.module.css';
import { useStateValue } from '../../store/CartProvider';
import CurrencyFormat from 'react-currency-format';
import { Link, 
  // useNavigate
 } from 'react-router-dom';

const Subtotal = () => {

  const getCartTotal = (cart) =>{
  return cart?.reduce((amount,item) =>item.price + amount, 0);
  }


  const [{cart}] = useStateValue();


  return ( <div className={classes.subtotal}>
    <CurrencyFormat 
    renderText = {(value) =>(
      <p>
      Subtotal({cart.length} items) : <strong>{`${value}`}</strong></p>
    )}
    decimalScale={2}
    value={getCartTotal(cart)}
    displayType={"text"}
    thousandSeparator ={true}
    prefix={"$"}
    />
   <Link to='/payment'>
        <button className={classes.button} >Proceed to Checkout</button>
   </Link>
    </div>
  )
}

export default Subtotal;
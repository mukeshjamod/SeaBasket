import React from 'react';
import classes from './Subtotal.module.css';
import { useStateValue } from '../../store/CartProvider';
import CurrencyFormat from 'react-currency-format';
import { Link, 
  // useNavigate
 } from 'react-router-dom';

const Subtotal = () => {

  const [{cart}] = useStateValue();
  
  const getCartTotal = (cart) =>{
  return cart?.reduce((amount,item) =>item.price + amount, 0);
  }

const handleCheckoutClick = () =>{
  if(isLoggedIn()){
    props.history.push('/payment');
  }else{
    props.history.push('/login');
  }
}


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
   
        <button className={classes.button} onClick={handleCheckoutClick} >Proceed to Checkout</button>
  
    </div>
  )
}

export default withRouter(Subtotal);
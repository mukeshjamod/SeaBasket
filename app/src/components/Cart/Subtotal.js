import React,{useContext} from 'react';
import classes from './Subtotal.module.css';
import { useStateValue } from '../../store/CartProvider';
//  import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase';

const Subtotal = () => {

  const [{cart}] = useStateValue();
  const{auth} = useContext(FirebaseContext);
  const navigate = useNavigate();
  
  const getCartTotal = (cart) =>{
  return cart?.reduce((amount,item) =>item.price + amount, 0);
  }

const handleCheckoutClick = () =>{
  if(auth && typeof auth  === 'function'){
    navigate('/payment');
  }else{
   navigate('/Address');
  }
}


  return ( <div className={classes.subtotal}>
    <div
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

export default Subtotal;
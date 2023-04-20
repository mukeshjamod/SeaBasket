import React from "react";
import classes from './CartItem.module.css';
import { useStateValue } from "../../store/CartProvider";


const CartItem = ({id,title,image,rating,price}) =>{

    const [{cart}, dispatch] = useStateValue();

    const removeItem = () =>{
        dispatch({
            type: 'REMOVE',
            id: id
        })
    }

    return(
        <div className={classes.cart}>
            <img className={classes.image} src={image} alt=""/>
            <div className={classes.info}>
            <p>{title}</p>
            <p>{price}</p>
            
            <div className={classes.rating}>
                {
                    Array(rating).fill().map((_) =>(
                    <span>*</span>))
                }
            </div>
           
            <button onClick={removeItem}>Remove from the Cart</button>
        </div> </div>
    )
};

export default CartItem;
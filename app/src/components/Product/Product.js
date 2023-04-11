import React from 'react';
import classes from  './Product.module.css';
import { useStateValue } from '../../store/CartProvider';
import { NavLink } from 'react-router-dom';

const Product = ({id,title,image,price,rating}) => {
  const [{cart}, dispatch] = useStateValue();
  const addToCart = () =>{
    dispatch({
    type: 'ADD',
    item: {
      id: id,
      title:title,
      image:image,
      price:price,
      rating:rating
    }
    })
    
  }
  return (
    <div className={classes.product}>
        <div className={classes.info}>
            <p>{title}</p>
            <p className={classes.price}>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className={classes.rating}>
                {
                Array(rating)
                .fill()
                .map((_)=>(
                <p>*</p>
                ))
                }
            </div>
        </div>
        <NavLink to='/singleProduct'>

        <img src={image} alt="product" />
        </NavLink>
        <button onClick={addToCart} >Add to Cart</button>
    </div>
  )
}

export default Product;
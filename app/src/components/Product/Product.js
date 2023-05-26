import React from 'react';
import classes from  './Product.module.css';
import { useStateValue } from '../../store/CartProvider';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";


const Product = ({id,title,image,price,rating}) => {
  const [{cart},dispatch] = useStateValue();

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
    toast.success("Item added to cart successfully",{position: toast.POSITION.TOP_RIGHT});
    console.log(toast)
  };

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
        <NavLink to={`/products/${id}`}>

        <img src={image} alt="product" />
        </NavLink>
        <button onClick={addToCart} >Add to Cart</button>
    </div>
  )
}

export default Product;

import React from 'react';
import classes from  './Product.module.css';

const Product = ({id,title,image,price,rating}) => {
  // const addToCart = () =>{
  //   dispatchEvent({
  //   type: 'ADD_TO_CART',
  //   item: {
  //     id: id,
  //     title:title,
  //     image:image,
  //     price:price,
  //     rating:rating
  //   }
  //   })
    
  // }
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
        <img src={image} alt="product" />
        <button  >Add to Cart</button>
    </div>
  )
}

export default Product;
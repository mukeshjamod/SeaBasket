import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../pages/Home';
import classes from './SingleProduct.module.css';


const ProductPage = ({ product }) => {

  return (
    <div className={classes.single}>
    <>  
     <img className={classes.image} src={product.image} alt={product.title}></img>
      <h1 className={classes.title}>{product.title}</h1>
      <p className={classes.rating}>{product.rating}</p>
      <p className={classes.price}>price: ${product.price}</p>
   
    </>
    </div>



  );
};

const SingleProduct = () => {

  const { id } = useParams();
  const product = products
    .find((product) => product.id === parseInt(id));


  if (!product) {
    return <div> Loading....</div>
  }

  return (

    <ProductPage product={product} />

  )
};

export default SingleProduct;

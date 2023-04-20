import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../pages/Home';
import classes from './SingleProduct.module.css';


const ProductPage = ({ product }) => {

  return (
    <div className="row">
    <div className={classes.single}>
    
<div style={{maxHeight:309,maxWidth:309}} className={classes.leftCol}>

     <img className={classes.image} src={product.image} alt={product.title}></img>
</div>

<div className={classes.leftCenterCol}>
  <h1 className={classes.title}>{product.title}</h1>
  </div>      
<div className={classes.rightCol}>

      <p className={classes.rating}>{product.rating}</p>
      <p className={classes.price}>price: ${product.price}</p>
   
</div>
    
    </div>

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
    <div id='dp' className={classes.container}>
       <ProductPage product={product} />
    </div>
   

  )
};

export default SingleProduct;

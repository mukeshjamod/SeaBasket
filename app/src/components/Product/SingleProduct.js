import React from 'react';
import { useStateValue } from '../../store/CartProvider';
import { Link } from 'react-router-dom';


const SingleProduct = ({id,image,name,price}) => {

   const[{cart}] =useStateValue();
  return (
    <div>
   
      <Link>
      <img src={image} alt='product'/>
      </Link>
      <div><Link>{name}</Link></div>
      <div>{cart.brand}</div>
       <div>{price}</div>
        <div>{cart.rating} </div>
    </div>
        // Stars ({cart.numReviews})</div>
  )
}

export default SingleProduct;
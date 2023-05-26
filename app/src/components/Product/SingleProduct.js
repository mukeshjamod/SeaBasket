import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../pages/Home';
import  './SingleProduct.css';


const ProductPage = ({ product }) => {

  return (
    <div className="productsContainer">
      <div className="productBox">

        <div className="productsImageDiv">
          <a className='productsImageLink'>

            <img className='productsImage' src={product.image} alt={product.title}></img>
          </a>
        </div>
        <div className='productsTitleDiv'>
          <a className='productsTitleLink'><p className='productsTitle'>{product.title}</p></a>
        </div>

        <div className="productsRatingDiv">
        <p >{product.rating}</p>
          {/* <span> <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
          <span> <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
          <span> <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
          <span> <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
          <span> <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span> */}
        </div>
        <div className='productsReviewDiv'><span className='productsReviewText'>{product.review}</span></div>
        <br />
        <div className='productsPriceDiv'>
          <p className='productsPrice'><span className='productsPriceDollar'>$</span><span className='productsPriceText'>{product.price}</span></p>
        </div>

        {/* <div className={classes.leftCenterCol}>
          <h1 className={classes.title}>{product.title}</h1>
        </div>
        <div className={classes.rightCol}>

          <p className={classes.rating}>{product.rating}</p>
          <p className={classes.price}>price: ${product.price}</p>

        </div> */}

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
    <div  className="card productsSectionContainer">
      <ProductPage product={product} />
    </div>


  )
};

export default SingleProduct;

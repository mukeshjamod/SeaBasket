import React from 'react';
import classes from './Home.module.css';
import Product from '../components/Product/Product';


export const products = [{
  id: 1,
  title: "The Start",
  price: 54.65,
  category: "elctronic",
  rating: 4,
  image: "https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
}, {
  id: 2,
  title: "The Start",
  category: "elctronic",
  price: 54.65,
  rating: 4,
  image: "https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"

}, {
  id: 3,
  title: "The Start",
  price: 54.65,
  category: "elctronic",
  rating: 4,
  image: "https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
}
];
const Home = () => {



  return (
    <div className={classes.home}>
      {/* <img className={classes.image}
        src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aURrton0L._SX3000_.jpg' alt=''>
      </img> */}


      <div className={classes.row}>
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            rating={p.rating}
            image={p.image}
          />
        ))}
      </div>
      <div className={classes.row}>
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            rating={p.rating}
            image={p.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import classes from './Home.module.css';
import Product from '../components/Product/Product';

const Home = () => {
  return (
    <div className={classes.home}>
        <img  className={classes.image}
        src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aURrton0L._SX3000_.jpg' alt=''>
        </img>
        <div className={classes.row}>
          
        <Product
            id="121314"
            title="The Start"
            price={54.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            />
            <Product
            id="121314"
            title="The Start"
            price={154.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            />
            <Product
            id="121314"
            title="The Start"
            price={54.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            />
        </div>
        <div className={classes.row}>
        <Product
            id="121314"
            title="The Start"
            price={54.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            />
            <Product
            id="121314"
            title="The Start"
            price={154.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            />
            <Product
            id="121314"
            title="The Start"
            price={54.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            />
             <Product
            id="121314"
            title="The Start"
            price={54.65}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            />
        </div>
    </div>
  )
}

export default Home;
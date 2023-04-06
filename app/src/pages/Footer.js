import React from 'react';
// import FooterPage from '../components/Layout/Footer';


import classes from './Footer.module.css';
import FooterPage from '../modal/Footer';
function Footer() {
  return (
    // <FooterPage></FooterPage>
    <div className={classes.footer}>
      
      <div className={classes.top}>
        <h1>Back to Top</h1>
      </div>
      <div className={classes.down}> 
        <div>
         <FooterPage></FooterPage>
        </div>
          
      </div>
      </div>
  );
}

export default Footer;
import React from 'react';
// import FooterPage from '../components/Layout/Footer';


import classes from './Footer.module.css';
import FooterPage from '../modal/Footer';
import FooterEndPage from '../modal/FooterEndPage';
function Footer() {

  const backhandler = (event) =>{
event.preventDefault();


document.documentElement.scrollTop = 0;
  }
  return (
    // <FooterPage></FooterPage>
    <div className={classes.footer}>
      
      <div className={classes.top} onClick={backhandler}>
        <h1 >Back to Top</h1>
      </div>
      <div className={classes.down}> 
        <div>
         <FooterPage></FooterPage>
         <FooterEndPage/>
        </div>
          
      </div>
      </div>
  );
}

export default Footer;

import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import OffCanvasMenu from '../components/Layout/OffCanvasMenu';

const NavBar = () => {
   const[isMenuOpen , setIsMenuOpen] = useState(false);
   
const toggleMenu = () =>{
  setIsMenuOpen(!isMenuOpen);
};

  return (
    
    <div className={classes.nav}>
      <div className={classes.left}>    
        <button onClick={toggleMenu}>
          <CgMenu size={20} /> 
            <span>All</span> 
          </button>
        </div>
        {isMenuOpen && <OffCanvasMenu onClose={()=>setIsMenuOpen(false)}/>}

      <Link className={classes.seller}>
        <div >Best Sellers</div>
      </Link>
      <Link className={classes.book}>
        <div>Books</div>
      </Link>
      <Link className={classes.mobile}>
        <div >Mobiles</div>
      </Link>
      <Link className={classes.shoes}>
        <div>Shoes</div>
      </Link>
      <Link className={classes.electronic}>
        <div >Electronic</div>
      </Link>
      <Link className={classes.deals}>
        <div >Today's Deals</div>
      </Link>

    </div>)
      
   
}

export default NavBar;
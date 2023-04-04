import React from 'react';
import logo from '../images/logo.png';
import classes from './Header.module.css';
import { FaBeer, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} width={90} height={77} alt='seaflux-logo'/>
       </div>
      <div className={classes.search}>
        <input type="text" placeholder="Search products" />
        <button type="submit">Search</button>
      </div>
      <br/>
      <div><FaBeer/></div>
      <div><a href="/login">Login</a></div>
      <div className="user-menu"> 
        
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">1</span>
        </div>
      </div>
    </header>
  );
}

export default Header;



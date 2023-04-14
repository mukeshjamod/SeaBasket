import React from 'react';
import { CgMenu } from 'react-icons/cg';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <Link className={classes.menu}>
          <CgMenu size={20} /></Link>
        <span>All</span> </div>
      <Link className={classes.seller}>
        <div >Best Sellers</div>
      </Link>
      <Link className={classes.book}>
        <div>Books</div>
      </Link>
      <Link className={classes.mobile}>
        <div >Mobiles</div>
      </Link>
      <Link className={classes.electronic}>
        <div >Electronic</div>
      </Link>
      <Link className={classes.deals}>
        <div >Today's Deals</div>
      </Link>



    </div>
  )
}

export default NavBar;
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import classes from './Header.module.css';
import { FaBeer, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../../store/CartProvider';
import {auth } from '../../Firebase';

     function Header() {
      const [{cart,user}, dispatch] = useStateValue();

      // console.log("my cart", cart);
      const logoutUSer = () =>{
        if(user){
          auth.signOut();
        }
      };

    return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} width={90} height={77} alt="logo"/>
       </div>
       <div className={classes.search}>
        <input type="text" placeholder="Search products" />
        <button type="submit">Search</button>
      </div>
       
      
      <br/>
      <div><FaBeer/></div>
      <Link to={!user && "/login"} className={classes.link}>
      <div onClick={logoutUSer} className={classes.option}> 
      <span>Hello , {user}</span>
      <span>
        {user ? 'signout' : 'sign in'}
      </span>
        </div>
        </Link>
        <Link>
         <div className={classes.icon}>
          <FaShoppingCart />
          <span className={classes.count}>{cart.length}</span>
         </div>
     
        </Link>
     
    </nav>
  );
}

export default Header;



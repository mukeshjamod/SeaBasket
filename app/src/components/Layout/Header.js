import { Link} from 'react-router-dom';
import logo from '../images/logo.png';
import classes from './Header.module.css';
import { FaBeer,FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../../store/CartProvider';


     function Header() {
      const [{cart}, dispatch] = useStateValue();
      // const Navigate = useNavigate();

      console.log("my cart", cart);

      // function cartIconHandler (){
      //   Navigate('/checkout');
      // }
      
    return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} width={90} height={77} alt="logo"/>
       </div>
       <div className={classes.search}>
        <input type="text" placeholder="Search products" />
        {/* <button type="submit">Search</button> */}
        <FaSearch size={5} color={'green'}/>
      </div>
       
      
      <br/>
      <div><FaBeer/></div>
      <Link to='/' className={classes.link}>
      <div className={classes.option}> 
      <span>Hello,user</span>
      <span>
        sign in
      </span>
        </div>
        </Link>
        <Link to='/checkout'>
         <div className={classes.icon}>
          <FaShoppingCart />
          <span className={classes.count}>{cart.length}</span>
         </div>
     
        </Link>
     
    </nav>
  );
}

export default Header;



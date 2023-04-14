import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import classes from './Header.module.css';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../../store/CartProvider';
import { MdArrowDropDown } from 'react-icons/md';
import Dropdown from './Dropdown';


function Header() {
  const [{ cart }] = useStateValue();

  const options = [
  {value:'green', label:'green'},
  {value:'blue',  label:" blue"}
  ]



  return (
    <nav className={classes.header}><Link to='/'><div className={classes.logo}>
      <img src={logo} width={90} height={77} alt="logo" />
    </div>
    </Link>

      <div className={classes.search}>
        <div className={classes.dropdown}>
          <span>
            All
          </span>
          <MdArrowDropDown size={20} />
          <Dropdown placeholder="Select ..." options={options}/>

        </div>
        <input type="text" placeholder="Search Seabasket.in" />

        <div className={classes.searchIcon}><FaSearch size={25} /></div>
      </div>

      <Link to='/profile' className={classes.userIcon}><FaUser size={25} /></Link>

      <Link to='/login' className={classes.link}>
        <div className={classes.option}>
          <span>Hello, Sing in</span>

        </div>
      </Link>
      <Link to='/checkout'>
        <div className={classes.icon}>
          <FaShoppingCart size={25} />
          <span className={classes.count}>{cart.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

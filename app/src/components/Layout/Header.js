import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.css';
import MyDropdownButton from './MyDropdownButton';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from '../../store/CartProvider';
import { FirebaseContext } from '../../Firebase';
import { useContext, useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
// import BasicButton from './DropDown';

// import { MdArrowDropDown } from 'react-icons/md';
// import Dropdown from './Dropdown';


function Header() {
  const [{ cart }] = useStateValue();
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();


  const signOutHandler = () => {
   signOut(auth);
    navigate('/');
  };

  const [userEmail, setUserEmail] = useState('');
  console.log('logout')
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email.split("@")[0];
        setUserEmail(email);
      } else {
        setUserEmail('');
      }
    })
    return unsubscribe;
  }, [auth])
  console.log('user')

  // const options = [
  // {value:'green', label:'green'},
  // {value:'blue',  label:" blue"},
  // {value:'slow', label:'slow'}
  // ]



  return (
    <nav className="header d-flex navbar navbar bg-dark justify-content-between position-sticky">
      <Link to='/'><div className="seafluxLogoDiv">
        <img src={logo} alt="logo" width={90} height={83} className="Seafluxlogo" />
      </div>
      </Link>

      <div className="search  col-md-6 col-sm-4">
        <div className="dropdown">


          <MyDropdownButton />
          {/* <MdArrowDropDown size={20} /> */}
          {/* <Dropdown options={options}/> */}

        </div>
        <input className="" style={{ fontSize: 14, paddingLeft: 10 }} type="text" placeholder="Search Seabasket.in" />

        <div className="searchIcon"><FaSearch size={20} /></div>
      </div>

      <Link to='/profile' className="userIcon d-flex "><FaUser size={25} /></Link>

      <div className="navTextDivAccount">
        
          <p className="navTex">
            Hello, {userEmail ? userEmail : "Sign in"} <br />

            <i class="fas fa-caret-down"></i>
          </p>
       
        <ul className="dropdown-content">
          {userEmail ? (
            <div className="navSignOutDiv">
              <br />
              <div className="navSignOutContainer">
                <p className="navSignOutTitle">Your Account</p>
                <p
                  className="navSignOutYourAccount"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Your Account
                </p>
                <p
                  className="navSignOutWishList"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/cart/:id");
                  }}
                >
                  Your Wish List
                </p>
                <p
                  className="navSignOutOrders"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Your Orders
                </p>
                <p className="navSignOutSignOut" onClick={signOutHandler}>
                  Sign Out
                </p>
              </div>
            </div>
          ) : (
            <div className="navSignInDiv">
              <br />
              <button
                className="navSignInBtn"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Sign in
              </button>
            </div>
          )}
        </ul>
      </div>
      <Link to='/checkout'>
        <div className="icon">
          <FaShoppingCart size={25} />
          <span className="count">{cart.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

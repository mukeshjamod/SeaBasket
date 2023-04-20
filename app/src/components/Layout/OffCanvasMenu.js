import React from 'react';
import './OffCanvas.css';
import { Link } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import CloseButton from 'react-bootstrap/CloseButton';
const OffCanvasMenu = () => {
  return (
    <div id="hmenu-container" >
      <div id="hmenu-canvas-background" className='hmenu-dark-bkg-color hmenu-opaque'>
        <div className="nav-sprite hmenu-close-icon">
          <CloseButton/>
        </div>
      </div>
      <div id="hmenu-canvas">
        <Link to='/login' className='profile'> 
        <div  id="hmenu-customer-profile" >
          <div id="hmenu-customer-profile-left">
          <FaUserCircle size={25}/>
          </div>
          <div id="hmenu-customer-profile-right">
            <div id="hmenu-customer-name">
              <b>Hello, sign in</b>
            </div>
          </div>
        </div>
        </Link>
       

      <div id="hmenu-content">
        
        <ul className="hmenu hmenu-visible" >

          <h2 className="hmenu-title">Treding</h2>
          <li><a className="hmenu-item" href='/' >Best Sellers</a></li>
          <li><a className="hmenu-item" href='/'> New Releases</a></li>
          <li><a  className='hmenu-item' href='/'>Movers and Shakers</a> </li>
          <hr />

          <h2 className='hmenu-title'>Digital Content and Devices</h2>
          <li><a className="hmenu-item" href='/'>Echo & Alexa</a> </li>
          <li><a className="hmenu-item" href='/'>Fire TV</a> </li>
          <li><a className="hmenu-item" href='/'>Kindle E-Readers & eBooks</a> </li>
          <li><a className="hmenu-item" href='/'>Audible Audiobooks</a> </li>
          <li><a className="hmenu-item" href='/'>Amazon Prime Video</a> </li>
          <li><a className="hmenu-item"  href='/'>Amazon Prime Music</a> </li>

          <hr />

          <h2 className='hmenu-title'>Shop By Category</h2>
          <li><a className="hmenu-item" href='/'>Mobiles,Computers</a> </li>
          <li><a className="hmenu-item" href='/'>TV,Appliances,Electronics</a> </li>
          <li><a className="hmenu-item" href='/'>Men's Fashion</a> </li>
          <li><a className="hmenu-item" href='/'>Women's Fashion</a> </li>
          <li><a className="hmenu-item" href='/'>See All</a> </li>
          <hr />

          <h2>Programs & Features</h2>
          <li><a className="hmenu-item" href='/'>Gift Cards & Mobile Recharges</a> </li>
          <li><a className="hmenu-item" href='/'>Flight Tickets</a> </li>
          <li><a className="hmenu-item" href='/'>Clearances store</a> </li>
         <hr />

          <h2 className='hmenu-title'>Help & Settings</h2>
          <li><a className="hmenu-item" href='/'>Your Account</a> </li>
          <li><a className="hmenu-item" href='/'>Customer Services</a> </li>
          <li><a className="hmenu-item" href='/login'>Sign In</a> </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default OffCanvasMenu;

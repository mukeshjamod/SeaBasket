import React from 'react';
import classes from './Address.module.css';
import { NavLink } from 'react-router-dom';

const Address = () => {
  return (
    <div className={classes.address}>
      <h3 >Add New Address</h3>
      <div><label id='name'>Full Name (First and Last name)</label>
        <input id='name' type='text'/></div>

      <div><label >Mobile number</label>
        <input type='number' id='mobile'/></div>

      <div><label >House no.</label>
        <input type='number' id='house'/></div>

      <div><label>Area</label>
        <input type='text' id='Area'/></div>

      <div><label>Pincode</label>
        <input type='number' id='pincode'/></div>

      <div><label>Town/City</label>
        <input type='text' id='town'/></div>

      <div><label>State</label>
        <input type='text' id='state'/></div>
    
    <button className={classes.add}>ADD Address</button>
    <button className={classes.edit}>Edit Address</button>
    <NavLink to='/payment'>

    <button className={classes.deliver}> Deliver to this address</button>
    </NavLink>
    </div>
  )
}

export default Address;
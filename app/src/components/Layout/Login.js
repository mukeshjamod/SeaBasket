import React from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

const Login = () => {
  return (
   <div className={classes.login}>
    <Link>
    <img className={classes.logo} src={logo} alt="logo"/>
        </Link>
    <div className={classes.container}>
        <h1>Sign In</h1>
        <form>
            <h5>E-mail</h5>
            <input type='email'/>
            <h5>Password</h5>
            <input type='password'></input>
            <button type='submit' className={classes.buttonSign}>Sign In</button>
        </form>

        <p>By signing in, you agree to SEaflux's Terms and Conditons</p>
        <button className={classes.buttonCreate}>Create Your SeaBasket Account</button>
    </div>
   </div>
  )
}

export default Login;
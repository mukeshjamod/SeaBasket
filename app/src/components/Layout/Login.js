import React, { useState } from 'react';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo1.png';
import {auth} from '../../Firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const navigate = useNavigate();
    const[useremail,setUserEmail]=useState('');
    const[userpassword, setUserPassword] = useState('');

 
    const loginHandler = async(event) =>{
        event.preventDefault();

                console.log('jsk');
        await signInWithEmailAndPassword(auth, useremail,userpassword)      
           .then((auth)=>{
            navigate('/');
            const user = auth.user;
            console.log(user);
           })
           .catch(e => alert(e.message))

    }

    const signupuser = async(event) =>{
        event.preventDefault();

        await createUserWithEmailAndPassword(auth, useremail,userpassword)
        .then((auth)=>{
          

            const user = auth.user;
            console.log(user);
        })
        .catch(e=>alert(e.message))
    }
    
  return (
   <div className={classes.login}>
    <Link>
    <img className={classes.logo} src={logo} alt="logo"/>
        </Link>
    <div className={classes.container}>
        <h1>Sign In</h1>
        <form>
            <h5>E-mail</h5>
            <input value={useremail} onChange={event =>setUserEmail(event.target.value)} type='email'/>
            <h5>Password</h5>
            <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type='password'></input>
            <button onClick={loginHandler} type='submit' className={classes.buttonSign}>Sign In</button>
        </form>

        <p>By signing in, you agree to Seabasket's Terms and Conditons</p>
        <button onClick={signupuser} className={classes.buttonCreate}>Create Your SeaBasket Account</button>
    </div>
   </div>
  )
}

export default Login;
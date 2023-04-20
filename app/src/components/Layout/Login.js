import React, { useState } from 'react';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo1.png';
import {auth} from '../../Firebase';
import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const navigate = useNavigate();
    const[useremail,setUserEmail]=useState('');
    const[userpassword, setUserPassword] = useState('');

 
    const loginHandler = async(event) =>{
        event.preventDefault();

               
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
    };

    const forgotHandler = async(event) =>{
        event.preventDefault();
         console.log('jay');

         navigate('/');
        await sendPasswordResetEmail(auth,useremail)
        .then(()=>alert('password reset email sent successfully'))
        .catch((e) =>alert(e.message))
    }
    
  return (
   <div className={classes.login}>
   <Link to='/'>
     <img className={classes.logo} src={logo} alt="logo"/>
         </Link>
     <div className={classes.container}>
         <h1>Sign in</h1>
         <form>
             <h5>E-mail</h5>
             <input className={classes.input} value={useremail} onChange={event =>setUserEmail(event.target.value)} type='email'/>
             <h5>Password</h5>
             <input className={classes.input} value={userpassword} onChange={event => setUserPassword(event.target.value)} type='password'></input>
             <button onClick={loginHandler} type='submit' className={classes.buttonSign}>Sign In</button>
             <button onClick={forgotHandler} type='forgot' className={classes.buttonSign}>ForgetPassword</button>
         </form>

         <p>By continuing, you agree to Amazon's <span style={{color:"#0066C0"}}>Conditions of Use</span> and <span style={{color:"#0066C0"}}>Privacy Notice.</span> </p>
         <hr/>

         <button onClick={signupuser} className={classes.buttonCreate}>Create Your SeaBasket Account</button>
     </div>
   </div> 
  )
}

export default Login;
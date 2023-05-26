import React from 'react';
import './Profile.css';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {


  const { auth } = useContext(FirebaseContext);
  const [userEmail, setUserEmail] = useState('');



  const navigate = useNavigate();



  const signOutHandler = () => {
  navigate('/');
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return unsubscribe;
  }, [auth]);


  return (
<>

<div className="navTextDivAccount">
            
                <p className="navText">
                  Hello, {userEmail ? userEmail : "Sign in"} <br />
                  <span className="navHighText">Account & Lists </span>
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
                          navigate("/orderhistory");
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
    </>
  )
}

export default Profile;
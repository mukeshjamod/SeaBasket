import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
  apiKey: "AIzaSyAxqcjfcONY06eDzvkzoQkPhUZuyMQGbTM",
  authDomain: "react-http-14c45.firebaseapp.com",
  databaseURL: "https://react-http-14c45-default-rtdb.firebaseio.com",
  projectId: "react-http-14c45",
  storageBucket: "react-http-14c45.appspot.com",
  messagingSenderId: "1067227336213",
  appId: "1:1067227336213:web:4f011a7292b97aa230c81c"
});


const db = firebaseApp.firestore();
const  auth = firebase.auth();

export {db,auth};


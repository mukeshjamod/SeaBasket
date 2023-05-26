import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './store/CartProvider';
import cartReducer, { initialState } from './store/CartReducer';
import { FirebaseProvider } from './Firebase';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
    <CartProvider initialState={initialState} reducer={cartReducer}>
      <App/>
    </CartProvider>
    </FirebaseProvider>
  </React.StrictMode>
);



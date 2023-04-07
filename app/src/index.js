import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';
import cartReducer, { initialState } from './store/CartReducer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider initialState={initialState} reducer={cartReducer}>
      <App/>
    </CartProvider>
  </React.StrictMode>
);



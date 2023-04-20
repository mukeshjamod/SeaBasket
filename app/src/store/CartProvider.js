 
import React, { useContext, useReducer } from "react";


export const CartContext = React.createContext(

);



const CartProvider = ({reducer, initialState,children}) =>{
    return(
        <CartContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;

export const useStateValue = () => useContext(CartContext);
export const initialState = {
    cart: [],
}

const cartReducer = (state,action) =>{
    switch(action.type){
     case 'ADD':
         return {
             ...state,
             cart: [...state.cart, action.item]
         }
    }

    // if(action.type === 'ADD')
    // {const cart = [...state.cart]}
 }
 
 export default cartReducer;
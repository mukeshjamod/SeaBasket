export const initialState = {
    cart: [],
    loginHandler: null,
}

const cartReducer = (state,action) =>{
    switch(action.type){
     case 'ADD':
         return {
             ...state,
             cart: [...state.cart, action.item]
         }
         case 'LOGIN':
            return {
                ...state,
                loginHandler: action.user
            }

            case 'REMOVE':
                let newcart = [...state.cart]
                const index = state.cart.findIndex((cartItem)=>cartItem.id ===action.id)
                if(index >= 0){
                    newcart.splice(index,1)
                }
                else{console.log('these were errors while removing product from cart')
            }
            return {...state, cart:newcart}
    }

}
export default cartReducer;

    // if(action.type === 'ADD')
    // {const cart = [...state.cart]}
 
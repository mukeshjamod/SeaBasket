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
    }

}
export default cartReducer;

    // if(action.type === 'ADD')
    // {const cart = [...state.cart]}
 
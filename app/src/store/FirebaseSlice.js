import {configureStore} from '@reduxjs/toolkit';
import {reducer as firebaseReducer} from './firebaseSlice';


const store = configureStore({
    reducer:{
        firebase:firebaseReducer,
    },
});

export default store;
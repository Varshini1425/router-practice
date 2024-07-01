import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from '../features/userLoginSlice';

export const store= configureStore({
    reducer:{
        userLogin: userLoginReducer,
    },
});

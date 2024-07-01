import {createSlice} from '@reduxjs/toolkit';

export const userLoginSlice = createSlice({
    name:'user',
    initialState:{
        value:"",
    },
    reducers:{
        setInput:(state,action)=>{
            state.value=action.payload;
        },
        setPassword: (state,action)=>{
            state.value=action.payload;
        },
    },
});

export const {setInput,setPassword} = userLoginSlice.actions;
export default userLoginSlice.reducer;

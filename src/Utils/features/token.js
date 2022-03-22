import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
    name:'token',
    initialState:{value:''},
    reducers:{
        login:(state,action) =>{ 
            state.value = action.payload
        },
        logout:(state,action) =>{
            state.value = ''
        }
    }
})

export const {logout} = tokenSlice.actions
export const {login} = tokenSlice.actions


export default tokenSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:'coin',
    initialState:{value:[]},
    reducers:{
        saveCoins:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const {saveCoins} = dataSlice.actions

export default dataSlice.reducer
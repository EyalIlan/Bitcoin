import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({ // contain the information action reducer and the name of the state
    name:"user",
    initialState:{value:{name:'',age:0,email:''}},
    reducers:{
        login:(state,action) =>{ // the state argiment hold the current value of the state. 
                //action hold 2 arguments: payload -> the arugments sends "object the user sends"
                //type -> choose the type of the action
                state.value = action.payload
        },
        change:(state,action) =>{
            state.value.age++
        }
    }
})
export const {login} = userSlice.actions
export const {change} = userSlice.actions

export default userSlice.reducer


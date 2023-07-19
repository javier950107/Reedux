import { createSlice } from "@reduxjs/toolkit";
import { addUserAsync, initUserAsync } from "../actions/userActions";

const initialState = []
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        initUser: (state, action) =>{
            return action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(addUserAsync.pending, (state)=>{

            })
            .addCase(addUserAsync.fulfilled, (state,action)=>{
                state.push(action.payload)
            })
            .addCase(addUserAsync.rejected, (state)=>{

            })
            .addCase(initUserAsync.fulfilled,(state,action)=>{
                return action.payload
            })
    }
})

export const {initUser , addUser} = userSlice.actions
export default userSlice.reducer
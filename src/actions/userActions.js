import { fetchDataGet, fetchDataPost } from "../service/user";
import { createAsyncThunk} from "@reduxjs/toolkit";

export const addUserAsync = createAsyncThunk('users/addUser', async (user)=>{
    const response = await fetchDataPost("http://localhost:8001/insert", user)
    return await response.json()
})

export const initUserAsync = createAsyncThunk('users/initUser', async ()=>{
    const response = await fetchDataGet("http://localhost:8001/get")
    return await response.json()
})



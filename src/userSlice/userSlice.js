import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'


const initialState={
    users:[],
    loading:false,
    error:''
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/users' }),
    endpoints: (builder) => ({
      getSingleUser: builder.query({
        query: () => `/1`,
      }),
    }),
  })

export const {useGetSingleUserQuery } = userApi

export const getUser = createAsyncThunk('getUser',async()=>{
    const response = await fetch('https://dummyjson.com/users/1')
    const data=await response.json()
    return data
})

export const userSlice=createSlice({
    name:'users',
    initialState,
    extraReducers:{
        [getUser.pending]:(state)=>{
            state.loading=true
        },
        [getUser.fulfilled]:(state,action)=>{
            state.loading=false
            state.users=action.payload
        },
        [getUser.rejected]:(state,action)=>{
            state.error=action.payload.error

        },
    }

})


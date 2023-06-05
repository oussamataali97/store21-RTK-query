import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'


const initialState={
    userAuthenticated:[],
    users:[],
    loading:false,
    loggedIn:false,
    error:'',
    tokens:null,
}

export const userAuth = createAsyncThunk('userAuth',async({username,password})=>{
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: username,
    password: password,
    })
  })
  const data=await response.json()
  console.log(data,'userpyload')
  return data
})



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    tagTypes:['users'],
    endpoints: (builder) => ({
      getSingleUser: builder.query({
        query: () => "/users/1",
        providesTags :['users']
      }),
      addNewUser: builder.mutation({
        query: (user) => ({
          url: `users/add`,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        }),
        invalidatesTags: ['users'],
      })
    }),

  })

export const {useGetSingleUserQuery , useAddNewUserMutation } = userApi

export const getUser = createAsyncThunk('getUser',async(id)=>{
    const response = await fetch(`https://dummyjson.com/users/${id}`)
    const data=await response.json()
    return data
})

export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
      logOut : (state)=>{
        state.loggedIn=false
        state.tokens=''
        window.localStorage.clear()
      },
      logIn : (state)=>{
        state.loggedIn=true
      }
    },
    extraReducers:{
        [getUser.pending]:(state)=>{
            state.loading=true
        },
        [getUser.fulfilled]:(state,action)=>{
            state.loading=false
            state.users=action.payload
            console.log(action)
        },
        [getUser.rejected]:(state,action)=>{
            state.error=action.payload.error

        },

        [userAuth.fulfilled]:(state, {payload})=>{
          console.log(payload,'pay')
          state.tokens=payload.token
          state.userAuthenticated=payload

          if(state.tokens){
            window.localStorage.setItem('userToken',state.tokens)
            state.loggedIn=true
          }

        },

    }

})

export const {logOut,logIn } = userSlice.actions


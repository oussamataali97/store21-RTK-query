import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../userSlice/userSlice";
import { userApi } from "../userSlice/userSlice";
import { productApi } from "../productslice/productSlice";
export const store = configureStore({
    reducer:{
        users:userSlice.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [productApi.reducerPath]:productApi.reducer,
    },




    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        productApi.middleware,
        userApi.middleware
    ]),

})

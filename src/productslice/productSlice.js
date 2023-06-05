import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => `/products`,
        providesTags:['products'],
      }),
      getSingleProduct : builder.query({
        query :(id) => `/product/${id}`,
        providesTags:['products'],

      })
      ,
      getCategories : builder.query({
        query :() => `/products/categories`,
        providesTags:['products'],
      })
      ,
      getCategoriesProduct : builder.query({
        query :(category) => `/products/category/${category}`,
        providesTags:['products'],
      }),


    }),
  })


  export const {useGetAllProductsQuery,useGetSingleProductQuery ,useGetCategoriesQuery,useGetCategoriesProductQuery} = productApi
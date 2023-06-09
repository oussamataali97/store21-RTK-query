import React, { useEffect, useState } from 'react'
import { getUser, logOut } from '../userSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useGetUserCartQuery } from '../userSlice/userSlice'
import Modal from '../utils/Modal'

const ProfilePage = () => {

  const dispatch = useDispatch()
  const [showModal, setShowModal] =useState(false);

  const { users } = useSelector(state => state.users)
  const { data } = useGetUserCartQuery(users.id)
  console.log(data?.carts, 'cartUser')
  console.log(users, 'profile')

const userData =window.localStorage.getItem('usere')
const profileStats=JSON.parse(userData)


  const handleLogOut =()=>{
   dispatch(logOut())
   localStorage.clear()
  }
if(profileStats){
  return (
    <div>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">{profileStats?.eyeColor}</p>
                <p class="text-gray-400">eyeColor</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">{profileStats?.weight} Kg</p>
                <p class="text-gray-400">Weight</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">{profileStats?.height}</p>
                <p class="text-gray-400">Height</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src={profileStats?.image} alt="" />
              </div>
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <div class="relative py-2">
              <button onClick={()=>setShowModal(true)}>
                <div class="t-0 absolute left-3">
                  <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{data?.carts ? data?.carts?.length : ''}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </button>
                {showModal ? (
        <>
         <Modal setShowModal={setShowModal} data2={data}/>
        </>
      ) : null}
              </div>
              <button
                onClick={handleLogOut}

                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >                       Logout</button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{profileStats?.firstName + ' ' + profileStats?.lastName} <span class="font-light text-gray-500">{profileStats?.age}</span></h1>    <p class="font-light text-gray-600 mt-3">{profileStats?.address?.address}</p>    <p class="mt-8 text-gray-500">{profileStats?.company?.title}</p>    <p class="mt-2 text-gray-500">{profileStats?.university}</p>  </div>  <div class="mt-12 flex flex-col justify-center">    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of consid</p>    <button class="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>  </div></div></div>
    </div>
  )
}

}



export default ProfilePage
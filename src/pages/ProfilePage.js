import React, { useEffect } from 'react'
import { getUser, logOut } from '../userSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const dispatch = useDispatch()

  const {users} = useSelector(state => state.users)
  console.log(users,'profile')
  const navigate = useNavigate()

    return (
      <div>
        <div class="p-16">
          <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p class="font-bold text-gray-700 text-xl">{users?.eyeColor}</p>
                  <p class="text-gray-400">eyeColor</p>
                </div>
                <div>
                  <p class="font-bold text-gray-700 text-xl">{users?.weight} Kg</p>
                  <p class="text-gray-400">Weight</p>
                </div>
                <div>
                  <p class="font-bold text-gray-700 text-xl">{users?.height}</p>
                  <p class="text-gray-400">Height</p>
                </div>
              </div>
              <div class="relative">
                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={users?.image} alt="" />
                </div>
              </div>
              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button
                         class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
  >                       Edit
                </button>
                <button
                onClick={()=>dispatch(logOut())}
                         class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
  >                       Logout</button>
                    </div>
                      </div>
                        <div class="mt-20 text-center border-b pb-12">
                         <h1 class="text-4xl font-medium text-gray-700">{users?.firstName + ' ' + users?.lastName} <span class="font-light text-gray-500">{users?.age}</span></h1>    <p class="font-light text-gray-600 mt-3">{users?.address?.address}</p>    <p class="mt-8 text-gray-500">{users?.company?.title}</p>    <p class="mt-2 text-gray-500">{users?.university}</p>  </div>  <div class="mt-12 flex flex-col justify-center">    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of consid</p>    <button class="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>  </div></div></div>
      </div>
    )
  }



export default ProfilePage
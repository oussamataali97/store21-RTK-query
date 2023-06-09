import { getUser, logIn } from "../userSlice/userSlice"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { userAuth } from "../userSlice/userSlice"
import { useSelector } from "react-redux"
import {useNavigate } from "react-router-dom"

// CommonJS
export default function SignIn() {
  const { userAuthenticated ,users} = useSelector(state => state.users)
  console.log(users,'localsto')

  const {loggedIn} = useSelector((state)=>state.users)
  const navigate=useNavigate()
  const tokenser = window.localStorage.getItem('userToken')
  useEffect(()=>{
    if(tokenser){
      setTimeout(()=>{
        dispatch(getUser(userAuthenticated.id))
        navigate('/profile')
      },1)
    }

  },[tokenser])




  const [data,setData]=useState(null)
  const dispatch =useDispatch()
  const handleChange =(e)=>{
    setData({...data,[e.target.name]: e.target.value });

  }
  console.log(data)

  const handleSumbit =(e)=>{
    e.preventDefault()
    if(dispatch(userAuth(data))){
      window.localStorage.setItem('usere', JSON.stringify(users))

    }




  }

    return (
      <>
        {/* Pages: Sign In: Boxed */}

        {/* Page Container */}
        <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
          {/* Page Content */}
          <main id="page-content" className="flex flex-auto flex-col max-w-full">
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
              {/* Sign In Section */}
              <section className="py-6 w-full max-w-xl">


                {/* Sign In Form */}
                <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                  <div className="p-5 md:px-16 md:py-12 grow">
                    <p className="font-semibold text-yellow-800 py-2">NB: please User these data to Test :</p>
                    <ul className="border border-[1px] ml-2 p-2 rounded-lg">
                      <li><span className="font-bold mr-3"> User:</span>kminchelle </li>
                      <li><span className="font-bold mr-3">Pass :</span> 0lelplR</li>
                    </ul>
                    <form className="space-y-6" onSubmit={handleSumbit}>
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">Username</label>
                        <input onChange={handleChange} type="username" id="email" name="username" placeholder="Enter your email" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter your password" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between space-x-2 mb-5">
                          <label className="flex items-center">
                            <input type="checkbox" id="remember_me" name="remember_me" className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:ring-offset-gray-900 dark:focus:border-blue-500 dark:checked:bg-blue-500 dark:checked:border-transparent" />
                            <span className="text-sm ml-2">Remember me</span>
                          </label>
                          <a href="#" className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Forgot Password?</a>
                        </div>
                        <button type="submit"  className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                          <svg className="hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
                          <span>Sign In</span>
                        </button>
                        {/* Divider: With Label */}

                        {/* END Divider: With Label */}

                      </div>
                    </form>
                  </div>
                  <div className="p-5 md:px-16 grow text-sm text-center bg-gray-50 dark:bg-gray-700/50">
                    Don’t have an account yet?
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Sign up</a>
                  </div>
                </div>
                {/* END Sign In Form */}


              </section>
              {/* END Sign In Section */}
            </div>
          </main>
          {/* END Page Content */}
        </div>
        {/* END Page Container */}

        {/* END Pages: Sign In: Boxed */}
      </>
    )
  }
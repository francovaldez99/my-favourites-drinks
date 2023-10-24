import React,{useEffect, useState} from 'react'

import { useAuth } from '../../context/AuthContext'
import { register } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

function Register() {
  const {handleShowWarningToast,handleShowErrorToast,handleShowSuccessToast,isAuthenticated}=useAuth()
  const navigate=useNavigate()
const [form,setForm]=useState({
  username:"",
  email:"",
  password:""
})
const HandleChange=(event)=>{

const {name,value}=event.target
setForm({
  ...form,
  [name]:value
})
}
const onSubmit=(event)=>{
  event.preventDefault()
  if(!Object.values(form).every((el)=>!!el)){
    
    handleShowWarningToast("complete all the fields")
    return
  }
  register(form)
  .then((res)=>{handleShowSuccessToast(res.data.message)
  })
  .catch((err)=>{handleShowErrorToast(err.response.data.errMessage)
  console.log(err)})
  
}
useEffect(() => {
  if(isAuthenticated){
    return navigate("/profile")
  }
}, [isAuthenticated])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={onSubmit}>
      <div>
         
          <div className="mt-2 flex items-center  border-b-2 border-teal-500 py-2">
            <input
              id="username"
              name="username"
              type="text"
              
              autoFocus
              placeholder='username'
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={form.username}
              onChange={HandleChange}
            />
          </div>
        </div>
        <div>
          
          <div className="mt-2 flex items-center  border-b-2 border-teal-500 py-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              
              placeholder='Email adress'
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={form.email}
              onChange={HandleChange}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
           
           
          </div>
          <div className="mt-2 flex items-center  border-b-2 border-teal-500 py-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder='password'
              autoComplete="current-password"
              
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={form.password}
              onChange={HandleChange}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-500 hover:bg-teal-700  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Sign in
          </button>
        </div>
      </form>

      
    </div>
  </div>
  )
}

export default Register
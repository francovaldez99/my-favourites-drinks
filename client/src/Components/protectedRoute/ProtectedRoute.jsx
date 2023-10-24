import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate,Outlet } from 'react-router-dom'

function ProtectedRoute() {
  
    const {isAuthenticated}=useAuth()
    if(!isAuthenticated)return <Navigate to="/login"/>
  return  <Outlet/>
  
}

export default ProtectedRoute
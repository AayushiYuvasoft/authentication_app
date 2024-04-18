import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
   const authToken=localStorage.getItem("authToken")
   if(!authToken){
    return <Navigate to="/"/>
   }
  return children

  
}

export default ProtectedRoutes
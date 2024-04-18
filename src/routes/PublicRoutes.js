import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
const Login = lazy(() => import("../pages/auth/Login"))
const Singup = lazy(() => import("../pages/auth/Singup"))
// import Login from '../pages/auth/Login'
// import Singup from '../pages/auth/Singup'


const PrivateRoutess = [
  { path: "/", Component: Login },
  { path: "/singup", Component: Singup }
]

const PublicRoutes = () => {
  const routes = (data) => {
    return data.map((ele, itemIndex) => (
      <Route path={ele.path} key={`route-${itemIndex + 1}`} element={<ele.Component name={ele.Component} />} />
    ))
  }

  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      {routes(PrivateRoutess)}
    </Routes>
    </Suspense>
  )
}

export default PublicRoutes
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
const Layout = lazy(() => import("../components/Layout"))
const User = lazy(() => import("../pages/user/User"))
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"))
const UserForm = lazy(() => import("../pages/user/userForm"))

const PrivateRoutess = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/user", Component: User },
  { path: "/user/form", Component: UserForm }
]
const PrivateRoutes = () => {
  
  const routes = (data) => {
    return data.map((ele, itemIndex) => (
      <Route path={ele.path} key={`route-${itemIndex + 1}`} element={<Layout><ele.Component name={ele.Component} /></Layout>} />
    ))
  }

  console.log("private")
  return (
   <Suspense fallback={<Loader/>}>
    <Routes>
      {routes(PrivateRoutess)}
    </Routes>
    </Suspense>
  )
}

export default PrivateRoutes
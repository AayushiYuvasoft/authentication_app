import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'


const Routing = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes />
            }
          />
          <Route path="/singup" element={<PublicRoutes />} />
          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <PrivateRoutes />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
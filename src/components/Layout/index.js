import React from 'react'
import Header from './Header'
import Sidebar from './SideLayout'

const Layout = ({ children }) => {
  return (
    <div className='main_bar'>
      <Sidebar />
      <div className='app-wrapper'>
        <Header />
        <div className='app-body'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
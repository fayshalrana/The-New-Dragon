import React from 'react'
import NavigationBar from '../Pages/Sheard/NavigationBar/navigationBar'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast';
const LoginLayout = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet> 
        <Toaster />
    </div>
  )
}

export default LoginLayout

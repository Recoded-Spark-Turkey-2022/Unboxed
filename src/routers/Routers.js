import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/Homepage'
import Login from '../pages/login/Login'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default Routers
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/Homepage'
import Login from '../pages/login/Login'
import Blogs from '../pages/blogs/Blogs'
import Team from '../pages/about/Team'
import Overview from '../pages/about/Overview'
import Careers from '../pages/about/Careers'
import Contact from '../pages/contact/Contact'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='login' element={<Login />} />

            <Route path='blogs' element={<Blogs />} />
            <Route path='about/team' element={<Team />} />
            <Route path='about/overview' element={<Overview />} />
            <Route path='about/careers' element={<Careers />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default Routers
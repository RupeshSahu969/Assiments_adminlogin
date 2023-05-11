import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import AdminDashboard from './AdminDashboard'
import Stocks from './Stocks'
import Protfolio from './Protfolio'
import Adminlogin from "./Adminlogin"
import AdminCard from './AdminCard'
const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin' element={<Adminlogin/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<AdminDashboard/>} />
            <Route path='/stock' element={<Stocks/>} />
            <Route path='/portfolio' element={<Protfolio/>} />
            <Route path='/admincard' element={<AdminCard/>} />

        </Routes>
    </div>
  )
}

export default AllRouter
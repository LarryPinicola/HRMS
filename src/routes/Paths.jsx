import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Dashboard from '../pages/Dashboard'

const Paths = () => {
  return (
    <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    
  )
}

export default Paths
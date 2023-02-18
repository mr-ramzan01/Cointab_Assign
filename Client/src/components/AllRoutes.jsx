import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { UserDetails } from '../pages/UserDetails'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/userdetails' element={<UserDetails></UserDetails>}></Route>
    </Routes>
  )
}

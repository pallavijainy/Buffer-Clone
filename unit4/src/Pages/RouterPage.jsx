import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Blog } from './Blog'
import { Customers } from './Customers'
import { Login } from './Login'
import { Pricing } from './Pricing'

export const RouterPage = () => {
  return (

    <Routes>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources/' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/case-studies' element={<Customers/>}/>
        <Route path='/login' element={<Login/>}/>
        
    </Routes>



  )
}

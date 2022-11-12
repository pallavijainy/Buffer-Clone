import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Blog } from './Blog'
import { Create } from './Create'
import { Customers } from './Customers'
import { Home } from './Home'
import { Login } from './Login'
import { Pricing } from './Pricing'
import Publish from './Publish'

export const RouterPage = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources/' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/case-studies' element={<Customers/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/publish' element={<Publish/>}/>
        
    </Routes>



  )
}

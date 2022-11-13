
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { AdminLogin } from './AdminLogin'
import AdminPage from './AdminPage'
import { Blog } from './Blog'
import Channels from './Channels'
import { Create } from './Create'
import { Customers } from './Customers'
import { Facebook } from './Facebook'
import { Home } from './Home'
import { Instagram } from './Instagram'
import { Login } from './Login'
import { Pricing } from './Pricing'
// import PrivateRoute from './PrivateRoute'
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
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/publish' element={<Publish/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
        <Route path='/facebook' element={<Facebook/>}/>
        <Route path='/channel' element={<Channels/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
        
    </Routes>



  )
}

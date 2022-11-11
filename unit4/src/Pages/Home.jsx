import React from 'react'
import { Andbox } from '../component/Andbox'
import { Bluebox } from '../component/Bluebox'
import { DownLogos } from '../component/DownLogos'
import { Footer } from '../component/Footer'
import { Fourth } from '../component/Fourth'
import { Frontone } from '../component/Frontone'
import { MiddleOne } from '../component/MiddleOne'
import { MidTwo } from '../component/MidTwo'
import { Navbar } from '../component/Navbar'
import { Sliding } from '../component/Sliding'
import { Year } from '../component/Year'



export const Home = () => {
  return (
    <div>
  <Navbar/>
      <MiddleOne/>
      <MidTwo/>
      <Frontone/>
      <Fourth/>

<Sliding/>
<Year/>
<Andbox/>
<DownLogos/>
<Bluebox/>
<Footer/>

    </div>
  )
}

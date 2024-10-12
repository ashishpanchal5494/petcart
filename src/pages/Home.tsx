import React from 'react'

import Banner from '../components/Banner'
import Main from '../components/Main'
import Services from '../components/Services'
import LiveStream from '../components/LiveStream'



function Home() {
  return (
    <div>
       
   <Banner backgroundImage="img/banner/dogBanner.jpg" />
   <Main/>
   <Services/>
   <LiveStream/>
   
  
    </div>
  )
}

export default Home

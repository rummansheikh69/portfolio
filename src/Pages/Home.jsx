import React from 'react'
import Navbar from '../Components/Navbar'
import Landing from '../Components/Landing'
import Marquee from '../Components/Marquee'
import About from '../Components/About'
import Eyes from '../Components/Eyes'
import Reviews from '../Components/Reviews'
import Hobby from '../Components/Hobby'
import Surprise from '../Components/Surprise'

function Home() {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Marquee />
        <About />
        <Eyes/>
        {/* <Reviews/> */}
        <Hobby/>
        <Surprise/>
    </div>
  )
}

export default Home
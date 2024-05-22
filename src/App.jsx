import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Meeting from './Pages/Meeting'
import LocomotiveScroll from 'locomotive-scroll';
import Room from './Pages/Room'


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meeting' element={<Meeting/>} />
        <Route path='/room/:roomId' element={<Room seconds={330}/>} />
      </Routes>
    </div>
  )
}

export default App
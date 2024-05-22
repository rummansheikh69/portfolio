import React from 'react'

function Surprise() {
  return (
    <div className=' w-full sm:h-screen bg-yellow-300 py-10 px-20 flex items-center justify-center'>
        <div>
        {["Just Hit", "That Let's Talk Button", "& Ready For The Surprise"].map((item, index)=>{
            return (
                <h1 key={index} className=' text-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase text-black drop-shadow-2xl'>{item}</h1>
            )
        })}
        </div>
        
    </div>
  )
}

export default Surprise
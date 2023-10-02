import React from 'react'
import goa from '../assets/goapic.jpg'
import mumbai from '../assets/mumbaipic.jpg'
// import jaipur from '../assets/jaipurpic.jpg'
import amritsar from '../assets/amritsarpic.jpg'
import leh from '../assets/lehpic.jpg'
import agra from '../assets/tajmahalpic.jpg'
const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center '>
        <h1>A destination for every traveller</h1>
        <p className='py-3'> From cities to mountains to beaches, India has it all!</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={agra} alt="/" style={{ width: '100%', height: '100%' }} />
            <img className='w-full h-full object-cover' src={mumbai} alt="/" style={{ width: '100%', height: '100%' }} />
            <img className='w-full h-full object-cover' src={goa} alt="/" style={{ width: '100%', height: '100%' }} />
            <img className='w-full h-full object-cover' src={leh} alt="/" style={{ width: '100%', height: '100%' }} />
            <img className='w-full h-full object-cover' src={amritsar} alt="/" style={{ width: '100%', height: '100%' }} />
            
            {/* <img className='w-full h-full object-cover' src={jaipur} alt="/" style={{ width: '100%', height: '60%' }} /> */}
        </div>


    </div>
  )
}

export default Destinations
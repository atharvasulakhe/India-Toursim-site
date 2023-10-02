import React from 'react'

import delhi from '../assets/delhipic.jpg'
import mum from '../assets/mumbaipic3.jpg'
import goa from '../assets/goapic2.jpg'
import raj from '../assets/rajasthanpic.jpg'
import kerala from '../assets/keralapic.jpg'
import himalayas from '../assets/himalayaspic.jpg'
const Locations = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='relative'>
            <img src={delhi} alt="/" className='w-full h-full'/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-2 text-2xl font-bold text-white absolute'>New Delhi</p>
            </div>
        </div>
        <div className='relative'>
            <img src={kerala} alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-2 text-2xl font-bold text-white absolute'>Kerala</p>
            </div>
        </div>
        <div className='relative'>
            <img src={mum} alt="/" style={{ width: '100%', height: '100%' }} />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-2 text-2xl font-bold text-white absolute'>Mumbai</p>
            </div>
        </div>
        <div className='relative'>
            <img src={goa} alt="/" style={{ width: '100%', height: '100%' }}/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-2 text-2xl font-bold text-white absolute'>Goa</p>
            </div>
        </div>
        <div className='relative'>
            <img src={raj} alt="/" className='w-full h-full'/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-2 text-2xl font-bold text-white absolute'>Jaipur</p>
            </div>
        </div>
        <div className='relative'>
            <img src={himalayas} alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Leh Ladakh</p>
            </div>
        </div>
    </div>
  )
}

export default Locations
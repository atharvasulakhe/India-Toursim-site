import React from 'react'
import teaestvid from '../assets/teaestvid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={teaestvid} autoPlay loop muted />
        {/* adding overlay that is hint of gray on the video */}
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> 
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>The land of the Incredible</h1>
            <h2 className='py-3'>Ranked #1 in the World Tourism Index</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Search destinations'/>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:'white'}}/></button>
                    {/* style for the search icon. make it white */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
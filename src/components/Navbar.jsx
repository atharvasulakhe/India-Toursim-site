import React from 'react'
import { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import  {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'
import incredible from '../assets/Incredible-India-Color.png'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [logo,setLogo]=useState(false)

    const handlenav=()=>{
        setNav(!nav);
        setLogo(!logo);
    };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10'>
        <div >
            {/* <h1 onClick={handlenav} className={logo ? 'hidden' : 'block'} >INDIA</h1> */}
            <img onClick={handlenav} className={logo ? 'hidden' : 'block w-48 h-50'} src={incredible} alt="/" />
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            {/* <button>Home</button> */}
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>

        {/* Nav Menu */}
        <div onClick={handlenav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20}/>}
            
        </div>

        {/* Mobile menu dropdown */}
        <div onClick={handlenav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] '}>
            <ul>
                <h1>THIS IS INDIA.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube  className='icon'/>
                    <FaPinterest  className='icon'/>
                    <FaInstagram  className='icon'/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
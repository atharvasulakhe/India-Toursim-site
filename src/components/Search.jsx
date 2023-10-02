import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-7'>
        {/* left side */}
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
            <h2>All Inclusive packages for every group</h2>
            <p className='py-4 text-justify'>
            At India Tourism, we offer a diverse range of travel packages catering to every wanderlust-filled heart. Whether you're a solo traveler seeking adventure, a family yearning for unforgettable experiences, a couple in search of romance, or embarking on a dreamy honeymoon, India has something extraordinary to offer you. Our solo traveler packages immerse you in the vibrant tapestry of India's culture, while our family packages create lasting memories amidst its enchanting landscapes. For couples, our romantic getaways infuse magic into every moment, and our honeymoon packages are designed to celebrate love in breathtaking destinations. India's rich heritage, diverse landscapes, and warm hospitality ensure that we have the perfect package for every traveler's dream. Come explore, be amazed, and create memories that will last a lifetime with India Tourism.
            </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:row items-center text-center'>
                    <button><RiCustomerService2Fill size={50}/> </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p>Customer Service is at our core</p>
                    </div>
                </div>
                <div className='flex flex-col lg:row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/> </button>
                    <div>
                        <h3 className='py-2'>EXPLORE FURTHER</h3>
                        <p>Get in detail view of our package inclusions</p>
                    </div>
                </div>

            </div>
        </div>
        {/* right side- form */}
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT! GRAB THE DEAL NOW</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination:</label>
                    <select className='border rounded-md p-2' >
                        <option>New Delhi</option>
                        <option>Goa</option>
                        <option>Rajasthan</option>
                        <option>Maharashtra</option>
                        <option>Kashmir/ Leh</option>
                        <option>Punjab</option>
                        <option>Kerala</option>
                    </select>
                    
                </div>
                <div className='flex flex-col my-4'>
                    <label>Check-in:</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-out:</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className='w-full my-4'>Prices and Availability</button>
            </form>
        </div>
    </div>
  )
}

export default Search
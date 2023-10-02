import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData=[
    {
        url: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1914&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80'
    },
];
const Slidercomp = () => {
    const [slide, setSlide]=useState(0)

    const length=sliderData.length
    const prevSlide=()=>{setSlide(slide === length-1 ? 0:slide+1)}
    const nextSlide=()=>{setSlide(slide===0? length-1:slide-1)}
  return (
    
    // position some button left right so relative not absolute. mx-auto will center it. max-w-1240px will set the max width perf
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'> 
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {sliderData.map((item,index)=> (
            <div className={index===slide ? 'opacity-100':'opacity-0'}>
                {/* <img src={item.url} alt='/' className='w-full h-full rounded-md' /> */}
                {index === slide && (<img src={item.url} alt='/' className='w-full h-full rounded-md' />)}
            </div>
        ))}
    </div>
  );
};

export default Slidercomp
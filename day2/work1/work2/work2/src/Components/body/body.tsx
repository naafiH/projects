import React from 'react'
import Bgimg from "../assets/cosmetics.jpg"
import img1 from "../assets/ss1.png"
import img2 from "../assets/ss1.png"
import img3 from "../assets/ss1.png"
import img4 from "../assets/ss1.png"
export default function body() {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className='bg-cover w-full my-4 sm:my-8 sm:h-[500px] md:h-[700px] rounded-xl backdrop-blur-sm font-font2 bg-center   h-[300px] flex items-center justify-center' style={{backgroundImage:`url(${Bgimg})`, }}>
        <div className='flex flex-col items-center justify-center my-3 bac sm:my-10 backdrop-blur-sm sm:mx-3 md:mx-3   rounded-xl max-w-[700px] '>
            <h1 className=' font-font1  text-[20px] text-center sm:text-[33px] md:text-[47px] lg:text-[53px] py-1 font-bold md:py-3 '>Timeless design made for the long haul.</h1>
           
            <p className='text-center text-[10px] text-zinc-700 max-w-[200px] sm:max-w-[300px] my-2 lg:max-w-[400px] sm:text-[12px]'>solid oak furniture for modern dwellers </p>
            <button className='uppercase px-3 py-2 bg-white rounded-md text-[13px] font-extrabold my-2 font-font1'>shop now</button>
        </div>
    </div>
    <div className='flex items-center justify-evenly mt-3 flex-wrap shadow-md py-5 gap-3 border-zinc-500 '>
            <div className='flex justify-center items-center gap-2 px-2 mx-2 py1 shadow-sm hover:grayscale-0 grayscale  hover:scale-125 ease-in-out duration-300 hover:bg-gray-50'>
                <img className='w-full' src={img1} alt="" />
            </div>
            <div className='flex justify-center items-center gap-2 px-2 mx-2 py1 shadow-sm hover:grayscale-0 hover:scale-125 grayscale ease-in-out duration-300  hover:bg-gray-50'>
                <img className='w-full' src={img2} alt="" />
            </div>
            <div className='flex justify-center items-center gap-2 px-2 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 grayscale ease-in-out duration-300 hover:bg-gray-50'>
                <img className='w-full' src={img3} alt="" />
            </div>
            <div className='flex justify-center items-center gap-2 px-2 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 grayscale ease-in-out duration-300 hover:bg-gray-50'>
                <img className='w-full' src={img4} alt="" />
            </div>
            
            
        </div>
    </div>
  )
}

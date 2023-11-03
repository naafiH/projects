import React from 'react'
import Choose from "../cpmponents/choose"
import Guarenty from "../cpmponents/jobguarent"
import WhatsNext from "../cpmponents/whatsnext"
import img1 from "../assets/amazon.png"
import img2 from "../assets/microsoft.png"
import img3 from "../assets/tesla.png"
import img4 from "../assets/uber.png"

export default function Header() {
  return (
    <div className='max-w-[1240px] mx-auto '>
        <div className='grid sm:grid-cols-3 px-8 pt-28 bg-blue-400 '>
          <div className='sm:col-span-2'>
            <h1 className='text-[29px] sm:text-[45px] md:text-[65px] md:leading-[60px] leading-10 font-extrabold py-5 sm:py-10 md:py-20  max-w-[200px] sm:max-w-[250px] md:max-w-[400px]  '>Goodbye, job search.</h1>
            <button className="py-1 px-5 sm:py-2 sm:px-12 md:px-24 md:py-3 mt-5  md:mt-32 my-5 bg-black text-white text-[12px] sm:text-[17px]  rounded-full ">SignUp</button>
          </div>
          <div className='flex flex-col justify-center sm:justify-end items-start md:mt-48'>
            <p className='text-[11px] tracking-wider'>Land your dream job or its free</p>
            <h1 className='text-[29px] sm:text-[45px] md:text-[65px] leading-10 md:leading-[60px] font-extrabold py-5 sm:py-10 md:py-20  max-w-[200px] sm:max-w-[250px] md:max-w-[400px] tracking-tighter '>Hello, Offred</h1>
          </div>

        </div>
        <div className='flex flex-wrap justify-around gap-4 py-3 grayscale max-w-[900px] mx-auto '>
          <div  className='w-[100px] md:max-w-[150px] h-[100px] flex items-center '>
              <h1>Get offerd by</h1>
          </div>
              <div  className='w-[100px] md:max-w-[150px] h-[100px] flex items-center '>
          <img src={img1} alt="" />
              </div>
              <div  className='w-[100px] md:max-w-[150px] h-[100px] flex items-center '>
          <img src={img2} alt="" />
              </div>
              <div  className='w-[100px] md:max-w-[150px] h-[100px] flex items-center '>
          <img src={img3} alt="" />
              </div>
              <div  className='w-[100px] md:max-w-[150px] h-[100px] flex items-center '>
          <img src={img4} alt="" />
              </div>
          
        </div>
        <Choose/>
        <Guarenty/>
        <WhatsNext/>
    </div>
  )
}

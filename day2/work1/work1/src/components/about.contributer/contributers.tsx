import React from 'react'
import { contibutions } from "../assets"; 

export default function contributers() {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className="flex flex-col justify-start items-start">
      <hr className="border-[2px] w-full" />
        <div className="flex flex-col md:flex-row justify-start items-start py-3">
            <h1 className="font-font2 text-[30px] sm:text-[35px] py-3 md:text-[60px] font-extrabold px-2  "><span className="text-orange-600"> About</span> Us</h1>
            <p className="flex max-w-[350px] lg:max-w-[550px] h-fit text-[12px] sm:text-[18px] text-zinc-600 line-clamp-3     items-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut fugit labore omnis quae autem quos voluptates cupiditate voluptas nesciunt temporibus at ex libero, dolor eos ab vitae impedit maiores!</p>
        </div>
        <hr className="border-[2px] w-full" />
        <div className=" flex w-full  justify-start sm:justify-start   ">

        <div className="flex flex-col md:flex-row md:items-center  justify-start items-start">
        <h1 className="font-font2 text-[30px] sm:text-[35px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Our</span> Contributers</h1>
        <div className=''>
        <h1 className="font-font2 text-[20px] sm:text-[25px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Content</span> Contributers</h1>
        <div className="flex max-w-[300px] md:max-w-[400px] lg:max-w-[800px] h-[100px] md:h-[150px]   scrollbar-hide items-center mx-auto overflow-x-scroll px-5  scroll-smooth">

          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
        </div>
        </div>
        <div className=''>
        <h1 className="font-font2 text-[20px] sm:text-[25px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Design</span> and Development</h1>
        <div className="flex max-w-[300px] md:max-w-[400px] lg:max-w-[800px] h-[100px] md:h-[150px]   scrollbar-hide items-center mx-auto overflow-x-scroll px-5  scroll-smooth">

          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 md:w-20  " src={contibutions.user1} alt="" />
        </div>
        </div>
        </div>
        
        
        </div>
        <hr className="border-[2px] w-full" />
      </div>

    </div>
  )
}

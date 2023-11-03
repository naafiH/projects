import React from "react";
import { contibutions } from "../assets";
import Nav from "../nav/nav";
export default function about() {
  return (
    <div className="  max-w-[1280px] mx-auto">
            <Nav/>
        {/* contributer */}
      <div className="flex flex-col justify-start items-start">
      <hr className="border-[2px] w-full" />
        <div className="flex flex-col justify-start items-start py-3">
            <h1 className="font-font2 text-[30px] sm:text-[35px] py-3 md:text-[60px] font-extrabold px-2  "><span className="text-orange-600"> About</span> Us</h1>

            <p className="flex max-w-[350px] sm:max-w-[450px] md:max-w-[550px] h-fit text-[12px] sm:text-[18px] text-zinc-600 line-clamp-3  text-center   items-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut fugit labore omnis quae autem quos voluptates cupiditate voluptas nesciunt temporibus at ex libero, dolor eos ab vitae impedit maiores!</p>
        </div>
        <hr className="border-[2px] w-full" />
        <div className=" flex w-full  justify-start sm:justify-around  gap-12 flex-wrap ">

        <div className="flex flex-col  justify-start items-start">
        <h1 className="font-font2 text-[30px] sm:text-[35px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Our</span> Contributers</h1>
        <div className="flex max-w-[300px] h-[100px] sm:h-[200px]    items-center mx-auto overflow-x-scroll px-5 scrollbar-hide scroll-smooth">
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
        </div>
        </div>
        <div className="flex flex-col  justify-start items-start">
        <h1 className="font-font2 text-[30px] sm:text-[35px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Our</span> Contributers</h1>
        <div className="flex max-w-[300px] h-[100px] sm:h-[200px]    items-center mx-auto overflow-x-scroll px-5 scrollbar-hide scroll-smooth">
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
        </div>
        </div>
        <div className="flex flex-col  justify-start items-start">
        <h1 className="font-font2 text-[30px] sm:text-[35px]  font-extrabold px-2  py-2"><span className="text-orange-600"> Our</span> Contributers</h1>
        <div className="flex max-w-[300px] h-[100px] sm:h-[200px]    items-center mx-auto overflow-x-scroll px-5 scrollbar-hide scroll-smooth">
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
          <img className="w-10 sm:w-20  " src={contibutions.user1} alt="" />
        </div>
        </div>
        </div>
        <hr className="border-[2px] w-full" />
      </div>

        {/* contributer  end*/}
        
        <div className='grid sm:grid-cols-3'>
            <div className='max-w-[200px] mx-auto my-10 pb-4 backdrop-brightness-150 px-5 py-8'>
                <h1>Web Design</h1>
                <p className='text-[10px] tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci earum sapiente esse laboriosam! Blanditiis fuga maiores ipsam, sint id tempora, similique itaque enim error eligendi voluptate deleniti, quasi unde?</p>
            </div>
            <div className='max-w-[200px] mx-auto my-10 pb-4 backdrop-brightness-150 px-5 py-8'>
                <h1>Web Design</h1>
                <p className='text-[10px] tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci earum sapiente esse laboriosam! Blanditiis fuga maiores ipsam, sint id tempora, similique itaque enim error eligendi voluptate deleniti, quasi unde?</p>
            </div><div className='max-w-[200px] mx-auto my-10 pb-4 backdrop-brightness-150 px-5 py-8'>
                <h1>Web Design</h1>
                <p className='text-[10px] tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci earum sapiente esse laboriosam! Blanditiis fuga maiores ipsam, sint id tempora, similique itaque enim error eligendi voluptate deleniti, quasi unde?</p>
            </div>
        </div>

        <div className='max-w-[600px] mx-auto flex flex-col items-center justify-center'>
      <h1 className='font-font1 uppercase font-bold py-5 text-[17px]  sm:text-[20px]'>keep it with us if you can</h1>
      <p className='text-center text-[10px] text-zinc-300 max-w-[250px] sm:max-w-[300px] my-2 lg:max-w-[400px] sm:text-[12px]'>stay up to date with the latest news, products</p>
      <div className='flex px-2 py-2 bg-zinc-800 max-w-[300px] mx-auto'>
      <input className='bg-transparent' type="text" placeholder='Slippy@starfox.com' />
      </div>
      <p className='max-w-[300px] mx-auto text-center text-[13px] sm:py-[100px] py-4 '>copyright. perion DAQ alright reserved Terms and condition | privacy policy</p>
    </div>
        
    </div>
  );
}

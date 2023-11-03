import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export default function Nav() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className=' flex justify-center mx-auto  max-w-[1240px]'>

    <div className="flex justify-between items-center capitalize  fixed  backdrop-blur-md rounded-md  mx-auto  w-[100%] max-w-[1240px] px-10 h-20 ">
      <h1 className="w-full md:w-fit text-3xl font-bold font-font3 ">Offred</h1>
      <ul className="hidden md:flex">
        <li className="p-4 text-[12px] font-font2">Why Offred</li>
        <li className="p-4 text-[12px] font-font2">How it works</li>
        <li className="p-4 text-[12px] font-font2">FAQ</li>
        <li className="p-4 text-[12px] font-font2">About us</li>
      </ul>
      <div className='hidden md:flex flex-row gap-3 text-[14px]'>

        <button className="py-1 px-3 bg-black text-white  rounded-full">
          SignUp
        </button>
        <button className="py-1 px-3 border-2 rounded-full">
          LogIn
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={nav? "md:hidden fixed left-0 top-0 w-[60%] h-full  bg-white ease-in-out duration-500 " : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full capitalize text-3xl font-bold text-blue-600 m-4">
          Kalathingal
        </h1>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-400">Why Offred</li>
          <li className="p-4 border-b border-gray-400">How it works</li>
          <li className="p-4 border-b border-gray-400">FAQ</li>
          <li className="p-4 border-b border-gray-400">About us</li>
        </ul>
        <div className='mx-6 flex gap-3 text-[14px]'>
            <button className="py-1 px-3 bg-black text-white  rounded-full">
              terms
            </button>
            <button className="py-1 px-3 border-2 rounded-full">
              terms
            </button>
            </div>
      </div>
    </div>
    </div>

  )
}

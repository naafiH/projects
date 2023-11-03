import React from 'react'
import bg from "../assets/bgf.jpg"
export default function footer() {
  return (
    <div className='gap-3'>
        <div className='grid sm:grid-cols-2 max-w-[1240px] mx-auto'>
        <div className='flex  items-center sm:items-start sm:px-12 justify-center flex-col max-w-[400px] mx-auto'>
            <h1 className='text-[25px] sm:text-[39px] font-bold '>Our services</h1>
            <p className='text-[10px] sm:text-[13px]'>pressure rationally encounter consequences extremely painful grat opertunity</p>
        </div>
        <div className='max-w-[200px] mx-auto sm:max-w-none '>
            <img  src={bg} alt="" />
        </div>

    </div >
    <div className='grid sm:grid-cols-2 max-w-[1240px] mx-auto'>
        <div className='max-w-[200px] mx-auto sm:max-w-none '>
            <img  src={bg} alt="" />
        </div>
        <div className='flex  items-center sm:items-start sm:px-12 justify-center flex-col max-w-[400px] mx-auto'>
            <h1 className='text-[25px] sm:text-[39px] font-bold '>Our services</h1>
            <p className='text-[10px] sm:text-[13px]'>pressure rationally encounter consequences extremely painful grat opertunity</p>
        </div>

    </div >
    </div>
  )
}

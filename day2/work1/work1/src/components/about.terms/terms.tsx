import React from 'react'
import png from "../assets/png.png"

export default function terms() {
  return (
    <div>
      
    <hr />
    <div className='py-10'>
      <p className='flex gap-3 py-1 px-2 font-font2 text-[10px] sm:text-[17px]'><img className='w-5' src={png} alt="" /> Need some help? <a className='text-blue-400' href="">Contact support</a></p>
      <p className='flex gap-3 py-1 px-2 font-font2 text-[10px] sm:text-[17px]'><img className='w-5' src={png} alt="" />Latest Product Updates? <a className='text-blue-400' href="">Contact support</a></p>
      <p className='flex gap-3 py-1 px-2 font-font2 text-[10px] sm:text-[17px]'><img className='w-5' src={png} alt="" /> Somethings not Right? <a className='text-blue-400' href="">Contact support</a></p>

    </div>
    <hr />
    <div className='max-w-[600px] mx-auto flex flex-col items-center justify-center'>
      <h1 className='font-font1 uppercase font-bold py-5 text-[17px]  sm:text-[20px]'>keep it with us if you can</h1>
      <p className='text-center text-[10px] text-zinc-300 max-w-[250px] sm:max-w-[300px] my-2 lg:max-w-[400px] sm:text-[12px]'>stay up to date with the latest news, products</p>
      <div className='flex px-2 py-2 rounded-MD bg-zinc-800 max-w-[300px] mx-auto'>
      <input className='bg-transparent ' type="text" placeholder='Slippy@starfox.com' />
      </div>
    </div>
    <div className='flex flex-col sm:flex-row text-[12px] sm:text-[15px] justify-center items-center gap-6'>
      <p><a href="">Privacy policy </a></p> 
      <p><a href=""> Terms and conditions</a></p>
    </div>
    </div>
  )
}

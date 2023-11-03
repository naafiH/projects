import React from 'react'
import Body from "../body/body"



export default function footer() {
  return (
    <div className="  max-w-[1240px] mx-auto ">
        <Body />
        <div>
      <div className="text-white  pt-32 pb-8">
        <div className="flex justify-center items-center sm:justify-start max-w-[600px] tracking-tighter font-bold font-font1">
          <h1 className=" px-2 relative z-10 rounded-md bg-bgcol1 bg-opacity-20 sm:text-[32px] md:text-[40px] text-[20px]">
            pioneering block chain development
          </h1>
        </div>
        <div className="flex flex-col  px-2 relative z-10 rounded-md bg-bgcol1 bg-opacity-20  justify-center items-center max-w-[300px] mx-auto">
          <p className="text-[10px] tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            ab nostrum quis pariatur natus quisquam laudantium eius dignissimos
            eveniet quod in, soluta autem iure sequi, quae optio dolores eum?
            Rerum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus minima molestias beatae totam sapiente quos in aliquam optio
            excepturi! Suscipit natus magni tempora iste sapiente, at quasi
            consequatur doloremque harum?
          </p>
          <button className="text-[10px] bg-white   px-3 py-2  text-black my-4 rounded-lg">
            Experties
          </button>
        </div>
      </div>
        </div>
    </div>
  )
}

import React from 'react'
import Body from "../body/body"
import Footer from "../footer/footer"
export default function nav() {
  return (
    <div>
<div className=" max-w-[1280px] mx-auto ">
          <div className="flex justify-center flex-col sm:flex-row py-2  max-w-[800px] mx-auto sm:justify-between items-center capitalize  text-[12px] ">
          <div>
          
              <ul className="flex flex-col sm:flex-row justify-center items-center space-x-2 font-bold">
                <button className="py-1 px-3 bg-orange-600  rounded-full">
                  terms
                </button>
                <li className=" hover:underline hover:bg-black rounded-full px-2 py1">
                  Header
                </li>
                <li className="  hover:underline hover:bg-black rounded-full px-2 py1">
                  Contributers
                </li>
                <li className="  hover:underline hover:bg-black rounded-full px-2 py1">
                  Developers
                </li>
                <li className="  hover:underline hover:bg-black rounded-full px-2 py1">
                  Blogers
                </li>
                <li className="  hover:underline hover:bg-black rounded-full px-2 py1">
                  design
                </li>
                
              </ul>
            </div>
            <h1 className="font-font1 text-[29px] font-bold">KEEPS</h1>
            
            <div>
            <button className="py-1 px-3 bg-orange-600  rounded-full">
                  terms
                </button> <button className="py-1 px-3 bg-orange-600  rounded-full">
                  terms
                </button>
            </div>
          </div>
        </div>
        <div>
            <Body/>
            <Footer/>
        </div>
    </div>
  )
}

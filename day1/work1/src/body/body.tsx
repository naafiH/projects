import React from "react";
import Nav from "../nav/nav";
import bg from "../assets/bg.png";
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"


export default function body() {
  return (
    <div className="  max-w-[1240px] mx-auto ">
      <div className="w-full flex justify-end items-start">
        <img className="absolute items" src={bg} alt="" />
      </div>
      <Nav />
      <div className=" md:px-8  mt-12 sm:pt-56 font-font1 max-w-[850px] font-bold   text-white ">
        <h1 className=" px-2 relative z-10 rounded-md bg-bgcol1 bg-opacity-20 sm:text-[32px] md:text-[70px] text-[20px]">
          Building the future on the tezoz block chain
        </h1>
      </div>
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
      <div className="flex flex-wrap justify-around gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] bg-cover border-zinc-400 border-2 text-white bg-center h-[350px] rounded-xl flex flex-col justify-center items-start">
            <img className='bg-white w-10 h-10 mx-5 sm:w-16 sm:h-16 rounded-full ' src={card1} alt="" />
            <div className="mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 ">
              <h1 className="text-[23px]  uppercase font-bold">
                the power of communication
              </h1>
              <p className="text-[13px]  py-2">
                perion co writer amos whitewolf discovers axe
                infinity,recognising a gap in the market, amos uses his
                expirience to breed the most in demand axias begin to dominate
                the global leaderboard. ranking #1 over four weeks,
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] bg-cover border-zinc-400 border-2 text-white bg-center h-[350px] rounded-xl flex flex-col justify-center items-start">
          <img className='bg-white w-10 h-10 mx-5 sm:w-16 sm:h-16 rounded-full ' src={card1} alt="" />
            <div className="mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 ">
              <h1 className="text-[23px]  uppercase font-bold">
                the power of communication
              </h1>
              <p className="text-[13px]  py-2">
                perion co writer amos whitewolf discovers axe
                infinity,recognising a gap in the market, amos uses his
                expirience to breed the most in demand axias begin to dominate
                the global leaderboard. ranking #1 over four weeks,
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] bg-cover border-zinc-400 border-2 text-white bg-center h-[350px] rounded-xl flex flex-col justify-center items-start">
          <img className='bg-white w-10 h-10 mx-5 sm:w-16 sm:h-16 rounded-full ' src={card1} alt="" />

            <div className="mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 ">
              <h1 className="text-[23px]  uppercase font-bold">
                the power of communication
              </h1>
              <p className="text-[13px]  py-2">
                perion co writer amos whitewolf discovers axe
                infinity,recognising a gap in the market, amos uses his
                expirience to breed the most in demand axias begin to dominate
                the global leaderboard. ranking #1 over four weeks,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

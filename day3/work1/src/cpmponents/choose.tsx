import React from "react";
import bg1 from "../assets/png.png";
import hawad from "../assets/Hardward.png";

export default function choose() {
  return (
    <div className="max-w-[1240px] mx-auto ">
      <div className="bg-green-400 py-5 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[24px] text-center sm:text-[45px] md:text-[65px] md:leading-[60px] leading-10 font-extrabold py-5 sm:py-10 m  max-w-[200px] sm:max-w-[500px] md:max-w-[800px]  ">
            Get help every step along the way
          </h1>
          <p className="text-[14px] sm:text-[18px] tracking-wider">
            Our experts are here to help you Land your dream job{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-10 gap-4 px-3">
          <div className="col-span-2 px-3 sm:px-1 text-center md:text-left">
            <h2 className="text-[15px] font-bold md:text-[22px]">
              your dream job is within reach
            </h2>
            <p className="text-[11px] tracking-wider ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id
              ab consequatur ipsum voluptatum culpa architecto molestias
              deserunt, nam explicabo in perferendis?
            </p>
            <p className="text-[11px] tracking-wider py-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              aliquam minima 
            </p>
            <button className="py-1 px-5 sm:py-2 sm:px-12 mt-2 my-2 bg-black text-white text-[12px]   rounded-full ">
              SignUp
            </button>
          </div>
          <div className="col-span-4 my-6  ">
            <div className="flex justify-center items-center w-full h-full">
              <div className="max-w-[300px] flex flex-col justify-center items-center max-h-[250px] bg-white rounded-xl">
                <img className="w-12 -m-4" src={bg1} alt="" />
                <h3 className="mt-6 px-10">Weston Stearness</h3>
                <p className="text-[9px] text-zinc-600">
                  CEO and co founder of Offred Ai
                </p>
                <p className="px-3 py-3 text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  at quidem iure enim tempora cum nobis quam, rem dolorem.
                  Obcaecati ratione saepe harum quod accusamus, autem nemo minus
                  illo impedit.
                </p>
                <img className="w-28 " src={hawad} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex justify-center items-center w-full h-full">
              <div className="max-w-[300px] flex flex-col justify-center items-center max-h-[250px] bg-white rounded-xl">
                <img className="w-12 -m-4" src={bg1} alt="" />
                <h3 className="mt-6 px-10">Alex Santon</h3>
                <p className="text-[9px] text-zinc-600">Manager</p>
                <p className="px-3 py-3 text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  at quidem iure enim tempora cum nobis quam, rem dolorem.
                  Obcaecati ratione saepe harum quod accusamus, autem nemo minus
                  illo impedit.
                </p>
                <div className="flex">
                  <img className="w-28 " src={hawad} alt="" />
                  <img className="w-28 " src={hawad} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <h1 className="text-[24px] text-center sm:text-[45px] md:text-[60px] md:leading-[60px] leading-10 font-extrabold py-5 sm:py-10 px-10 sm:px-0 md:max-w-[1000px] mx-auto  ">
          Why thousands of job seekers are choosing Offered
        </h1>
        <div className="md:overflow-x-scroll flex flex-wrap md:flex-nowrap justify-center items-center gap-6 px-5">
          <div className="w-[400px] my-7 border-2 border-black flex flex-col justify-center items-center h-[250px] bg-white rounded-xl">
            <div className="flex justify-center items-center">
              <div className="flex px-3">
                <img className="w-[90px] " src={bg1} alt="" />
              </div>
              <div>
                <h3 className=" px-10">Nancy Martinez</h3>
                <p className="text-[9px] text-zinc-600">
                  of Offred A
                </p>
              </div>
            </div>
            <p className="px-3 py-3 text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
              quidem iure enim tempora cum nobis quam, rem dolorem. Obcaecati
              ratione saepe harum quod accusamus, autem nemo minus illo impedit.
            </p>
          </div>
          <div className="w-[400px] my-7 border-2 border-black flex flex-col justify-center items-center h-[250px] bg-white rounded-xl">
            <div className="flex justify-center items-center">
              <div className="flex px-3">
                <img className="w-[90px] " src={bg1} alt="" />
              </div>
              <div>
                <h3 className=" px-10">John Naguen</h3>
                <p className="text-[9px] text-zinc-600">
                  co founder 
                </p>
              </div>
            </div>
            <p className="px-3 py-3 text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
              quidem iure enim tempora cum nobis quam, rem dolorem. Obcaecati
              ratione saepe harum quod accusamus, autem nemo minus illo impedit.
            </p>
          </div>
          <div className="w-[400px] my-7 border-2 border-black flex flex-col justify-center items-center h-[250px] bg-white rounded-xl">
            <div className="flex justify-center items-center">
              <div className="flex px-3">
                <img className="w-[90px] " src={bg1} alt="" />
              </div>
              <div>
                <h3 className=" px-10">Olivia Williams</h3>
                <p className="text-[9px] text-zinc-600">
                  CEO  Ai
                </p>
              </div>
            </div>
            <p className="px-3 py-3 text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
              quidem iure enim tempora cum nobis quam, rem dolorem. Obcaecati
              ratione saepe harum quod accusamus, autem nemo minus illo impedit.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

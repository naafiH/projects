import React from "react";
import img from "../assets/img.png";
import img2 from "../assets/imgg1.png";
import img3 from "../assets/imgg2.png";
import img4 from "../assets/imgg3.png";
import img5 from "../assets/imgg4.png";


export default function jobguarent() {
  return (
    <div className=" bg-red-400 sm:py-12">
      <div className="flec flex-col justify-center items-center">
        <h1 className="text-[24px] text-center sm:text-[45px] md:text-[60px] md:leading-[60px] leading-10 font-extrabold py-4 sm:py-10 px-10 sm:px-0 md:max-w-[1000px] mx-auto  ">
          Our job guarenty programme
        </h1>
        <p className="text-[14px] sm:text-[18px] text-center tracking-wider">
          Our experts are here to help you Land your dream job{" "}
        </p>
      </div>
      <div className="flex justify-center items-center sm:pt-10">
        <div className="flex px-3">
          <img className="w-[90px] sm:w-[150px] " src={img} alt="" />
        </div>
        <div className="max-w-[300px]">
          <h3 className=" px-4 sm:text-[25px]  ">1 on 1 coaching</h3>
          <p className="text-[9px] sm:text-[15px] px-4 text-zinc-600">
            CEO and co founder of Offred Ai CEO and co founder of Offred Ai CEO and co founder of Offred Ai
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pt-10">
        <div className="flex px-3">
          <img className="w-[90px] sm:w-[150px] " src={img2} alt="" />
        </div>
        <div className="max-w-[300px]">
          <h3 className=" px-4 sm:text-[25px]  ">Job search workshops</h3>
          <p className="text-[9px] sm:text-[15px] px-4 text-zinc-600">
            CEO and co founder of Offred Ai CEO and co founder of Offred Ai CEO and co founder of Offred Ai
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pt-10">
        <div className="flex px-3">
          <img className="w-[90px] sm:w-[150px] " src={img3} alt="" />
        </div>
        <div className="max-w-[300px]">
          <h3 className=" px-4 sm:text-[25px]  ">Best in class applications</h3>
          <p className="text-[9px] sm:text-[15px] px-4 text-zinc-600">
          CEO and co founder of Offred Ai CEO and co founder of Offred Ai CEO and co founder of Offred Ai
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pt-10">
        <div className="flex px-3">
          <img className="w-[90px] sm:w-[150px] " src={img4} alt="" />
        </div>
        <div className="max-w-[300px]">
          <h3 className=" px-4 sm:text-[25px]  ">terview prep</h3>
          <p className="text-[9px] sm:text-[15px] px-4 text-zinc-600">
            CEO and co founder of Offred Ai  CEO and co founder of Offred Ai CEO and co founder of Offred Ai CEO and co founder of Offred Ai
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pt-10">
        <div className="flex px-3">
          <img className="w-[90px] sm:w-[150px] " src={img5} alt="" />
        </div>
        <div className="max-w-[300px]">
          <h3 className=" px-4 sm:text-[25px]  ">negotiaton support</h3>
          <p className="text-[9px] sm:text-[15px] px-4 text-zinc-600">
          CEO and co founder of Offred Ai  CEO and co founder of Offred Ai CEO and co founder of Offred Ai CEO and co founder of Offred Ai
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[19px] text-center sm:text-[25px] md:text-[35px] md:leading-[60px] leading-10 font-extrabold py-4 sm:py-10 px-10  md:max-w-[1000px] mx-auto  ">
          if we dont get you a job within 4 months you dont have to pay us
        </h1>
        <button className="py-1 px-5 sm:py-2 sm:px-12 md:px-24 md:py-3 mt-5   my-5 bg-black text-white text-[12px] sm:text-[17px]  rounded-full ">SignUp</button>
      </div>
    </div>
  );
}

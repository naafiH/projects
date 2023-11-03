import React from "react";
import Contributers from "../about.contributer/contributers";
import Developers from "../about.developers/developers"
import Terms from "../about.terms/terms";
export default function header() {
  return (
    <div>
      <nav>
        <div className=" max-w-[1280px] mx-auto ">
          <div className="flex justify-center flex-col sm:flex-row py-2  max-w-[800px] mx-auto sm:justify-between items-center capitalize  text-[12px] ">
            <h1 className="font-font2 text-[22px]">Foodevide</h1>
            <div>
              <ul className=" hidden sm:flex flex-col sm:flex-row justify-center items-center space-x-2 font-bold">
                <li className="text-zinc-300 hover:underline hover:bg-black rounded-full px-2 py1">
                  Header
                </li>
                <li className="text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1">
                  Contributers
                </li>
                <li className="text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1">
                  Developers
                </li>
                <li className="text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1">
                  Blogers
                </li>
                <li className="text-zinc-300  hover:underline hover:bg-black rounded-full px-2 py1">
                  design
                </li>
                <button className="py-1 px-3 bg-orange-600  rounded-full">
                  terms
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div>
             {/* contributer */}
      <Contributers/>
        {/* contributer  end*/}
        {/* {developers} */}
      <Developers/>
        {/* {developers} */}

       

       {/* {terms} */}
       <Terms/>
       {/* {terms} */}

        </div>
      </nav>
    </div>
  );
}

import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye-opening", "presentations"].map((items, index) => {
          return (
            <div key={index} className="masker">
             <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (<div className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative">
                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
              </div>)}
             <h1 className="text-[9vw] leading-[.75] h-full uppercase  font-['Founders_Grotesk_X'] font-medium pt-[2vw] -mb-[1vw]">
                {items}
              </h1>
             </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-[15vh] flex justify-between font-['Neue_Montreal'] font-extralight items-center py-3 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className=" text-md font-light  leading-none"
          >
            {items}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-[0.2vw] border-[1px] rounded-full uppercase  font-['Neue_Montreal'] font-extralight text-md border-zinc-500">
            start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
            <span className="rotate-[45deg]">
            <IoIosArrowRoundUp size={'1.8rem'} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
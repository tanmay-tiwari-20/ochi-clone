import React from "react";

function Featured() {
  return (
    <div className='w-full py-20 font-["Neue_Montreal"] bg-zinc-50 text-black'>
      <div className="w-full px-12 border-b-2 border-[#E2E2E2] pb-8">
        <h1 className="text-[3.6vw]">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-3 mt-20">
          <div className="cardcontainer relative w-1/2 h-[75vh]  ">
          <h1 className="absolute left-full z-[9] text-[8vw] font-medium font-['Founders_Grotesk_X'] -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">{"FYDE".split('').map((item, index)=><span>{item}</span>)}</h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
          </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]  ">
          <div className="card w-full h-full rounded-xl overflow-hidden">
          <h1 className="absolute right-full z-[9] text-[8vw] font-medium font-['Founders_Grotesk_X'] translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">{"VISE".split('').map((item, index)=><span>{item}</span>)}</h1>
          <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          </div>
        </div>
        <div className="cards w-full flex gap-3 mt-20">
          <div className="cardcontainer relative w-1/2 h-[75vh]  ">
          <h1 className="absolute left-full z-[9] text-[8vw] font-medium font-['Founders_Grotesk_X'] -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">{"TRAWA".split('').map((item, index)=><span>{item}</span>)}</h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
          </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]  ">
          <div className="card w-full h-full rounded-xl overflow-hidden">
          <h1 className="absolute right-full z-[9] text-[8vw] font-medium font-['Founders_Grotesk_X'] translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">{"PREMIUM BLEND".split('').map((item, index)=><span>{item}</span>)}</h1>
          <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

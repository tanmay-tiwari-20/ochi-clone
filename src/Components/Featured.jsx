import React from "react";

function Featured() {
  return (
    <div className='w-full py-20 font-["Neue_Montreal"] bg-zinc-50 text-black'>
      <div className="w-full px-12 border-b-[1px] border-zinc-600 pb-8">
        <h1 className="text-[3.6vw]">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <div className="cardcontainer w-1/2 h-[75vh]  ">
          <h1 className="absolute z-[9] text-8x font-['Founders_Grotesk_X'] ">FYDE</h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
          </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh]  ">
          <div className="card w-full h-full rounded-xl overflow-hidden">
          <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye-opening", "presentations"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[9vw] leading-[.75] h-full uppercase font-['Founders_Grotesk_X'] font-medium pt-[2vw] -mb-[1vw]">
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
          <p key={index} className="text-md font-light leading-none">
            {items}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <motion.div
            whileHover={{
              scale: 1.01,
              backgroundColor: "#ffffff",
              color: "#000000",
              transition: { duration: 0.3 },
            }}
            className="px-4 py-[0.2vw] border-[1px] rounded-full uppercase font-['Neue_Montreal'] font-extralight text-md border-zinc-500"
          >
            start the project
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffffff",
              color: "#000000",
              rotate: 45,
              transition: { duration: 0.3 },
            }}
            className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-500"
          >
            <span className="rotate-[45deg]">
              <IoIosArrowRoundUp size={"1.8rem"} />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

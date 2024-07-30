import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      className="w-full py-[17vh] rounded-t-3xl bg-[#004D43]"
    >
      <div className='text border-t-2 border-b-2 border-zinc-300 font-["Founders_Grotesk_X"]  flex whitespace-nowrap overflow-hidden'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[25vw] mt-6 -mb-[15vh] pr-20 font-semibold leading-none uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[25vw] mt-6 -mb-[15vh] pr-20 font-semibold leading-none uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

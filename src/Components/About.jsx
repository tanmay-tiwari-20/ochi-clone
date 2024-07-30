import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w-full p-20 pl-[3.5vw] bg-[#CDEA68] rounded-t-3xl text-black font-['Neue_Montreal']"
      >
        <h1 className="pr-[9vw] text-[3.6vw] leading-[3.5vw]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className="w-full pt-10 flex gap-5 border-t-[.1vh] mt-20 bg-[#CDEA68] border-gray-600">
          <div className="w-1/2">
            <h1 className="text-[3.6vw]">Our approach:</h1>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000",
                color: "#CDEA68",
                transition: { duration: 0.3 },
              }}
              className="px-7 py-4 bg-zinc-900 rounded-full text-white mt-2 flex items-center justify-between gap-8 uppercase text-[2vh]"
            >
              Read More
              <motion.div className="w-2 h-2 bg-zinc-100 rounded-full" />
            </motion.button>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-1/2 h-[70vh] bg-[#97af3e] rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;

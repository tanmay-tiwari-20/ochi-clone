import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-[17vh] rounded-t-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 font-["Founders_Grotesk_X"] gap-12 flex whitespace-nowrap overflow-hidden'>
            <h1 className='text-[25vw] mt-6 -mb-[15vh]  font-semibold leading-none uppercase'>we are ochi</h1>
            <h1 className='text-[25vw] mt-6 -mb-[15vh]  font-semibold leading-none uppercase'>we are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee
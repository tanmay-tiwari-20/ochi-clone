import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-14 bg-zinc-50 flex items-center gap-5'>
        <div className='cardcontainer h-[55vh] w-1/2'>
        <div className='card relative rounded-xl h-full flex items-center justify-center bg-[#004D43]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-[1.5vh] py-[.5vh] border-[1px] rounded-full text-md text-[#CDEA68] border-[#CDEA68] left-6 bottom-7 tracking-tight font-["Neue_Montreal"]'>©2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[55vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl h-full w-1/2 bg-[#212121]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-[1.5vh] py-[.5vh] border-[1px] rounded-full text-md left-6 bottom-7 tracking-tight font-["Neue_Montreal"] uppercase'>rating 5.0 on clutch</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl h-full w-1/2 bg-[#212121]'>
        <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-[1.5vh] py-[.5vh] border-[1px] rounded-full text-md left-6 bottom-7 tracking-tight font-["Neue_Montreal"] uppercase'>business bootcamp alumni</button>
        </div>
        </div>
    </div>
  )
}

export default Cards
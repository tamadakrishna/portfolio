"use client";
import React from 'react'

function Projects() {
  return (
    <div className="w-full h-full text-black flex justify-center items-center overflow-scroll no-scrollbar ">
      <div className="h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] p-[5px] border-2 flex gap-2 ">
         <div className="w-[310px] h-[360px] p-[5px] shrink-0 shadow-[0px_2px_5px_gray] rounded-[10px] flex flex-col gap-2 bg-[#2F2D28] cursor-pointer">
            <div className='w-full h-[160px] rounded-[10px] bg-slate-500'>
                {/* image */}
            </div>
            <div className='w-full h-[200px] relative border-2'>
                <div className='h-[40px] border-2 text-white'>Title</div>
                <div className='h-[40px] border-2 text-white'>Company</div>
                <div className='h-[40px] border-2 text-white'>Skills</div>
                <div className='h-[40px] w-full border-2 absolute bottom-0 text-white'>timeline</div>

            </div>
         </div>
      </div>
      {/* Modal */}
    </div>
  )
}

export default Projects
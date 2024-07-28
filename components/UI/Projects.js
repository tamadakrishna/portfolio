"use client";
import React from 'react'

function Projects() {
  return (
    <div className="w-full h-full text-black flex justify-center items-center overflow-scroll no-scrollbar ">
      <div className="h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] p-[5px] border-2 flex gap-2 ">
         <div className="w-[300px] h-[200px] rounded-[5px] bg-slate-100 cursor-pointer">
            <div className='w-full h-[25px]'>Time Line</div>
            <div className='w-full h-[25px]'>Project Title</div>
            <div className='w-full h-[110px]'>Project Description</div>
            <div className='w-full h-[20px]'>Demo Link</div>
            <div className='w-full h-[20px]'>Demo Link</div>
         </div>
      </div>
      {/* Modal */}
    </div>
  )
}

export default Projects
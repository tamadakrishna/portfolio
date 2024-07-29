"use client";
import Image from 'next/image';
import React from 'react'

function Projects({data}) {
  return (
    <div className="w-full h-full text-black flex justify-center items-center overflow-scroll no-scrollbar ">
      <div className="h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] p-[5px] flex gap-2 ">
        {
          data?.map((info,index)=>{
            return(
            <div key={index} className="w-[310px] h-[360px] p-[5px] shrink-0 shadow-[0px_2px_5px_gray] rounded-[10px] flex flex-col gap-2 bg-[#2F2D28] cursor-pointer">
              <div className='w-full h-[160px] rounded-[10px] bg-slate-500'>
                  {/* image */}
                  <div className="w-full rounded-[5px] h-full bg-white relative ">
                      <Image
                          className="w-[55px]"
                          src={info?.logo}
                          alt="Product"
                          fill={true}
                      />
                  </div>
              </div>
              <div className='w-full h-[200px] relative '>
                  <div className='h-[40px] text-white flex items-center text-[12px]'><span className="material-symbols-outlined">school</span> {info?.title}</div>
                  <div className='h-[40px] text-white flex items-center text-[12px]'><span className="material-symbols-outlined">location_city</span>{info?.company}</div>
                  <div className='h-[40px] text-white flex items-center text-[12px]'><span className="material-symbols-outlined  ">interests</span>{info?.skills}</div>
                  <div className='h-[40px] w-full absolute bottom-0 text-white flex items-center text-[12px]'> <span className="material-symbols-outlined">today</span>{info?.year}</div>
              </div>
            </div>)
          })
            
        }
      </div>
    </div>
  )
}

export default Projects
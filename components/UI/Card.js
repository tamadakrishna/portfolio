"use client";
import React from 'react'

function Card({pos,data}) {
  return (
    <div className={`w-[600px] h-[280px] relative shrink-0 ${pos=="odd" ? "border-l-[2px] ml-[596px] odd-circle" : "even-circle border-r-[2px] mr-[600px]"} flex items-center justify-center  border-white`}>
      {/* Horizontal Line */}
      <div className={`h-[2px] w-[99px] ${pos=="odd" ? 'left-0' : 'right-0'} bg-white absolute `}></div>
      {/* Card */}
      <div className="w-[400px] h-[180px] shrink-0 shadow-[0px_2px_5px_gray] rounded-[10px] bg-[#2F2D28]">
        <div className="w-full h-[20px]  flex items-center"> 
        <span className="material-symbols-outlined">today</span>
         <span className="ml-[5px] text-[12px] ">{data?.year}</span>
        </div>
        <div className="w-full h-[25px] flex items-center"> 
          <span className="material-symbols-outlined">school</span>
          <span className="ml-[5px]  w-full text-[12px] ">{data?.course}</span>  
        </div>
        <div className="w-full h-[25px] flex items-center"> 
          <span className="material-symbols-outlined">location_city</span>
          <span className="ml-[5px] text-[12px]">{data?.institute}</span>  
        </div>
        <div className="w-full h-[20px] flex items-center"> 
          <span className="material-symbols-outlined">location_on</span>
          <span className="ml-[5px] text-[12px]">{data?.location}</span>  
        </div>
        <div className="w-full h-[85px] mt-[5px]">
        <span className="material-symbols-outlined absolute ">interests</span>
          <div className="text-[12.5px] w-full break-words h-full">
            <span className='ml-[30px]'></span>
            {data?.message}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Card
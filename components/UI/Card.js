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
         <span className="ml-[5px] text-[12px]">2022 - 2024</span>
        </div>
        <div className="w-full h-[30px] flex items-center"> 
          <span className="ml-[5px]"> B.Tech in Computer Science and Engineering </span>  
        </div>
        <div className="w-full h-[30px] flex items-center"> 
          <span className="ml-[5px]">Narasaraopet, Guntur, Andhra Pradesh</span>  
        </div>
        <div className="w-full h-[100px] before:ml-[5px]">
          <span className="">During my studies in Computer Engineering at Visakhapatnam. I interned with XYZ Tech, where I developed ski I graduated with a strong GPA, ready to pursue a career in technology. </span>  
        </div>
      </div>
    </div>
  )
}

export default Card
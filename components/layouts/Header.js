"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const router = useRouter();
  return (
    <div className="w-full h-full bg-white bg-opacity-[0.1]">
       <div className="w-[50%] h-full  flex items-center">
            <div className="ml-[180px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/')}}>Journey</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/skills')}}>Skills</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/projects')}}>Projects</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/certifications')}}>Certifications</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/experience')}}>Experience</div>
       </div>
       <div className="w-[50%] h-full"></div>
    </div>
  )
}

export default Header
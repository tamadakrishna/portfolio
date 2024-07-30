"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const router = useRouter();

    function makeCall() {
        const phoneNumber = '+91 9392446518';
        window.location.href = `tel:${phoneNumber}`;
      }

  return (
    <div className="w-full h-full flex  bg-white bg-opacity-[0.1]">
       <div className="w-[60%] h-full flex items-center">
            <div className="ml-[180px] text-[20px] cursor-pointer border-b-2" onClick={()=>{router.push('/')}}>Journey</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/skills')}}>Skills</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/projects')}}>Projects</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/certifications')}}>Certifications</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer" onClick={()=>{router.push('/experience')}}>Experience</div>
       </div>
       <div className="w-[40%] h-full flex justify-end" >
        <div className='w-[150px] flex flex-col justify-center items-center cursor-pointer' onClick={makeCall}>
            <div className='text-[10px]'>Tamada Krishna</div>
            <div className='text-[10px]'>+91 9392446518</div>
        </div>
       </div>
    </div>
  )
}

export default Header
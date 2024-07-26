"use client";
import React from 'react';
import ProgressBar from '@/components/UI/ProgressBar';

function SkillsCard() {
  return (
    <div className="w-[600px] h-[400px] bg-[#2F2D28] rounded-[5px] shrink-0 shadow-[1px_2px_5px_gray] ">
        {/* Title */}
        <div className='w-full h-[40px] flex justify-center'>
            <span className='text-[25px]'>Languages</span>
        </div>
        {/* Content */}
        <div className="w-full h-[calc(100%_-_40px)]  flex border-2">
            <div className='ml-[15px] mr-[120px]'> <span> JAVA</span> </div>
            <ProgressBar/>
        </div>
    </div>
  )
}

export default SkillsCard
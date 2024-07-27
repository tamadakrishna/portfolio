"use client";
import React from 'react';
import ProgressBar from '@/components/UI/ProgressBar';

function SkillsCard({title, skills}) {
    
  return (
    <div className="w-[600px] h-[400px] bg-[#2F2D28] rounded-[5px] shrink-0 shadow-[1px_2px_5px_gray] ">
      {/* Title */}
      <div className='w-full h-[40px] flex justify-center'>
            <span className='text-[25px]'>{title}</span>
        </div>
        {/* Content */}
        <div className="w-full max-h-[calc(100%_-_40px)] gap-2 flex flex-wrap justify-between ">
            {
                skills?.map((info,index)=>{
                    return (
                        <div key={index} className="flex  h-[25px] items-center">
                            <div className='w-[100px]'> <span className='ml-[5px]'>{info?.skill}</span> </div>
                            <ProgressBar rating={info?.rating}/>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default SkillsCard
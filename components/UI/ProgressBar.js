"use client";
import React from 'react'

function ProgressBar({rating}) {
    const percentage = `w-[${rating}%]`
  return (
    <div className="w-[150px] h-[12px] rounded-[10px] mr-[2px]  border-2">
       <div className={`h-full ${percentage} rounded-[10px] bg-white`}></div>
    </div>
  )
}

export default ProgressBar
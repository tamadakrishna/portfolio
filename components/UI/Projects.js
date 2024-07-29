"use client";
import React,{useState} from 'react'

function Projects() {

  const [modal, setModal] = useState(false)
  
  return (
    <div className="w-full h-full text-black  flex items-center justify-center overflow-scroll no-scrollbar ">
      <div className={`h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] ${modal ? "hidden" : "block"}`} onClick={()=>{setModal(val=>!val)}}>
         <div className="w-[300px] h-[210px] shadow-[0px_2px_5px_gray] rounded-[10px] text-white text-[12px]  bg-[#2F2D28] cursor-pointer">
            <div className='w-full h-[25px]  flex items-center'>
              <span className="material-symbols-outlined">today</span>
              <span>{"Time Line"}</span>
            </div>
            <div className='w-full h-[25px] flex items-center'>
              <span className="material-symbols-outlined">topic</span>
              <span>{"Project Title"}</span>
            </div>
            <div className='w-full h-[110px] '>Project Description</div>
            <div className='w-full h-[20px] flex items-center '>
              <span className="material-symbols-outlined">link</span>
              <span>{"Preview of Project"}</span>  
            </div>
            <div className='w-full h-[20px] flex items-center '>
              <span className="material-symbols-outlined">link</span>
              <span>{"Project Code"}</span>  
            </div>
         </div>
      </div>
      {/* Modal */}
      <div className={`h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] flex  border-2 rounded-[5px] bg-white ${modal ? "block" : "hidden"}`}>
        <div className='w-full h-[30px]  flex justify-end'> 
          <span className="material-symbols-outlined h-full w-[30px] text-red-500 cursor-pointer" onClick={()=>{setModal(val=>!val)}}>close</span>
        </div>

      </div>
    </div>
  )
}

export default Projects
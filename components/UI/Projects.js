"use client";
import Image from 'next/image';
import React,{useState} from 'react'

function Projects({project}) {

  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({});

  const setInfo = (info)=>{
    setModalInfo(info)
  }
  
  return (
    <div className="w-full h-full text-black  flex items-center justify-center overflow-scroll no-scrollbar ">
      {
        project?.map((info,index)=>{
          return(
              <div key={index} className={`h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] ${modal ? "hidden" : "block"}` }>
                <div className={`w-[300px] h-[210px] shadow-[0px_2px_5px_gray] rounded-[10px] text-white text-[12px]  bg-[#2F2D28] ${modal ? "hidden" : "block"}`} >
                  <div className='w-full h-[25px]  flex items-center'>
                    <span className="material-symbols-outlined">today</span>
                    <span>{info?.year}</span>
                  </div>
                  <div className='w-full h-[25px] flex items-center'>
                    <span className="material-symbols-outlined">topic</span>
                    <span>{info?.project_title}</span>
                  </div>
                  <div className='w-full h-[60px] p-2'>
                    <div className='w-full h-full'>
                      {info?.description}
                    </div>
                  </div>
                  <div className='w-full h-[50px] flex justify-center items-center'>
                   <div className='w-[calc(100%_-_120px)] h-[calc(100%_-_20px)] cursor-pointer rounded-[10px] bg-slate-300 flex justify-center items-center border-2' 
                      onClick={()=>{
                        setInfo(info);
                        setModal(val=>!val)
                        }}>
                    <span className='text-black'>Click here for more info</span>
                   </div>
                  </div>
                  <div className='w-full h-[20px] flex items-center '>
                    <span className="material-symbols-outlined">link</span>
                    <span><a href={info?.preview} target='_blank'>Preview of Project</a></span>  
                  </div>
                  <div className='w-full h-[20px] flex items-center '>
                    <span className="material-symbols-outlined">link</span>
                    <span><a href={info?.code} target='_blank'>Source Code</a></span> 
                  </div>
                </div>
              </div>
          )
        })
      }
      {/* Modal */}
      <div className={`h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] flex flex-col  rounded-[5px] bg-white ${modal ? "block" : "hidden"}`}>
                <div className='w-full h-[30px]  flex justify-end'> 
                  <span className="material-symbols-outlined h-full w-[30px] text-red-500 cursor-pointer" onClick={()=>{setModal(val=>!val)}}>close</span>
                </div>
                <div className='w-full h-[calc(100%_-_30px)] flex '>
                  <div className='w-[50%] h-full flex justify-center items-center '>
                        <div className="w-[calc(100%_-_50px)] h-[calc(100%_-_50px)] border-2 border-slate-200 rounded-[5px]  p-4  bg-white relative ">
                              <Image
                                  className=" "
                                  src={modalInfo?.images}
                                  alt="Product"
                                  fill={true}
                              />
                          </div>
                  </div>
                  <div className='w-[50%] h-full'>
                    <div className='w-full h-[60px]'><span className='text-[40px]'>{modalInfo?.project_title }</span></div>
                    <div className='w-full p-2 '>
                      <span className='text-[15px]'>
                        {modalInfo?.brief}
                      </span>
                    </div>
                    <div className='p-2'>
                      <div>
                        <h1 className='text-[20px] font-bold'>Technologies Used</h1>
                      </div>
                      <>
                            {
                              modalInfo?.sub?.map((info,index)=>{
                                return (
                                  <div key={index}>
                                    <h1 className='text-[15px] font-bold'>{info?.title}</h1>
                                    {
                                      info?.content?.map((sub_info,index)=>{
                                        return (
                                          <li key={index} className='ml-[20px]'>{sub_info}</li>
                                        )
                                      })
                                    }
                                  </div>
                                )
                              })
                            }
                      </>
                    </div>
                  </div>

                </div>
      </div>
      
    </div>
  )
}

export default Projects




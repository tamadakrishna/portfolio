"use client";
import React from 'react'
import Card from '@/components/UI/Card'
import Image from 'next/image';

function Journey() {
    const data = [
        {
        time:'2016-2019',
        title:'Diploma',
        subject:"I've have done Computer Engineering in Diploma"
        }
]
  return (
    <div className="w-full h-full flex flex-col items-center overflow-scroll no-scrollbar">

        {/* LinkedIn */}
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[40%] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'>
            <div className='w-[125px] h-full flex justify-center items-center'>
                <span className='text-[25px] font-bold'>
                    LinkedIn
                </span>
            </div>
            <div className="w-[55px] h-full bg-white relative rounded-[8px]">
                <Image
                    className="w-[55px]"
                    src={ "/images/linkedin.png"}
                    alt="Product"
                    fill={true}
                />
            </div>
        </div>
        {/* GitHub */}
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_50px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'>
            <div className='w-[125px] h-full flex justify-center items-center'>
                <span className='text-[25px] font-bold'>
                    GitHub
                </span>
            </div>
            <div className="w-[55px] h-full bg-white relative rounded-[8px]">
                <Image
                    className="w-[55px]"
                    src={ "/images/github.png"}
                    alt="Product"
                    fill={true}
                />
            </div>
        </div>
        {/* E-Mail */}
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_100px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'>
            <div className='w-[125px] h-full flex justify-center items-center'>
                <span className='text-[25px] font-bold'>
                    E-Mail
                </span>
            </div>
            <div className="w-[55px] h-full bg-white relative ">
                <Image
                    className="w-[55px]"
                    src={ "/images/email.png"}
                    alt="Product"
                    fill={true}
                />
            </div>
        </div>
        {/* Resume */}
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_150px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'>
            <div className='w-[125px] h-full flex justify-center items-center'>
                <span className='text-[25px] font-bold'>
                    Resume
                </span>
            </div>
            <div className="w-[55px] h-full bg-white relative ">
                <Image
                    className="w-[55px]"
                    src={ "/images/resume.png"}
                    alt="Product"
                    fill={true}
                />
            </div>
        </div>

        <div className='h-[40px] w-full  flex justify-center items-center'> <span className='text-[30px]'>My Journey</span> </div>

        {
                  [1,2,3,4,5,6].map((info,index)=>{
                    const pos = (index+1)%2 === 0 ? 'even' : 'odd';
                    return <Card pos={pos} data={data} key={index}/>
                })
        }

    </div>
  )
}

export default Journey
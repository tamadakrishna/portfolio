"use client";
import React from 'react'
import Card from '@/components/UI/Card'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Journey() {
    const router = useRouter();
    const data = [
        {
            year:'June 2019 - June 2022',
            course:'B.Tech in Computer Science and Engineering',
            institute:"University College of Engineering JNTUK Narasaraopet",
            location:"Guntur, Andhra Pradesh, India",
            message:"During my Bachelor’s in Computer Science Engineering, I gained a thorough understanding of advanced computer concepts. I studied algorithms, data structures, and software engineering. My coursework included OS, DBMS, Networking, and Compiler Design."
        },
        {
            year:'July 2016 - May 2019',
            course:'Diploma in Computer Engineering',
            institute:"Government Polytechnic",
            location:"Anakapalli, Andhra Pradesh, India",
            message:"During my Diploma in Computer Engineering, I gained a strong foundation in core computer fundamentals. I studied programming, networking, and operating systems. Additionally, I learned about databases, web design, and mobile app development."
        },
        {
        year:'May 2016',
        course:'High School Matriculation',
        institute:"Sree Krishna Grammar School",
        location:"Visakhapatnam, Andhra Pradesh, India",
        message:"During my high school years at Sree Krishna Grammar School, I primarily focused on Mathematics, Physics, and Chemistry.I learned C programming language, which sparked my interest in computer science."
        }
];

const handleDownloadClick = () => {
    const fileId = "1l1Rec0_L4a8nkZrm1ngfeQwZGM8K6GhW";
    // https://drive.google.com/file/d/1l1Rec0_L4a8nkZrm1ngfeQwZGM8K6GhW/view?usp=sharing
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = true;

    link.click();
  };


  return (
    <div className="w-full h-full flex flex-col items-center overflow-scroll no-scrollbar">

        {/* LinkedIn */}
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[40%] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'
           onClick={()=>{router.push("https://www.linkedin.com/in/tamadakrishna/")}}>
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
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_50px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'
           onClick={()=>{router.push("https://github.com/tamadakrishna")}}>
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
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_100px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'
            onClick={()=>{window.location.href = "mailto:tamadakrishnaa@gmail.com?subject=Service%20Request%20From%20Portfolio&body=What%27s%20in%20your%20mind%3F";}}>
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
        <div className='w-[180px] h-[50px] absolute flex left-0 top-[calc(40%_+_150px)] ml-[-130px] hover:ml-0 duration-300 cursor-pointer bg-[#6B7280]'
                onClick={handleDownloadClick}>
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
                  data?.map((info,index)=>{
                    const pos = (index+1)%2 === 0 ? 'even' : 'odd';
                    return <Card pos={pos} data={info} key={index}/>
                })
        }

    </div>
  )
}

export default Journey
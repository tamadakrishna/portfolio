import React from 'react';
import SkillsCard from '@/components/UI/SkillsCard';

function page() {

    const skills = [
        {
            skill:"JavaScript",
            rating:90,
        },
        {
            skill:"HTML",
            rating:95,
        },
        {
            skill:"CSS",
            rating:90,
        },
        {
            skill:"SQL",
            rating:90,
        },
        {
            skill:"C Language",
            rating:70,
        }
    ]
    const tech = [
        {
            title:"Programming Languages",
            skills:skills
        },
        {
            title:"Frontend",
            skills:skills
        },
        {
            title:"Backend",
            skills:skills
        },
        {
            title:"Databases",
            skills:skills
        }
    ]
  return (
    <div className="w-full h-full p-2 flex flex-wrap justify-center gap-4 overflow-scroll no-scrollbar">
        {
            tech?.map((info,index)=>{
                return (
                    <SkillsCard key={index} title={info?.title} skills={info?.skills}/>
                )
            })
        }
    </div>
  )
}

export default page
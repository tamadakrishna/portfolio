import React from 'react';
import SkillsCard from '@/components/UI/SkillsCard';

function page() {

    const programming = [
        {
            skill:"JavaScript",
            rating:90,
        },
        {
            skill:"Core Java",
            rating:70,
        },
        {
            skill:"Python",
            rating:50,
        },
        {
            skill:"SQL",
            rating:80,
        },
        {
            skill:"C Language",
            rating:65,
        },
        {
            skill:"C++",
            rating:50,
        }
    ]

    const frontend = [
        {
            skill:"HTML",
            rating:90,
        },
        {
            skill:"CSS",
            rating:90,
        },
        {
            skill:"React Js",
            rating:90,
        },
        {
            skill:"Tailwind CSS",
            rating:100,
        },
        {
            skill:"MUI",
            rating:90,
        },
     
    ]

    const backend = [
        {
            skill:"Node Js",
            rating:80,
        },
        {
            skill:"Express Js",
            rating:90,
        },
        {
            skill:"Next Js",
            rating:90,
        },
        {
            skill:"Nest Js",
            rating:50,
        },
        {
            skill:"socket.io",
            rating:80,
        },
     
    ]

    const devops = [
        {
            skill:"Docker",
            rating:60,
        },
        {
            skill:"Git",
            rating:90,
        },
        {
            skill:"Nginx",
            rating:70,
        },
        {
            skill:"Kubernetes",
            rating:40,
        },
     
    ]

    const databases = [
        {
            skill:"MySql",
            rating:80,
        },
        {
            skill:"MongoDB",
            rating:75,
        },
        {
            skill:"PostgreSQL",
            rating:70,
        },
        {
            skill:"SQlite",
            rating:100,
        }
    ]
    const tech = [
        {
            title:"Programming Languages",
            skills:programming
        },
        {
            title:"Frontend",
            skills:frontend
        },
        {
            title:"Backend",
            skills:backend
        },
        {
            title:"Databases",
            skills:databases
        },
        {
            title:"DevOps and API Tools",
            skills:devops
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
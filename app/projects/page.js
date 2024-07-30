import React from 'react';
import Projects from '@/components/UI/Projects';

function page() {
  const info = [
    {
      project_title:"ECOM (ecommerce)",
      description:"A dynamic e-commerce full-stack application featuring a responsive front end and a robust back end.",
      brief:`Developed a comprehensive personal e-commerce project with key features including a secure authentication system,
            user-friendly shopping, a streamlined checkout process, and an intuitive admin panel for managing products, users, and
            orders. The project showcases my full-stack development skills and attention to detail in creating a seamless online shopping
            experience.`,
      year:"Jan 2024",
      preview:"https://proecommerce.vercel.app/",
      code:"https://github.com/tamadakrishna/ECOM",
      images:'/images/projects/ecom/ecom.png',
      sub:[
        {
          title:"Frontend:",
          content:[
            "React.js: For building interactive user interfaces.",
            "Tailwind CSS: For styling and responsive design.",
            "Axios: For making API requests."
          ]
        },
        {
          title:"Backend:",
          content:[
            "Next.js: For server-side logic",
            "MongoDB: For data storage.",
            "Cloudinary: For multi-media storage."
          ]
        },
        {
          title:"Other Tools:",
          content:[
            "Git: For version control",
            "Jest: For testing",
          ]
        }
      ]
    }
  ]
  return (
    <Projects project={info}/>
  )
}

export default page
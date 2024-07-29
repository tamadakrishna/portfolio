import React from 'react'
import Certifications from '@/components/UI/Certifications'

function page() {
  const info = [
    {
      logo:"/images/cisco.png",
      title:"Cisco Certified Network Associate Routing and Switching",
      company:"CISCO",
      skills:"Switching and Routing",
      year:"May 2019"
    }
  ]

  return (
    
    <Certifications data={info}/>
  )
}

export default page
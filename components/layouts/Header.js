import React from 'react'

function Header() {
  return (
    <div className="w-full h-full bg-white bg-opacity-[0.1]">
       <div className="w-[50%] h-full  flex items-center">
            <div className="ml-[180px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer">Journey</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer">Skills</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer">Projects</div>
            <div className="ml-[50px] text-[20px] textShadow-[2px_2px_10px_grey] cursor-pointer">Certifications</div>
       </div>
       <div className="w-[50%] h-full"></div>
    </div>
  )
}

export default Header
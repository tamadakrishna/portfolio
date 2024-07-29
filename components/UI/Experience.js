import React from 'react'

function Experience() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-[calc(100%_-_50px)] h-[calc(100%_-_50px)] flex ">
            <div class="w-[50%] h-[full] p-2 ">
                <div className='w-full h-[80px] cursor-pointer shrink-0 shadow-[0px_2px_5px_gray] rounded-[10px] bg-[#2F2D28]'>
                  <div className='w-full h-[40px] p-2 flex justify-between items-center'>
                    <div>{"Full Stack Developer"}</div>
                    <div className='flex items-center'>
                      <span className="material-symbols-outlined h-full">today</span>
                      <span >{"2022 June - present"}</span>
                    </div>
                  </div>
                  <div className='w-full h-[40px] p-2 flex justify-between items-center'>
                    <div>{"Freelance"}</div>
                    <div>{""}</div>
                  </div>
                </div>
            </div>
            <div class="w-[50%] h-[full] p-2 ">
              <div className='w-full h-full shadow-[0px_2px_5px_gray] rounded-[10px] bg-[#2F2D28]'></div>
            </div>
        </div>
    </div>

  )
}

export default Experience
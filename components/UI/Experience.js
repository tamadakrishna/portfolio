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
              <div className='w-full h-full shadow-[0px_2px_5px_gray] rounded-[10px] bg-[#2F2D28]'>
                <div className="w-full h-[80px] flex items-center text-[60px]">{"Full Stack Developer"}</div>
                <div className="w-full h-[calc(100%_-_80px)] text-[60px] flex flex-col gap-2">
                  <div>
                    <div className='text-[25px] ml-2'>Developed and Deployed Scalable Web Applications:</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Created scalable and high-performance web applications using modern frameworks like React.js and Next.js, with attention to responsiveness and cross-browser compatibility.</li></div>
                  </div>
                  <div>
                    <div className='text-[25px] ml-2'>Optimized Application Performance:</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Implemented code-splitting, lazy loading, and other performance optimization techniques to enhance application speed and reduce load times.</li></div>
                  </div>
                  <div>
                    <div className='text-[25px] ml-2'>Enhanced User Experience (UX) and User Interface (UI):</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Designed intuitive and user-friendly interfaces with a focus on usability and accessibility, using tools like Figma or Adobe XD to create wireframes and prototypes.</li></div>
                  </div>
                  <div>
                    <div className='text-[25px] ml-2'>Integrated Third-Party Services and APIs:</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Integrated various third-party services and APIs (e.g., payment gateways, authentication services, mapping services) to add functionality and improve user engagement.</li></div>
                  </div>
                  <div>
                    <div className='text-[25px] ml-2'>Ensured Security Best Practices:</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Applied security best practices, including data validation, input sanitization, and secure authentication methods, to safeguard applications against vulnerabilities.</li></div>
                  </div>
                  <div>
                    <div className='text-[25px] ml-2'>Managed Project Timelines and Deliverables:</div>
                    <div className='text-[12px] ml-[15px]'><li className='list-disc'>Managed project timelines effectively, setting clear milestones and ensuring timely delivery of features and updates while maintaining high quality.</li></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>

  )
}

export default Experience
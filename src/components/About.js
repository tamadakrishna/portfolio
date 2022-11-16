import React from 'react'

function About() {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
                Hello and welcome! I have completed my under-graduation in bachelor of computer science and Engineering at 
                University College of Engineering Narasaraopet JNTUK. 
            </p>

            <br/>

            <p className="text-xl">
                My interests include front-end technologies, back-end technologies, mobile applications and other creative stuff! 
            </p>
          
        </div>
    </div>
  )
}

export default About
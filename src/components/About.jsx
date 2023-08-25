import React from 'react'

const 
div = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white max-[768px]:pt-[550px] max-[768px]:pb-64'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20 max-[768px]:mt-10'>
            Greetings, I am Ferhi Mohamed Habib Ellah, a dedicated software engineering graduate driven by 
            a profound enthusiasm for the world of technology. My way in web and mobile app development has been marked by a fervent exploration of diverse 
            programming languages and design tools, enabling me to craft seamless and engaging user experiences. My story with React.js has been particularly transformative.
            Through countless hours of learning and hands-on application, I've honed my skills in creating modular and dynamic interfaces.
            
            </p>
            <br/>
            <p className='text-xl'>
            From harnessing the power of components to optimizing rendering efficiency with the Virtual DOM, React.js has become an essential part of my toolkit. With a deep
            appreciation for the elegance and functionality, I am committed to pushing the boundaries of what's possible in modern web development.
            </p>
        </div>
    </div>
  )
}

export default 
div
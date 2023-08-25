import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import flutter from '../assets/flutter.png'
import dart from '../assets/dart.png'
import react from '../assets/react.png'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src:html,
            color: "shadow-orange-600"
        },
        {
            id:2,
            src:css,
            color: "shadow-blue-300"
        },
        {
            id:3,
            src:js,
            color: "shadow-yellow-400"
        },
        {
            id:4,
            src:flutter,
            color: "shadow-blue-600"
        },
        {
            id:5,
            src:dart,
            color: "shadow-[#007FFF]"
        },
        {
            id:6,
            src:react,
            color: "shadow-cyan-600"
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full pb-36 max-[768px]:pt-72 max-[768px]:pb-64'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    check out some of my work here
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {portfolios.map(({id,src,color}) =>(
                    <div key={id} className={'shadow-md '+color+' rounded-lg'}>
                    <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex item-center justify-center'>
                        <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                        </button>
                        <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Code
                        </button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;
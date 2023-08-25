import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import flutter from '../assets/flutter.png'
import dart from '../assets/dart.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/java.png'
import sql from '../assets/sql.png'
import illustrator from '../assets/illustrator.png'


const Experience = () => {
        const techs = [
            {
                id:1,
                src:html,
                title:'Html',
                color: "shadow-orange-600"
            },
            {
                id:2,
                src:css,
                title:'css',
                color: "shadow-blue-300"
            },
            {
                id:3,
                src:js,
                title:'javascript',
                color: "shadow-yellow-400"
            },
            {
                id:4,
                src:flutter,
                title:'flutter',
                color: "shadow-blue-600"
            },
            {
                id:5,
                src:dart,
                title:'dart',
                color: "shadow-[#007FFF]"
            },
            {
                id:6,
                src:react,
                title:'react js',
                color: "shadow-cyan-600"
            },
            {
                id:7,
                src:tailwind,
                title:'tailwind',
                color: "shadow-sky-600"
            },
            {
                id:8,
                src:java,
                title:'java',
                color: "shadow-red-600"
            },
            {
                id:9,
                src:illustrator,
                title:'illustrator',
                color: "shadow-orange-600"
            },
            {
                id:10,
                src:sql,
                title:'sql',
                color: "shadow-sky-600",
                bg:"bg-sky-600"
            },
        ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies that i have worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {techs.map(({id,src,title,color,bg})=>(
                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg white '+color}>
                    <img src={src} alt="" className={'mx-auto '+bg} />
                    <p className='mt-4 capitalize'>{title}</p>
                </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience
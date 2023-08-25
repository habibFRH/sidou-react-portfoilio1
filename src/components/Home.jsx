import React from 'react'
import sidou from '../assets/sidou1.jpg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen max-[768px]:pt-56 sm:pt-72 bg-gradient-to-b from-black to-gray-800 via-black text-white lg:pt-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full max-[768px]:mb-11'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developper</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, recusandae distinctio ad magnam fugit sunt aspernatur velit natus modi esse ab, 
                </p>
                <div>
                    <Link to='portfolio' smooth duration={1000} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer animate-pulse z-0'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={sidou} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home
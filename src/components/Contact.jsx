import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
            Contact
          </p>
          <p className='py-6'>
            Submit the form bellow to get in touch with me
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/a33b6577-1b0b-46b8-9180-8a6135bb40c0" className='flex flex-col w-full md:w-1/2' method='POST'>
            <input type="text" name="name" placeholder="Enter Your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <input type="email" name="email" placeholder="Enter Your Email" className='my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
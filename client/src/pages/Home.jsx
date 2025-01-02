import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className={`h-screen pt-8  flex flex-col justify-between w-full bg-red-400 background`}>
            <h1 className=' ml-10 font-bold text-5xl sm:m-auto text-red-500' >Destiny</h1>
            {/* <h1 className=' ml-10 font-bold text-5xl sm:mx-auto text-green-600'>Take where you Want</h1> */}
            <div className='bg-white py-4 px-4 pb-7 sm:p-10 sm:flex sm:flex-col sm:items-center'>
                <h2 className='text-2xl font-bold'>Get Started With Destiny</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-4 sm:w-52'>
                Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
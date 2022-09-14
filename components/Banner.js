import React from 'react'
import Image from 'next/image'
import imgBanner from '../assets/mediumbanner.png'
const Banner = () => {
  return (
    <div className='px-4 flex justify-between space-x-5 items-center bg-main border-y border-black'>
      <div>
      <h1 className='text-5xl sm:text-8xl'>
        Stay Curious.
      </h1>
      <p className='text-lg sm:text-2xl font-semibold max-w-xl mb-5 mt-5'>
      its easy and free to posr your thinking on any topic and connect with millions of readers 
      </p>
      <button className='bg-black rounded-full text-white py-2 px-4 mb-5'>
        start reading
      </button>
      </div>
      <div className='hidden sm:block'>
        <Image src={imgBanner} alt={"test"}/>
      </div>
    </div>
  )
}

//grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6
export default Banner
import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          growing with data analytics
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-xl font-bold sm:text-4xl md:text-5xl py-4">
            Fast, flexible, financing for
          </p>
          <Typed
            className="text-xl font-bold pl-2 sm:text-4xl md:text-5xl md:pl-4"
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl text-gray-500 font-bold md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero

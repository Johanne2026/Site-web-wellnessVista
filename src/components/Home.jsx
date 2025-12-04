import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="/img/home.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
      />
      
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
        <div className='w-full lg:w-4/5 space-y-5 mt-10'>
          <h1 className='text-5xl font-bold leading-tight'>
            Empowering Health Choices for a Vibrant Life Your Trusted..
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button title="See Services" />
        </div>
      </div>
    </div>
  )
}

export default Home
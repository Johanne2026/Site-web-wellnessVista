import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover opacity-90" style={{backgroundImage: "url('../src/assets/img/home.png')"}}>
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
  )
}

export default Home

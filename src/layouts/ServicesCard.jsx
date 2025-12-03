import React from 'react'

const ServicesCard = ({ icon, title }) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-lg hover:shadow-2xl rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
      <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>{icon}</div>
      <h1 className='font-semibold text-lg'>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>

      <h3 className='text-[#36ae9a] cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Learn More</h3>

    </div>
  )
}

export default ServicesCard

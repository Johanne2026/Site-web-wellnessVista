import React from 'react'

const BlogCard = ({img, headlines}) => {
  return (
    <div className='w-full lg:w-1/4 p-2 shadow-lg hover:shadow-2xl space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src={img} alt="img" />
      <h1 className='text-lg text-center font-semibold'>{headlines}</h1>
      <p className='text-center text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
  )
}

export default BlogCard

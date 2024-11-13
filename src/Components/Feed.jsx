import React from 'react'
import UserImage from '../assets/code.jpg'

const Feed = () => {
  return (
    <div className="p-4 w-2/5 mx-auto">
      <div className="border border-2 border-black w-100 shadow-md">
        <div className='flex'>
          <div className='w-1/5 px-4 py-2'>
            <img src={UserImage} alt="Profile" className='w-20 rounded-full' />
          </div>
          <div className='w-4/5 py-1'>
            <h3 className="font-bold">User Name</h3>
            <h5 className=''>2 Hours Ago</h5>
          </div>
        </div>

        <div className='mt-5 bg-cyan-0 h-[65vh]'>
          <img src={UserImage} alt="" className='w-11/12 mb-8 mx-auto h-[100%]' />
        </div>

        <div className='flex justify-between w-100 text-center mt-8'>
          <h4 className='border-t-2 border-e-2 border-black px-5 w-1/3 py-1 font-bold'>Like</h4>
          <h4 className='border-t-2 border-e-2 border-black px-5 w-1/3 py-1 font-bold'>Comment</h4>
          <h4 className='border-t-2 border-black px-5 w-1/3 py-1 font-bold'>Share</h4>
        </div>

      </div>
    </div>
  )
}

export default Feed
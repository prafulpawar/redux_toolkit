import React from 'react'

function Footer() {
  return (
    <div className='w-full flex justify-between mt-5 pt-4 pb-4  border-t-4    ' >
        <div className='text-2xl'>You have 4 pending tasks</div>
        <button className=' pr-4 pl-4 rounded-xl pt-2 pb-2 bg-red-600 text-white font-bold' >Clear All</button>
    </div>
  )
}

export default Footer
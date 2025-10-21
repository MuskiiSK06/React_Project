import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-18 py-8'>
        <h4 className='bg-black text-white py-2 px-6 rounded-full cursor-pointer text-[0.8rem]'>TARGET AUDIENCE</h4>
        <button className='bg-gray-200 px-4 py-2 rounded-full font-medium text-[0.7rem] tracking-widest'>DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Navbar
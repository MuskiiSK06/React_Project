import React from 'react'

function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h1 className='bg-white h-10 w-10 flex justify-center items-center rounded-full text-[1.1rem]'>{props.id+1}</h1>

            <div className='text-white mb-8'>
                <p className='mb-10 w-45 text-[1.3rem] font-medium leading-[1.3] text-shadow-lg/20'>{props.para}</p>

                <div className='flex gap-8'>
                    <button style={{backgroundColor:props.color}} className='py-2 px-10 rounded-full font-medium'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='py-2 px-3 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
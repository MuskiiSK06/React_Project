import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

function LeftContainer() {
  return (
    <div className='h-full w-1/4 px-4 flex flex-col justify-between'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContainer
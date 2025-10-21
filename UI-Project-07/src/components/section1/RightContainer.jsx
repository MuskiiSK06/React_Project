import React from 'react'
import RightCard from './RightCard'

function RightContainer(props) {
  return (
    <div id='right' className='h-full w-3/4 px-3 py-2 flex gap-5 flex-nowrap overflow-x-auto'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} h1={elem.number} para={elem.para} tag={elem.tag}/>
        })}
    </div>    
  )
}

export default RightContainer
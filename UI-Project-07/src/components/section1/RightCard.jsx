import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden shrink-0 relative'>
        <img className='h-full object-cover' src={props.img} />
        <RightCardContent id={props.id} color={props.color} para={props.para} tag={props.tag}/>
    </div>
  )
}

export default RightCard
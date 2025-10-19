import React from 'react'

function Card(props) {
  return (
        <div className="card">
        <img src={props.img}  alt='bird Image'/>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat!</p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Card
import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

function PageContent1(props) {
  return (
    <div className='bg-white-500 h-[90vh] flex gap-5 pb-18 pt-0 px-14'>
        <LeftContainer />
        <RightContainer users={props.users} />
    </div>
  )
}

export default PageContent1
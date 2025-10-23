import React from 'react'

function App() {

  // function inputChanging(val){
  //   console.log(val)
  // }

  // function scrolling(elem){
  //   if(elem>0){
  //     console.log("speed is increasing", elem)
  //   }else{
  //     console.log("speed is decreasing",elem)
  //   }
  // }

  const scrolling = (elem) =>{
    if(elem>0){
      console.log("speed is increasing at")
    }else{
      console.log("speed is decreasing at");      
    }
  }

  return (
    <div>
      {/* <button onClick={function(){
        console.log("Hello Muskan!")
      }}>Click Me</button>  */}

      {/* <input onChange={inputChanging} type='text' placeholder='text...' /> */}

      {/* <input onChange={function(elem){
          inputChanging(elem.target.value)
      }} placeholder='text...' /> */}


      {/* <div onMouseMove={function(elem){
        console.log(elem)
      }} className="box"></div> */}

      <div onWheel={(elem)=>{
        scrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  )
}

export default App
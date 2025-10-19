import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user="Muskan Shaikh" age={18} img="https://images.unsplash.com/photo-1759399703184-11a722ec0706?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>

      <Card user="Soniya Ambade" age={22} img="https://images.unsplash.com/photo-1760694121380-0dc12e8ac00f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>

      <Card user="Aman Sharma" age={20} img="https://images.unsplash.com/photo-1760465881538-8b17b33b0337?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687`"/>
    </div>
  )
}

export default App
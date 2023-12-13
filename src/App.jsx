//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import CounterCard from "./Components/counterCard"

function App() {

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center">
      <CounterCard name="Utkarsh"/>
      <CounterCard name="Mohan"/>
      </div>
      
      <div className="flex justify-center items-center">
      <CounterCard name="Ravindra"/>
      <CounterCard name="Sachin"/>

      </div>
    </div>
    
  )
}

export default App

//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react"

function App() {
  let [count, setCount] = useState(0)

  const addvalue = ()=>{
    if(count<20){
      count = count+1
      setCount(count)
    }
    else{
      setCount(0)
    }
    
  }

  const deletevalue = ()=>{
    if(count>0){
      count = count-1
      setCount(count)
    }
    else{
      setCount(0)
    }
    
  }
  return (
    <>
          <h1> Chai Code Aur React</h1>
          <h2> value is: {count}</h2>
          <button onClick={addvalue}>Add Value </button>
          <button onClick={deletevalue}>Remove Value</button>
    </>
  )
}

export default App

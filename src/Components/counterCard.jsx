import { useState } from 'react'

export default function counterCard({name}) {
    let [count, setCount] = useState(0)

    const addvalue = ()=>{
      if(count<20){
        // count = count+1
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
      }
      else{
        setCount(0)
      }
      
    }
  
    const deletevalue = ()=>{
      if(count>0){
        //count = count-1
        setCount(prev => prev-1)
        setCount(prev => prev-1)
        setCount(prev => prev-1)
        setCount(prev => prev-1)

      }
      else{
        setCount(20)
      }
      
    }
  return (
    <div className="bg-red-500 rounded-xl p-6 text-black">

    <h1 className="p-4"> Chai Code Aur React</h1>
    <h2 className="ml-20 p-4"> value is: {count}</h2>
    <div className="flex justify-center items-center">
    <button onClick={addvalue} className="rounded-xl">Add Value </button>
    <button onClick={deletevalue} className=" ml-20 rounded-xl">Remove Value</button>
    <h2>{name}</h2>

    </div>

  </div>
  )
}

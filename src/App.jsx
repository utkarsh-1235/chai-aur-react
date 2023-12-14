import Header from "./Components/Header"
import CounterCard from "./Components/counterCard"

function App() {

  return (
    <div className="h-screen w-full">
      <Header/>
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

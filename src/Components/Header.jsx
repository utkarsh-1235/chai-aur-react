// import React from 'react'

import { useCallback, useEffect, useRef, useState } from "react"

export default function Header() {
    const [length, setlength] = useState(8)
    const[numberAllow, setnumberAllow] = useState(false)
    const [charactersAllow, setcharactersAllow] = useState(false)
    const [password, setpassword] = useState("")

    // useRef hook
    const passwordRef = useRef(null)
    const passwordGenerator = useCallback(()=>{

        let pass= ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllow) str +="12345678910"
        if(charactersAllow) str += "~!@#$%^&*()?><,.{}[];:'"

        for(let i=1; i<=length; i++){
                 let char = Math.floor(Math.random() * str.length +1)   

                 pass += str.charAt(char);
        }
        setpassword(pass)
    },[length, numberAllow, charactersAllow, setpassword])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      passwordGenerator()
    },[length, numberAllow, charactersAllow, passwordGenerator])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password}
        className="outline-none px-3 py-1 w-full" 
        placeholder="password"
        readOnly
        ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard}className="outline-none bg-blue-700 text-white px-3 py-0 5 shrink-0">Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={e=>setlength(e.target.value)} />
          <label className="text-white text-lg">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={numberAllow}
          onChange={()=>{
            setnumberAllow(prev=> !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked={charactersAllow}
          onChange={()=>{
            setcharactersAllow(prev=> !prev)
          }} />
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>
    </div>
  )
}


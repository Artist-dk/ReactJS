// useRef 

import React, { useRef, useState } from 'react'

export default function Ref() {
  const refElement = useRef("")
  const [name, setName] = useState("Artist")
  console.log(refElement)
  function reset() {
    setName('Artist')
    refElement.current.focus()
  }
  function handleInput() {
    refElement.current.style.color = "red"
  }
  return (
    <div>
      <h1>Learning useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

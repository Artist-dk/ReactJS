import React, { useEffect, useState } from 'react'

export default function Effect() {
  const [count, setCounter] = useState(0)
  const [data, setData] = useState("Ram")

  function updateCount() {
    setCounter(count + 1)
  }

  function updateData() {
    setData("Seeta")
  }
  useEffect(() => {
    console.log("component mounted")
  }, [count])
  return (

    <div>
      <h1>Button Clicked {count} </h1>
      <button onClick={updateCount}>Click</button>
      <button onClick={updateData}>updateData</button>
    </div>
  )
}

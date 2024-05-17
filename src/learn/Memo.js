import React, { useState, useMemo } from 'react'

function Memo() {
  const [add, setadd] = useState(0)
  const [minus, setminus] = useState(100)

  // useMemo
  const multiplication = useMemo(
    function multiply() {
      console.log(add*10)
      return add * 10
    }, [add]
  )
  //------------
  return (
    <>
      <h1>Lear useMemo</h1>

      <button onClick={()=>setadd(add+1)}>Addition</button>
      <button onClick={()=>setminus(minus-1)}>Subtraction</button>

      <br />
      <span>{multiplication}</span> <br />
      <span>{add}</span><br />
      <span>{minus}</span>
    </>
  )
}

export default Memo
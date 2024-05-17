import React, {useState} from 'react'
import ChildA from './Memo1/ChildA'

export default function Memo1() {
  const [add, setadd] = useState(0)
  return (
    <div>
      <h1>Learning useCallback</h1>
      <ChildA />
      <h1>{add}</h1>
      <button onClick={()=>setadd(add+1)}>Addition</button>
    </div>
  )
}

import React, { useCallback, useState } from 'react'
// import ChildA from './Memo1/ChildA';
import ChildA from './callback/ChildA';


function Callback() {
  const [add, setadd] = useState(0);
  const [count, setcount] = useState(0)

  const Learning = useCallback(
    () => {
      // first
    },
    [count],
  )
  


  return (
    <div>
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} />
      <h1>{add}</h1>
      <h1>{count}</h1>
      <button onClick={()=>setadd(add+1)} >Addition</button>
      <button onClick={()=>setcount(count+1)}>count</button>
    </div>
  )
}

export default Callback
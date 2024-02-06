import React from 'react'
import { useState } from 'react';

export default function State() {
  const [count, setCounter] = useState(0)

  var x = 10;

  function updateState1() {
    x = 25;
    console.log(x)
  }
  console.log(x)

  function updateState2() {
    setCounter(count+1)
  }

  return (
    <div>
      <h1>Learning State {count}</h1>
      <button onClick={updateState1}>update State 1</button>
      <button onClick={updateState2}>update State 1</button>
    </div>
  )
}
/* Rules of Hooks - 
  *  Must be written inside function component
  * must be import in component
  * must be call at top level of component
  * cannot be conditional
*/
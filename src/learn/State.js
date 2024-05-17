
import { useState } from 'react';

// useState using objects

export default function State() {

  const [count, setCount] = useState(0)
  const [ref1, setRef1] = useState("");
  const [allvalues, setAllvalues] = useState({firstname:"Artist1",lastname:"Hacker1"});

  let x = 10;

  function updateState1() {
    x = 25;
    console.log(x)
    setRef1(x)
  }

  // setref2(x)
  console.log(x)

  function updateState2() {
    setCount(count+1)
  }
  function updateName() {
    setAllvalues({...allvalues,firstname:"Artist2"})
  }

  return (
    <div>
      <h1>Learning State {count}</h1>
      <button onClick={updateState1}>update State 1</button>
      <button onClick={updateState2}>update State 1</button>
      <button onClick={updateName}>update frist name</button>
      <p>{ref1}</p>

      <h1>First name is {allvalues.firstname} and last name is {allvalues.lastname}</h1>
    </div>
  )
}
/* Rules of Hooks - 
  *  Must be written inside function component
  * must be import in component
  * must be call at top level of component
  * cannot be conditional
*/
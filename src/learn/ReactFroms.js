import React, {useState, useRef} from 'react'

export default function ReactFroms() {
  const [name, setname] = useState("Artist")
  const refObject = useRef();
  function handleChange(e) {
    console.log(e.target)
    setname(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log((refObject.current.value).toUpperCase())
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>First Name:</label>
        {/* <input type="text" value="artist" /> */}
        {/* <input type="text" value={name} onChange={(e)=> setname(e.target.value)}/> */}
        <input type="text" value={name} ref={refObject} onChange={handleChange}/>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

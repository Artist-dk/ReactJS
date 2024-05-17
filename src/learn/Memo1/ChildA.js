import React,{memo} from 'react'

function ChildA() {
  console.log("Child component")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA);
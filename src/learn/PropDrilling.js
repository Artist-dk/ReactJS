import React from 'react'
import ChildA from './child/ChildA'

export default function PropDrilling() {
  const name = "Artist"
  return (
    <>
     <ChildA name={name} /> 
    </>
  )
}

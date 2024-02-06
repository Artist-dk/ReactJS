import React, { useContext } from 'react'
import {data, data1} from '../Context'

export default function Context() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>Hi my name is {name} and my gender is {gender}</h1>
    </>
  )
}

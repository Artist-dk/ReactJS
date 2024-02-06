import React, { createContext } from 'react'

const data = createContext();
const data1 = createContext();

export default function Context() {
  const name = "Artist"
  const gender = "Male"
  return (
    <>
      <data1.Provider value={name} >
        <data1.Provider value={gender} >
          <Context />
        </data1.Provider>
      </data1.Provider>
    </>
  )
}

export {data, data1}
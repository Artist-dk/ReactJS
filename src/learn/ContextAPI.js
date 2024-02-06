import React, { createContext } from 'react'
import ChildA from './child/ChildA';
import ContextConsumer from './child/ContextAPIConsumer';

const data = createContext();
const data1 = createContext();
export default function Context() {
  const name = "Artist";
  const gender = "Male"
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ContextConsumer/>
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export {data, data1};
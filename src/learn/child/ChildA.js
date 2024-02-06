import React from 'react'
import ChildC from './ChildB'

export default function ChildA({name}) {
  return (
    <div>
      <ChildC name={name} />
    </div>
  )
}

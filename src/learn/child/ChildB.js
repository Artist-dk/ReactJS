import React from 'react'
import ChildC from './ChildC'

export default function ChildB({name}) {
  return (
    <div>
      <ChildC name={name} />
    </div>
  )
}

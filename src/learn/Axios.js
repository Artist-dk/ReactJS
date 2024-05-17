import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
  const [data, setdata] = useState([]);
  useEffect(() => {  
    return () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=> {
        response.data.map((d)=>{
          console.log(d)
        })
        setdata(response.data)
      })
    }
  }, [])  
  return (
    <div>Axios
      {data.map((d)=>{
        return (
          <div>{d.name}</div>
        )
      })}
    </div>
  )
}

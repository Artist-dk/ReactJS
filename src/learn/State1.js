import { useState } from "react";

// useState using array

export default function State1() {
  const [items, setItems] = useState([]);
  console.log(items)
  function addItems() {
    setItems([...items, {
      id: items.length,
      value: "Pen"
    }]);
  }
  return (
    <div>
      <ol>
        {items.map(item=>( 
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={addItems}>Add Items</button>
    </div>
  )
}

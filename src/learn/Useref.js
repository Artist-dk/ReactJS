import React, { useRef, useEffect } from 'react';

function Useref() {
  // Create a ref
  const myRef = useRef(null);

  useEffect(() => {
    // Access and manipulate the DOM element using the ref
    if (myRef.current) {
      myRef.current.style.backgroundColor = 'lightblue';
    }
  }, []); // useEffect runs only once after initial render

  return (
    <div ref={myRef}>
      Hello, useRef!
    </div>
  );
}

export default Useref;

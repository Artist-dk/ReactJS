import React from 'react'
import './scrollsnap.css'; 
export default function ScrollSnap() {
  return (
    <div className="scroll-container">
    <div className="scroll-item">Item 1</div>
    <div className="scroll-item">Item 2</div>
    <div className="scroll-item">Item 3</div>
      <div className="scroll-item">Item 1</div>
      <div className="scroll-item">Item 2</div>
      <div className="scroll-item">Item 3</div>
      <div className="scroll-item">Item 1</div>
      <div className="scroll-item">Item 2</div>
      <div className="scroll-item">Item 3</div>
      <div className="scroll-item">Item 1</div>
      <div className="scroll-item">Item 2</div>
      <div className="scroll-item">Item 3</div>
      {/* Add more items as needed */}
    </div>
  );
}

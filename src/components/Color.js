import React from "react";
import '../App.css'


export default function Color(props) {
 
  function renderColorOptions() {
    return props.mode.map(color => (
      <div 
        key={color.colorId}
        className={`color-mode ${color.color}`}
        onClick={() => props.setColor(color.colorId)}
      />
    ));
  }

  return (
    <section className="color-toggle-container">
    {renderColorOptions()}
    </section>
  )
}

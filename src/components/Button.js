import React from 'react';

export default function Button(props){

  function decideColor() {
    return (
      props.mode[props.color].darkShade
    )
  }
  
  return(
    <button 
      onClick={props.rollDice} 
      style={{backgroundColor: decideColor()}}
    >
      <span>{props.tenzies ? "Play Again" : "Roll"}</span>
    </button>
  );
}
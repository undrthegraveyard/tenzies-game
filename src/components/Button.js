import React from 'react';

export default function Button(props){
  
  return(
    <button onClick= { props.rollDice }>
      <span>{props.tenzies ? "Play Again" : "Roll"}</span>
    </button>
  );
}
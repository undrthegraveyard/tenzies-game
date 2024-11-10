import React from 'react';

export default function Header(props){
  
  const styles = {
    color: props.mode[props.color].darkShade
  }
  return(
    <header>
        <h1 style={styles}>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    </header>
  );
}
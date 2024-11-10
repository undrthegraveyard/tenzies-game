import React from 'react';
import DieFace from './DieFace'

export default function Die(props){
  //initialising a variable style with a DOM property of background color with a condition to render bg color based on the isHeld property
 
  const styles = {
    backgroundColor: props.isHeld
      ? props.mode[props.color].lightShade
      : "white"
  }
  return(
      <div className='die' style={styles} onClick={() => props.holdDie(props.id)}>
        <span className="die-num">
          <DieFace value={props.value}/> 
        </span>
      </div>
  )
}

//green color: "#59E391"
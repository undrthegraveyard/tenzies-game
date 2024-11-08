import React from 'react';
import DieFaceOne from './DieFaceOne'

export default function Die(props){
  //initialising a variable style with a DOM property of background color with a condition to render bg color based on the isHeld property
  const styles = {backgroundColor: props.isHeld ? "#59E391" : "white"}

  return(
      <div className='die' style={styles} onClick={() => props.holdDie(props.id)}>
        <span className="die-num">
          <DieFaceOne value={props.value}/> 
        </span>
      </div>
  )
}


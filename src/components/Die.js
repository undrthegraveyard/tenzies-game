import React from 'react';

export default function Die(props){
  return(
      <div className='die'>
        <span className="die-num">
          {props.value}
        </span>
      </div>
  );
}
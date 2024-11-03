import React from 'react';

export default function Die(props){
  return(
    <section className='dice-container'>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
      <div className='die'><span className="die-num">{props.value}</span></div>
    </section>
  );
}
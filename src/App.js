import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Die from './components/Die';
import Button from './components/Button';

export default function App() {

  function generateRandomDiceNumbers(){
    return(
      Array(10).fill(null).map(() => Math.floor(Math.random() * 6) + 1)
    );
  }

  
  return(
    <main>
      <Header />
      <section className='dice-container'>
          {generateRandomDiceNumbers().map(number => (
            <Die 
              value={number}
            />
          ))}
      </section>
      <Button />
    </main>
  );
}
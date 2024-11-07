import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Die from './components/Die';
import Button from './components/Button';
import { nanoid } from 'nanoid';

export default function App() {

  const [dice, setDice] = useState(generateRandomDiceNumbers);
  const [tenzies, setTenzies] = useState(false)

  //initializing a useEffect with the dice dependency to check if the user has satisfied all conditions for the game to declare them a winner or not 
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allValues = dice.every(die => die.value === dice[0].value)
    
    if(allHeld && allValues){
      setTenzies(true)
    }
    
  }, [dice])

  //function to create a new die
  function generateNewDie() {
    return {
      value: Math.floor((Math.random() * 6) + 1),
      isHeld: false,
      key: nanoid()
    }
  }

  //generating ten random number objects, and then pushing them into the newArray 
  function generateRandomDiceNumbers(){
    const newArray = []
    for(let i = 0; i < 10; i++){
      //initialising a new object with three properties, each object represents a number 
      newArray.push(generateNewDie())
    }
    return newArray;
  }
  
  //initializing a custom element dieElements to map over each element in the dice state 
  const dieElements = dice.map(die => 
    (<Die 
      //passing the each item(die) in the array as the value to every die component being rendered
      value={die.value}
      key={die.key} 
      id={die.key}
      isHeld={die.isHeld}
      holdDie={holdDie}
      />
     ))
  
  // initializing a function rollDice to generate a new array of numbers, and then updating the state
  function rollDice() {
    if(tenzies) {
      setDice(generateRandomDiceNumbers())
      setTenzies(false)
    }
    else {
      setDice(prevState => prevState.map(die => {
        return die.isHeld === true ? die : generateNewDie()
      }));
    }
  }
  
  //holdDie is a function to change the isHeld property in the state of that particular die component which is being clicked
  function holdDie(id) {
    setDice(prevSate => prevSate.map(die => {
      if(die.key === id){
        return {...die, isHeld : !die.isHeld}
      } else {
        return die
      }
    }))
  }

  return(
    <main>
      <Header />
      <section className='dice-container'>
          {dieElements}
      </section>
      <Button 
        rollDice={rollDice}
        tenzies={tenzies}
      />
    </main>
  );
}
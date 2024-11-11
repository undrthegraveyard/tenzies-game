import React, { useState, useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import './App.css';
import Header from './components/Header';
import Die from './components/Die';
import Button from './components/Button';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import Color from './components/Color'
import { COLOR_CONSTANTS } from './constants/colorConstant';
import Timer from './components/Timer'

export default function App() {

  //initialising state to have info about the game
  const [game, setGame] = useState({
    dice: generateRandomDiceNumbers(),
    tenzies: false,
    mode: COLOR_CONSTANTS
  })

  //initializing state to toggle the color of the game 
  const[color, setColor] = useState(0)

  //initializing variables to get the width and height of the window size 
  const {width, height} = useWindowSize()

  //initializing a useEffect with the dice dependency to check if the user has satisfied all conditions for the game to declare them a winner or not 
  useEffect(() => {
    const allHeld = game.dice.every(die => die.isHeld)
    const allValues = game.dice.every(die => die.value === game.dice[0].value)
    
    if(allHeld && allValues){
      setGame(prevGame => ({
        ...prevGame,
        tenzies: true
      }))
    }
    
  }, [game.dice])

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
  const dieElements = game.dice.map(die => 
    (<Die 
      //passing the each item(die) in the array as the value to every die component being rendered
      value={die.value}
      key={die.key} 
      id={die.key}
      isHeld={die.isHeld}
      holdDie={holdDie}
      mode={game.mode}
      color={color}
      />
     ))
  
  // initializing a function rollDice to generate a new array of numbers, and then updating the state
  function rollDice() {
    if(game.tenzies) {
      setGame(prevState => ({
        ...prevState,
        dice: generateRandomDiceNumbers(),
        tenzies: false
      }))
    }
    else {
      setGame(prevSate => ({
        ...prevSate,
        dice: prevSate.dice.map(die => {
          return die.isHeld ? die : generateNewDie()
        })
      }))
    }
  }
  
  //holdDie is a function to change the isHeld property in the state of that particular die component which is being clicked
  function holdDie(id) {
    setGame(prevSate => ({
      ...prevSate,
      dice: prevSate.dice.map(die => {
        if(die.key === id){
          return {...die, isHeld: !die.isHeld}
        }else {
          return die
        }
      })
    }))
  }

  return(
    <>
    <main>
    <Color 
    mode={game.mode}
    setColor={setColor}
    />
      {game.tenzies ? <Confetti 
        width={width}
        height={height}
      /> : ""}
      <Header 
        mode={game.mode}
        color={color}
      />
      <section className='dice-container'>
          {dieElements}
      </section>
      <Button 
        rollDice={rollDice}
        tenzies={game.tenzies}
        mode={game.mode}
        color={color}
      />
      <Timer />
    </main>
    </>
  );
}
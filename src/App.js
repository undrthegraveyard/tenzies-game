import React from 'react';
import './App.css';
import Header from './components/Header';
import Die from './components/Die';
import Button from './components/Button';

export default function App() {
  return(
    <main>
      <Header />
      <Die value={1}/>
      <Button />
    </main>
  );
}
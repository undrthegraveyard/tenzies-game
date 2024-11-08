import React from 'react'
import '../App.css'
import { nanoid } from 'nanoid'

export default function DieFaceOne(props) {
  
  const dotsPosition = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  }

  const dots = dotsPosition[props.value].map(position => (
    <div className={`dot dot-${position}`} key={nanoid()} />
  ))

  return (
    <div className="dieFace">
      {dots}
    </div>
  )
}

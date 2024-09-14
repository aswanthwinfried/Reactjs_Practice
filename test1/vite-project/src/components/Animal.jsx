import React from 'react'

function Animal() {
    let animals=['Cat','Dog','Horse'];
  return (
    
    <div>{animals.map(animal => (
      <ul>
       <li> <h1>{animal}</h1> </li>
        </ul>
    ) )}</div>
  )
}

export default Animal
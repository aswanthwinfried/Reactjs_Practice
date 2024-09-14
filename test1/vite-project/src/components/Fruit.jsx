import React from 'react'

function fruit({name,price}) {
  return (    // <li>The Price Of {name} is {price}</li>
    
    <li>{price>100 ? <h3>The Price Of {name} is {price}</h3> : " "}</li>
)
}

export default fruit
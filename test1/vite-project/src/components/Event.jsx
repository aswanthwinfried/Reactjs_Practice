import React from 'react'

function Event() {
    function sayHello(){
        console.log("Hello");
    }
  return (
    <button onClick={sayHello}>Click Me to Say Hello</button>
  )
}

export default Event
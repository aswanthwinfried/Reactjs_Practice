import React , {useState} from 'react'

const Counter = () => {

    const [count , setCount] = useState(0);
    const [factor , setFactor] = useState(1);

    function increment(){
        setCount(count+factor)    
        // reRendering Process will Occur
    }

    function decrement(){
        setCount(count-factor)  
    }

    function incrementFactor(){
        setFactor(factor+1)    
        // reRendering Process will Occur
    }

    function decrementFactor(){
        setFactor(factor-1)  
    }




  return (
    <div>


        <h1>This is My Counter : {count}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>Set My Factor: {factor}</h1>
        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>


    
    </div>


  )
}

export default Counter
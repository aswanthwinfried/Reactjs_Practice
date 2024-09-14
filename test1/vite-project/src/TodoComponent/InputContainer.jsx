import React from 'react'

function InputContainer({inputVal,writeTodo,addTodo}) {
  return (
<div className='input-container'>
    <input type="text" value={inputVal} placeholder='Enter the Task' onChange={writeTodo}/>
    <button onClick={addTodo}>+</button>
</div>
    
  )
}

export default InputContainer
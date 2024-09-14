import Hello from './components/Hello'
import Bye from './components/Bye'
import Animal from './components/Animal'
import Fruits from './components/Fruits'
import Event from './components/Event'
import Counter from './components/Counter'
import Form from './components/Form'
import {useState} from 'react'
import './App.css'
import InputContainer from './TodoComponent/InputContainer'
import TodoContainer from './TodoComponent/TodoContainer'
import Todo from './TodoComponent/Todo'
function App() {

  const [inputVal , setInputVal] = useState('')
  const [todos , setTodos] = useState([]);


  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal!==''){
        setTodos((prevTodos) => [...prevTodos , inputVal])
        setInputVal('')
    }
  }


  function delTodo(todoIndex){
    setTodos((prevTodos)=>
      prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex != todoIndex
    })
  );

  }


  // let seatNum = [1,5,6];
  // let person ={
  //   name:'Fried',
  //   phone:'909090',
  //   seatNum:[2,4,5],
  // }
  
  return (
    <>

    <main>
      <h1>To Do List </h1>

      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      <TodoContainer todos={todos} delTodo={delTodo}/>



    </main>



    {/* <Hello person={person}/> */}
    {/* <Animal/> */}

    {/* <Fruits/> */}

    {/* <Event/> */}

    {/* <Counter/> */}

    {/* <Form/> */}


    {/* <Hello name='Aswanth' phone='768766886' seatNum='12'/>
    <Hello name='Win Fried' phone='969979797' seatNum='13'/> */}
    {/* <Bye/> */}
    </>
  )
}

export default App

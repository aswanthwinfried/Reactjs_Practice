import React , {useState} from 'react'

function Form() {

    const [name , setName] = useState({firstname : '' , lastname:''});
    // const [lastname , setlatName] = useState('');

    // function handlechange(e){
    //     setText(e.target.value)
    // }

    function handleSubmit(e){
       e.preventDefault() 
       console.log(name)
    }
  return (
    <form>
        <h1>{name.firstname} - {name.lastname}</h1>
        <label>FirstName : </label>
        <input onChange={(e)=>setName({...name , firstname : e.target.value})} type="text" value={name.firstname}/>
        <label>LastName : </label>
        <input onChange={(e)=>setName({...name , lastname:e.target.value})} type="text" value={name.lastname}/>

        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
    </form>
  )
}

export default Form
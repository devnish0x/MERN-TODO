import React, { useState } from 'react'
import Create from './create'
import { useEffect } from 'react'
import axios from 'axios'
import './home.css'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])

    const handleEdit= (id) =>{
      axios.put('http://localhost:3001/update/'+id)
      .then(result =>
        location.reload())
      .catch(err =>console.log(err))
    }

    const handleDelete = (id) =>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result =>
        location.reload())
      .catch(err =>console.log(err)) 
    }



  return (
    <div className="create_form">
      
      <h1>ToDo List</h1>
      <Create />  
      {
        todos.length == 0 ?
        <div><h2>No Records</h2></div> 
        :
        todos.map(todo => (
            <div className='todotasks'>
              <div className="checkbox" onClick={() =>handleEdit(todo._id)}>
                {todo.done ?
                <BsFillCheckCircleFill className ='icon'></BsFillCheckCircleFill>
                :<BsCircleFill className ='icon'/>
                } 
                <p className={ todo.done ? "lineThrough" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' onClick={() =>handleDelete(todo._id)}/></span>
              </div>
            </div>
        ))
      }

    </div>
    
  )
}

export default Home

import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Create() {  
  const [task,setTask] = useState('')

  const handleAdd = () =>{
    axios.post('http://localhost:3001/add', {task})
    .then(result => {
      location.reload()
      setTask('')
  })
    .catch(err => console.log(err))
  }
  return (

    <div className="create">
        <input type="text" name="" id="" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your task here'/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create

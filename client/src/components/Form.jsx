import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Form = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  useEffect(() => {
    if(params.id) {
      (async() => {
        const data = await fetch(`http://localhost:4000/tasks/${params.id}`)
        const task = await data.json()
        setTask({
          title: task.title,
          description: task.description
        })
      })()
    }
  }, [])

  const [loading, setLoading] = useState(false)
  

  const handleChange = (e) => {
    setTask({
      ...task, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    if (params.id){
      const res = await fetch(`http://localhost:4000/tasks/${params.id}`, {
      method:"PUT",
      body: JSON.stringify(task),
      headers: {"Content-Type": "application/json"}
      })
      const data = await res.json()
    }else{
      const res = await fetch('http://localhost:4000/tasks', {
        method:"POST",
        body: JSON.stringify(task),
        headers: {"Content-Type": "application/json"}
      })
      const data = await res.json()
    }
    setLoading(false)
    navigate('/')
  }
  const buttonBool = !task.title || !task.description
  return (
    <form onSubmit={handleSubmit} className=' bg-blue-900 w-auto flex flex-col justify-evenly items-center text-gray-100 rounded-2xl py-1 mt-4 px-6 font-semibold'>
      <span className='self-center text-xl font-semibold whitespace-nowrap my-2'>New Task</span>
      <input onChange={handleChange} type="text" name='title' className='w-max my-2 text-gray-700' placeholder='Title' value={task.title}/>
      <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" className='w-max my-2 text-gray-700' placeholder='Description' value={task.description}></textarea>
      <button type="submit" className={buttonBool? 'bg-gray-500 rounded-md px-5 py-2 my-3 text-gray-300' : 'bg-blue-700 rounded-md px-5 py-2 my-3'} disabled={buttonBool}>
        {
          loading? "loading...": "Add"
        }
      </button>
    </form>
  )
}

export default Form
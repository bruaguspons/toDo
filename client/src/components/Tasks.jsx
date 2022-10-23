import React, {useEffect, useState} from 'react'
import Task from './Task'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const taskFetch =async () => {
    const data = await fetch('http://localhost:4000/tasks')
    const tasksData = await data.json()
    console.log(tasksData)
    setTasks(tasksData) 
    }
    taskFetch()
  }, [])

  return (
    <div>
      {
        tasks.map((task) => (
          <Task task={task} key={task.id}/>
        ))
      }
    </div>
    
  )
}

export default Tasks
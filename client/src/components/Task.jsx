import React from 'react'
import { useNavigate } from 'react-router-dom'
const Task = ({task}) => {
    const navigate = useNavigate()
    const {title, description, id} = task
    const handleDelete = async () => {
        await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'DELETE'
        })
    }

    const handleEdit = () => {
        navigate(`/tasks/edit/${id}`)
    }

  return (
    <div className='bg-blue-900 flex flex-col justify-evenly items-center my-3 p-4 rounded-2xl self-center text-xl font-semibold whitespace-nowrap text-gray-100'>
        <span className='mb-4'>{title}</span>
        <div className='bg-blue-700 w-64 h-64 rounded-2xl p-3 mb-3'>
            {description}
        </div>
        <div className='w-full flex flex-row justify-evenly'>
            <button onClick={handleEdit} className='bg-green-600 rounded-2xl px-4 py-2'>Update</button>
            <button onClick={handleDelete} className='bg-red-700 rounded-2xl px-4 py-2'>Delete</button>
        </div>
    </div>
  )
  }

export default Task
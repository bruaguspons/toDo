import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navar = () => {
  const navigate = useNavigate()

  return (
    <nav className="w-full bg-gray-700 border-gray-900 px-2 sm:px-4 py-2.5 rounded-l text-gray-100">
      <div className="flex justify-between items-center">
        <Link to="/" className='flex items-center'>
          <img src="/logo.svg" className=" bg-gray-200 mr-3 p-1 h-9 rounded-full" alt="App Logo"></img>
          <span className="self-center text-xl font-semibold whitespace-nowrap ">To-Do App</span>
        </Link>
        
        <button className='bg-blue-700 rounded-md px-5 py-2' onClick={() => navigate('/tasks/add')}>New Task</button>
      </div>
    </nav>  
  )
}

export default Navar
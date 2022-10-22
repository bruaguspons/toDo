import './App.css'
import Tasks from './components/Tasks'
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tasks/>}></Route>
        <Route path='/task/add' element={<Form/>}></Route>
        <Route path='/task/edit' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

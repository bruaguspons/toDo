import Tasks from './components/Tasks'
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return(
    <div className="w-full flex flex-col items-center">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Tasks/>}></Route>
        <Route path='/tasks/add' element={<Form/>}></Route>
        <Route path='/tasks/edit/:id' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

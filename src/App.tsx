import './App.css'
import { Route, Routes } from 'react-router-dom'
import Show from './pages/Show'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className="container mx-auto text-center w-11/12 lg:w-3/4">
        <h1 className='text-5xl font-bold p-4'>My Clone</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<Show />} />
        </Routes>
      </div>
    </>
  )
}

export default App

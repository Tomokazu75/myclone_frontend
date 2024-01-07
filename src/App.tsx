import { ChangeEvent, useState } from 'react'
import './App.css'
import Posts from './components/Posts'

function App() {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className='text-5xl p-4'>My Clone</h1>
        <form>
          <input
            type='text'
            value={value}
            placeholder='Ask here...'
            onChange={(e) => {handleChange(e)}}
            className='border border-solid border-gray-400 p-2'
          />
          <button
            type='submit'
            className="bg-blue-400 border border-solid border-gray-400 p-2"
          >
            送信
          </button>
        </form>
        <Posts />
      </div>
    </>
  )
}

export default App

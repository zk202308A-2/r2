import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-4xl bg-amber-400 underline rounded-4xl'>
        Hello World
      </div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </>
  )
}

export default App

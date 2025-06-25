import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import CountContainer from './components/counter/counterContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContainer></CountContainer>
    </>
  )
}

export default App

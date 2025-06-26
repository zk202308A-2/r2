import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import CountContainer from './components/counter/counterContainer'
import KioskContainer from './components/kiosk/kioskContainer'
import Count2Container from './components/counter2/counter2Conatiner'
import TodoInput from './components/todo/todoInput'
import TodoListContainer from './components/todo/todoListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoListContainer/>
      <TodoInput/>
      <KioskContainer></KioskContainer>
    </>
  )
}

export default App

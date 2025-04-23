import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Count from "./components/count/Count"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Count/>
    </>
  )
}

export default App

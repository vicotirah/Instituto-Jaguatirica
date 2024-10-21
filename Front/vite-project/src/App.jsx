import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/pages/Menu'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu/>
    <article>
      Essa é a página inicial
    </article>
    </>
  )
}

export default App

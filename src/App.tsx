import { useState } from 'react'
import './App.css'
import { LoginCard } from './components/LoginCard/LoginCard'
import { NavigationMenu } from './components/NavigationMenu/NavigationMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="backDrop">
      <LoginCard></LoginCard>
      </div>
    </>
  )
}

export default App

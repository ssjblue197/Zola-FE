import { useState } from 'react'
import { MainLayout } from './components/layout/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainLayout/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  let count = 0

  return (
    <div className="App">
      <h1>{count}</h1>
      <button>Increase count</button>
    </div>
  )
}

export default App

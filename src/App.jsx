import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Tabs from './components/Tabs'
import SMP from './components/SMP'
import Progress from './components/Progres'

function App() {

  return (
    <div className='App'>
        <Counter />
        <Tabs />
        <SMP />
        <Progress />
    </div>
  )
}

export default App

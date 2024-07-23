import React, { useState } from 'react'
import CounterDisplay from './components/CounterDisplay'
import CounterControls from './components/CounterControls'

const App = () => {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount((count)=>count+1);
  }
  const remove = () => {
    setCount((count)=>count-1)
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <div className='w-screen h-screen bg-zinc-800 flex items-center justify-center'>
      <div className='w-[30vw] min-h-[30vw] bg-violet-800 rounded-md flex flex-col justify-around'>
        <h1 className='text-center mt-2 font-semibold text-white text-3xl'>Counter</h1>
        <CounterDisplay count={count}/>
        <CounterControls add={add} remove={remove} reset={reset}/>
      </div>
    </div>
  )
}

export default App
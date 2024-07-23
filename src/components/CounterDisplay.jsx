import React from 'react'

const CounterDisplay = ({count}) => {
  return (
    <div className='text-center text-white'>
       <h1>Current Count: {count}</h1>
    </div>
  )
}

export default CounterDisplay
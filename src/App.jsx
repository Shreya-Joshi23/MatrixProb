import './App.css'
import Matrix from './Components/Matrix'
import React from 'react'

function App() {

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <p className='text-3xl font-bold m-4'>Edxso Assignment</p>
      <Matrix matrixsize={9}/>
    </div>
  )
}

export default App

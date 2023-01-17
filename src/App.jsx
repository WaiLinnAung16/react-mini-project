import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import './index.css'
import Meals from './Meals'
import Navbar from './Nav/Navbar'

const App = () => {
  return (
    <div className=' container mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals></Meals>}/>
        <Route path='/detail/:id' element={<Detail></Detail>}/>
      </Routes>
    </div>
  )
}

export default App
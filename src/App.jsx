import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Admin from './components/Admin'
import CrearColor from './components/CrearColor'
import EditarColor from './components/EditarColor'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Admin></Admin>}></Route>
          <Route exact path='/crear' element={<CrearColor></CrearColor>}></Route>
          <Route exact path='/editar/:id' element={<EditarColor></EditarColor>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
import { MainRoutes } from './routes/MainRoutes'



function App() {

  return (
    <div className="App">
      <h1>Galeria de Fotos</h1>
      <hr /> 
      <MainRoutes />   
    </div>
  )
}

export default App

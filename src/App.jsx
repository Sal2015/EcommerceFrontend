import React, { useState } from 'react'
import MenuAppBar from './components/MenuAppBar'
import Card from './components/ProductCard'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import First from './components/First'

function App() {

  const [count , setCount] = useState(0)
  return (
    <>
    

    <MenuAppBar />
    <BrowserRouter>
    <Routes>

<Route path="/" element={<First data={{name:"ttt"}} />}  />
</Routes>
    </BrowserRouter>
    

   
    </>
    
  )
}

export default App
import React from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Mobile from './components/Mobile'
import Navbar from './components/Navbar'
import Next from './components/Next'
import Product from './components/Product'

function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <Navbar/>
      <Home/>
      <Next/>
      <Product/>
      <Mobile/>
      <Contact/>
    </div>
  )
}

export default App

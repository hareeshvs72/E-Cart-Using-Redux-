import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import { Route, Routes } from 'react-router-dom'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/:id/view' element={  <View/>}/>
      <Route path='/wishlist' element={  <Wishlist/>}/>
      <Route path='/cart' element={  <Cart/>}/>
      <Route path='/*' element={  <Pnf/>}/>
    </Routes>
 
    <Footer/>

    </>
  )
}

export default App

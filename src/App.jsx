import { useState } from 'react'
import './App.scss'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Multichain from './components/Multichain/Multichain'
import Safety from './components/Safety/Safety'
import Support from './components/Support/Support'

function App() {
  return (
    <div className="App">
      <Header/>
      <Safety/>
      <Multichain/>
      <Support/>
      <LogIn/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default App

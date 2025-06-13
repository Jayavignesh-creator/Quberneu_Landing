import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
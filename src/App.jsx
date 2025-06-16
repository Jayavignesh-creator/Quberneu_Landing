import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-neutral-light font-fedra text-neutral-dark overflow-x-hidden">
      <AnimatePresence>
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navigation />
          <Hero />
          <Features />
          <Services />
          <Portfolio />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
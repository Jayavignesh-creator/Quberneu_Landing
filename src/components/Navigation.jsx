import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      className="main-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-nav">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Quberneu Logo SVG - Modern Q logo */}
          <svg 
            className="logo logo-svg" 
            viewBox="0 0 120 40" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ cursor: 'pointer' }}
          >
            {/* Background circle for Q */}
            <circle 
              cx="20" 
              cy="20" 
              r="18" 
              fill="#1922fb" 
              stroke="#ffffff" 
              strokeWidth="2"
            />
            
            {/* Q letter */}
            <text 
              x="20" 
              y="28" 
              textAnchor="middle" 
              fill="#ffffff" 
              fontSize="20" 
              fontFamily="TomatoGrotesk-Medium, sans-serif" 
              fontWeight="600"
            >
              Q
            </text>
            
            {/* Company name */}
            <text 
              x="45" 
              y="16" 
              fill="#2b2b2e" 
              fontSize="16" 
              fontFamily="TomatoGrotesk-Medium, sans-serif" 
              fontWeight="600"
            >
              Quberneu
            </text>
            
            {/* Tagline */}
            <text 
              x="45" 
              y="28" 
              fill="#1922fb" 
              fontSize="10" 
              fontFamily="FedraSansStd, sans-serif"
            >
              Neural AI Solutions
            </text>
          </svg>
        </motion.div>
        
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
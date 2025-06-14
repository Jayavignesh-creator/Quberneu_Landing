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
          {/* Quberneu Logo SVG - simplified version */}
          <svg 
            className="logo logo-svg" 
            viewBox="0 0 134.57 35.505" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ cursor: 'pointer' }}
          >
            <g fill="#2b2b2e">
              <path d="M86.82,11.67c-3.31.11-5.91,2.87-5.84,6.18s2.80,5.94,6.11,5.91s5.98-2.73,5.98-6.04c-.06-3.39-2.86-6.09-6.25-6.05m6.25,12.58c-1.72,1.53-3.94,2.37-6.25,2.37-4.88-.16-8.72-4.23-8.61-9.11s4.13-8.77,9.01-8.71s8.81,4.03,8.81,8.91c0,.14,0,.28-.01,.42h.01v13.68h-2.97Z" transform="translate(-77.36,-8.89)"/>
              <path d="M96.75,34.92c2.27.01,4.37-1.20,5.50-3.17h-11c1.13,1.97,3.23,3.19,5.50,3.17m0-12.08c-3.39-.05-6.19,2.65-6.25,6.04h15.46c.13,3.75-2.04,7.21-5.47,8.74s-7.45.81-10.15-1.80-3.55-6.60-2.14-10.08,4.79-5.76,8.55-5.76c2.43-.01,4.77.92,6.52,2.61l-2.10,2.03c-1.19-1.14-2.77-1.78-4.42-1.77" transform="translate(-77.36,-8.89)"/>
              <path d="M65.12,46.82c-3.31.11-5.91,2.87-5.84,6.18s2.80,5.94,6.11,5.91s5.98-2.73,5.98-6.04c-.06-3.39-2.86-6.09-6.25-6.05m0,14.95c-4.88-.16-8.72-4.23-8.61-9.11s4.13-8.77,9.01-8.71s8.81,4.03,8.81,8.91c-.09,5.00-4.21,8.99-9.22,8.91" transform="translate(-77.36,-8.89)"/>
              <path d="M125.65,32.07c2.35.01,4.62-.87,6.35-2.46l-2.10-2.03c-1.17,1.05-2.68,1.63-4.25,1.62-2.21.08-4.28-1.05-5.41-2.95s-1.13-4.27,0-6.17,3.20-3.03,5.41-2.95c1.57,0,3.08.57,4.25,1.62l2.10-2.03c-1.73-1.59-4.00-2.47-6.35-2.46-3.26-.12-6.32,1.55-7.98,4.35s-1.66,6.29,0,9.09,4.73,4.47,7.98,4.35" transform="translate(-77.36,-8.89)"/>
              <path d="M31.98,32.07c2.35.01,4.62-.87,6.35-2.46l-2.10-2.03c-1.17,1.05-2.68,1.63-4.25,1.62-2.21.08-4.28-1.05-5.41-2.95s-1.13-4.27,0-6.17,3.20-3.03,5.41-2.95c1.57,0,3.08.57,4.25,1.62l2.10-2.03c-1.73-1.59-4.00-2.47-6.35-2.46-3.26-.12-6.32,1.55-7.98,4.35s-1.66,6.29,0,9.09,4.73,4.47,7.98,4.35" transform="translate(-77.36,-8.89)"/>
            </g>
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
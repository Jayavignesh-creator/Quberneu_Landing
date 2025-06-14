import React from 'react'
import { motion } from 'framer-motion'
import QuberneuLogo from './QuberneuLogo'

const Hero = () => {
  const handleContactUs = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div id="home" className="hero-section">
      {/* Background pattern overlay */}
      <div className="bg-pattern"></div>
      
      <div className="hero-content">
        <div className="hero-grid">
          {/* Left side - Main content */}
          <motion.div
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="ms-partner-badge" variants={itemVariants}>
              Microsoft Certified Partner
            </motion.div>
            
            <motion.h1
              className="hero-title"
              variants={itemVariants}
            >
              Impact,
              <span className="accent"> delivered</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              variants={itemVariants}
            >
              In an industry that often falls short of its promises, Quberneu delivers. 
              Quberneu's unique project delivery framework helps organisations create dramatic 
              shifts in efficiencies and customer experiences with new technology.
            </motion.p>
            
            <motion.div
              className="btn-group"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleContactUs}
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => {
                  const solutionsSection = document.querySelector('#solutions')
                  if (solutionsSection) {
                    solutionsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Our Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Vision with Logo */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="vision-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                To revolutionize business intelligence through neural AI technology, 
                making advanced analytics accessible to every organization.
              </p>
            </motion.div>
            
            <motion.div
              className="logo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <QuberneuLogo size={200} animated={true} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1922fb">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </motion.div>
    </div>
  )
}

export default Hero
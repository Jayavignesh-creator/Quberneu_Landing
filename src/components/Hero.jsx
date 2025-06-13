import React from 'react'
import { motion } from 'framer-motion'

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
        <motion.div
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
            In an industry that often falls short of its promises, Codec delivers. 
            Codec's unique project delivery framework helps organisations create dramatic 
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
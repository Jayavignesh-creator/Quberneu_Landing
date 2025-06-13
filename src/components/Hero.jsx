import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleGetStarted = () => {
    alert('Welcome to Quberneu! 🚀')
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
    <div id="home" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Welcome to
            <motion.span
              className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {" "}Quberneu
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A modern landing page built with React, Vite and Tailwind CSS. 
            Fast, responsive, and ready for your next project.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="bg-white/80 backdrop-blur-sm text-gray-800 border-2 border-gray-300 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Lightning Fast",
      description: "Built with Vite for incredibly fast development and optimized builds",
      bgColor: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Beautiful Design",
      description: "Styled with Tailwind CSS for modern, responsive design",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Developer Friendly",
      description: "Clean React component structure with modern JavaScript and best practices",
      bgColor: "bg-purple-100"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9 
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div id="features" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Everything you need to build modern web applications with cutting-edge technology
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
              >
                {feature.icon}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: false }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Features
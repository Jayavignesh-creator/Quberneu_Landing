import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Quberneu
        </motion.h2>
        
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading amazing experiences...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
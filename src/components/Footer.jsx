import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '🔗' },
    { name: 'Documentation', href: '#', icon: '📚' },
    { name: 'Support', href: '#', icon: '💬' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Quberneu
          </motion.h3>
          
          <motion.p
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Built with ❤️ using React + Vite + Tailwind CSS + Framer Motion
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: false }}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="group-hover:underline">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <p className="text-gray-500 text-sm">
              © 2024 Quberneu. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
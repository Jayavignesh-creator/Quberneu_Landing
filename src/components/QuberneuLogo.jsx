import React from 'react'
import { motion } from 'framer-motion'

const QuberneuLogo = ({ size = 150, animated = true }) => {
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0.7, scale: 1 },
    animate: { 
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <motion.div
      className="quberneu-logo-container"
      variants={animated ? logoVariants : {}}
      initial={animated ? "hidden" : "visible"}
      animate="visible"
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Glowing background */}
      <motion.div
        variants={animated ? glowVariants : {}}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(25, 34, 251, 0.3) 0%, rgba(25, 34, 251, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)'
        }}
      />

      {/* Orbiting elements */}
      <motion.div
        variants={animated ? orbitVariants : {}}
        animate="animate"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '20%',
            width: '8px',
            height: '8px',
            background: '#1922fb',
            borderRadius: '50%',
            opacity: 0.7
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '25%',
            width: '6px',
            height: '6px',
            background: '#1922fb',
            borderRadius: '50%',
            opacity: 0.5
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '10%',
            width: '4px',
            height: '4px',
            background: '#1922fb',
            borderRadius: '50%',
            opacity: 0.6
          }}
        />
      </motion.div>

      {/* Main logo - Q inside a hexagon with neural network pattern */}
      <motion.svg
        width={size * 0.8}
        height={size * 0.8}
        viewBox="0 0 120 120"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Hexagon background */}
        <motion.polygon
          points="60,15 90,30 90,60 60,75 30,60 30,30"
          fill="url(#logoGradient)"
          stroke="#1922fb"
          strokeWidth="2"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Neural network lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <line x1="45" y1="35" x2="75" y2="55" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
          <line x1="35" y1="45" x2="65" y2="35" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
          <line x1="55" y1="65" x2="85" y2="45" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
          <line x1="45" y1="55" x2="75" y2="65" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
        </motion.g>

        {/* Neural nodes */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, staggerChildren: 0.1 }}
        >
          <circle cx="45" cy="35" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="75" cy="55" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="35" cy="45" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="65" cy="35" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="55" cy="65" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="85" cy="45" r="2" fill="#ffffff" opacity="0.8"/>
        </motion.g>

        {/* Main Q letter */}
        <motion.text
          x="60"
          y="70"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="36"
          fontFamily="TomatoGrotesk-Medium, sans-serif"
          fontWeight="600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Q
        </motion.text>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1922fb" />
            <stop offset="50%" stopColor="#0f1ae6" />
            <stop offset="100%" stopColor="#1922fb" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Subtitle text */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-25px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'FedraSansStd, sans-serif',
          fontSize: '12px',
          color: '#1922fb',
          fontWeight: '500',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Neural AI
      </motion.div>
    </motion.div>
  )
}

export default QuberneuLogo
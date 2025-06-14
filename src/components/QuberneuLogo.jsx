import React from 'react'
import { motion } from 'framer-motion'

const QuberneuLogo = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const barVariants = {
    hidden: { 
      height: 0,
      opacity: 0
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const circleVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '300px',
        padding: '2rem'
      }}
    >
      {/* Main Logo Container */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1922fb 0%, #0f1ae6 100%)',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(25, 34, 251, 0.3)'
        }}
      >
        {/* Analytics Chart Bars */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
          marginBottom: '1rem',
          height: '60px'
        }}>
          {[40, 65, 45, 80, 55, 75].map((height, index) => (
            <motion.div
              key={index}
              variants={barVariants}
              style={{
                width: '12px',
                background: `linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0.95))`,
                borderRadius: '6px 6px 0 0',
                maxHeight: `${height}%`
              }}
            />
          ))}
        </div>

        {/* Central Data Point */}
        <motion.div
          variants={circleVariants}
          style={{
            width: '20px',
            height: '20px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
            marginBottom: '1rem',
            boxShadow: '0 0 15px rgba(255,255,255,0.5)'
          }}
        />

        {/* Company Name */}
        <motion.div
          variants={circleVariants}
          style={{
            color: 'white',
            fontFamily: 'TomatoGrotesk-Medium, sans-serif',
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '1px'
          }}
        >
          QUBERNEU
        </motion.div>
      </motion.div>

      {/* Analytics Label */}
      <motion.div
        variants={circleVariants}
        style={{
          color: '#1922fb',
          fontFamily: 'FedraSansStd, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}
      >
        Analytics Platform
      </motion.div>

      {/* Floating Data Points */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '8px',
          height: '8px',
          background: '#1922fb',
          borderRadius: '50%',
          opacity: 0.7
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '6px',
          height: '6px',
          background: '#1922fb',
          borderRadius: '50%',
          opacity: 0.5
        }}
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  )
}

export default QuberneuLogo
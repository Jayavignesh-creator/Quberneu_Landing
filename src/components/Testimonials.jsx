import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const aboutStats = [
    {
      number: "20+",
      label: "Years Experience",
      description: "Delivering successful IT projects",
      icon: "⏰",
      color: "#1922fb"
    },
    {
      number: "500+",
      label: "Projects Completed", 
      description: "Across various industries",
      icon: "🚀",
      color: "#059669"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Focused on delivery excellence",
      icon: "⭐",
      color: "#dc2626"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Dedicated technical support",
      icon: "🛠️",
      color: "#7c3aed"
    }
  ]

  const flipVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div id="about" className="section bg-secondary">
      <div className="main-container">
        {/* About Content */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">
            About Quberneu
          </h2>
          <p className="section-subtitle text-secondary">
            As a Microsoft-certified IT managed services provider, Quberneu offers best-in-class people and processes 
            to lead successful digital transformation projects. We combine proven technologies with a personalised 
            approach to fully support your organisation's success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="cards-wrap" style={{ marginBottom: '4rem' }}>
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card-flip"
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              style={{ 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '220px',
                padding: '2rem',
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}25 100%)`,
                borderRadius: '20px',
                border: `3px solid ${stat.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background decoration */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  background: `${stat.color}20`,
                  borderRadius: '50%',
                  zIndex: 1
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Icon */}
                <motion.div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Counter with typewriter effect */}
                <motion.div
                  className="text-primary"
                  style={{ 
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontFamily: 'TomatoGrotesk-Medium, sans-serif',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: stat.color
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  viewport={{ once: false }}
                >
                  {stat.number}
                </motion.div>
                
                <motion.h3
                  style={{ 
                    fontSize: '20px',
                    fontFamily: 'TomatoGrotesk-Medium, sans-serif',
                    color: '#2b2b2e',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: false }}
                >
                  {stat.label}
                </motion.h3>
                
                <motion.p
                  className="text-secondary"
                  style={{ fontSize: '16px', textAlign: 'center', margin: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: false }}
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1922fb 0%, #0f1ae6 100%)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            marginTop: '2rem',
            position: 'relative',
            overflow: 'hidden',
            color: '#ffffff'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '50%',
              zIndex: 1
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h3 
              style={{ 
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                fontFamily: 'TomatoGrotesk-Medium, sans-serif',
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Mission 🎯
            </motion.h3>
            
            <motion.p 
              style={{ 
                fontSize: '18px',
                color: 'rgba(255,255,255,0.95)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: 'FedraSansStd, sans-serif'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              To be the most trusted Microsoft partner, delivering innovative IT solutions that transform how 
              organisations work, enabling them to achieve more while reducing risk and maximizing value from 
              their technology investments.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
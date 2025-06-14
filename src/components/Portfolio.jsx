import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const industries = [
    {
      title: "Public Sector & Government",
      description: "Digital transformation solutions for government agencies and public institutions",
      emoji: "🏛️",
      bgColor: "#1e40af",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 80h60v10H20z' fill='%23ffffff20'/%3E%3Cpath d='M25 30h50v45H25z' fill='%23ffffff30'/%3E%3Cpath d='M30 20h40v15H30z' fill='%23ffffff40'/%3E%3C/svg%3E"
    },
    {
      title: "Health & Life Sciences", 
      description: "Secure, compliant IT solutions for healthcare providers and life sciences organizations",
      emoji: "🏥",
      bgColor: "#dc2626",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M45 20h10v60H45z' fill='%23ffffff40'/%3E%3Cpath d='M25 45h50v10H25z' fill='%23ffffff40'/%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='%23ffffff30' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
      title: "Financial Services",
      description: "Secure financial technology solutions with regulatory compliance and risk management",
      emoji: "🏦",
      bgColor: "#059669",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 70h60v10H20z' fill='%23ffffff30'/%3E%3Cpath d='M25 65h10v-35h10v35h10v-45h10v45h10v-25h10v25' fill='%23ffffff20'/%3E%3C/svg%3E"
    },
    {
      title: "Higher Education",
      description: "Modern education technology platforms for enhanced learning and administration",
      emoji: "🎓",
      bgColor: "#7c3aed",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 20L20 35v30l30 15 30-15V35z' fill='%23ffffff20'/%3E%3Cpath d='M30 40h40v5H30z' fill='%23ffffff30'/%3E%3Cpath d='M35 50h30v3H35z' fill='%23ffffff30'/%3E%3C/svg%3E"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const waveVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div id="industries" className="section bg-primary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">
            Industries We Serve
          </h2>
          <p className="section-subtitle text-secondary">
            Specialized IT solutions tailored to industry-specific challenges and requirements
          </p>
        </motion.div>

        <motion.div 
          className="cards-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card-wave"
              variants={waveVariants}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: `linear-gradient(135deg, ${industry.bgColor} 0%, ${industry.bgColor}dd 100%)`,
                borderRadius: '24px',
                padding: '2.5rem',
                margin: '1rem',
                position: 'relative',
                overflow: 'hidden',
                color: '#ffffff',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Background pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '120px',
                  height: '120px',
                  background: `url("${industry.image}")`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.6,
                  zIndex: 1
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '2rem'
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                {industry.emoji}
              </motion.div>
              
              <div style={{ position: 'relative', zIndex: 2, marginTop: '3rem' }}>
                <motion.h3 
                  className="cards-item-title"
                  style={{ 
                    color: '#ffffff',
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {industry.title}
                </motion.h3>
                
                <motion.p 
                  className="cards-item-desc"
                  style={{ 
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {industry.description}
                </motion.p>
              </div>
              
              {/* Animated border */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '4px',
                  background: '#ffffff',
                  borderRadius: '2px'
                }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
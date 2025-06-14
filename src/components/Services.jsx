import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable Azure cloud solutions with secure, reliable infrastructure for digital transformation",
      icon: "☁️",
      color: "#4285f4"
    },
    {
      title: "Data & AI Solutions", 
      description: "Microsoft Fabric and Azure AI services to unlock insights and drive intelligent decision-making",
      icon: "🧠",
      color: "#34a853"
    },
    {
      title: "Microsoft 365 & Dynamics",
      description: "Complete Microsoft ecosystem implementation including Dynamics 365 and Power Platform",
      icon: "💼",
      color: "#fbbc05"
    },
    {
      title: "Digital Security",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: "🛡️",
      color: "#ea4335"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  }

  return (
    <div id="technologies" className="section bg-secondary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">
            IT Solutions & Services
          </h2>
          <p className="section-subtitle text-secondary">
            Microsoft-certified managed services that transform your business operations and drive innovation
          </p>
        </motion.div>

        <motion.div 
          className="cards-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-bouncy"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '2rem',
                margin: '1rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: `3px solid ${service.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background blob */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(45deg, ${service.color}20, ${service.color}10)`,
                  borderRadius: '50%',
                  zIndex: 1
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Bouncing icon */}
                <motion.div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="cards-item-title"
                  style={{ 
                    color: service.color,
                    marginBottom: '1rem'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="cards-item-desc"
                  style={{ color: '#2b2b2e' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services
import React from 'react'
import { motion } from 'framer-motion'

const PartnerMarquee = () => {
  const partners = [
    { name: 'Microsoft', logo: 'M' },
    { name: 'Global Shares', logo: 'GS' },
    { name: 'XOCEAN', logo: 'XO' },
    { name: 'Flipdish', logo: 'FD' },
    { name: 'Metacompliance', logo: 'MC' },
    { name: 'Openet', logo: 'ON' },
    { name: 'QUB', logo: 'QUB' },
    { name: 'TechCorp', logo: 'TC' },
  ]

  return (
    <div className="partner-marquee-section bg-primary">
      <div className="main-container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-title text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="section-subtitle text-white opacity-80">
            Join the growing list of companies that trust Quberneu for their digital transformation
          </p>
        </motion.div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* First set of logos */}
            <div className="marquee-content">
              {partners.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="partner-logo-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="partner-logo-circle">
                    {partner.logo}
                  </div>
                  <span className="partner-name">{partner.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="marquee-content">
              {partners.map((partner, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="partner-logo-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="partner-logo-circle">
                    {partner.logo}
                  </div>
                  <span className="partner-name">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerMarquee
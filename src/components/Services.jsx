import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable Azure cloud solutions with secure, reliable infrastructure for digital transformation"
    },
    {
      title: "Data & AI Solutions", 
      description: "Microsoft Fabric and Azure AI services to unlock insights and drive intelligent decision-making"
    },
    {
      title: "Microsoft 365 & Dynamics",
      description: "Complete Microsoft ecosystem implementation including Dynamics 365 and Power Platform"
    },
    {
      title: "Digital Security",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance"
    }
  ]

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

        <div className="cards-wrap">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="cards-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="cards-item-link">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <div>
                    <h3 className="cards-item-title">
                      {service.title}
                    </h3>
                    <p className="cards-item-desc">
                      {service.description}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: "We do the right things",
      description: "Our experts are invested in your organisation's success. We combine proven technologies and processes with a personalised approach to fully support your digital transformation projects."
    },
    {
      title: "We sort the delivery",
      description: "We customise our approach to your specific needs, with a focus on getting the fundamentals right. Through constant innovation of delivery methods, we're always improving our standard of service."
    },
    {
      title: "Microsoft-Certified Delivery",
      description: "We're one of the most awarded and certified specialist Microsoft Partners in Europe, delivering best-in-class people and processes for successful digital transformation projects."
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
    <div id="solutions" className="section bg-primary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">
            Our Delivery Difference
          </h2>
          <p className="section-subtitle text-secondary">
            Microsoft-certified IT managed services provider delivering best-in-class solutions for digital transformation
          </p>
        </motion.div>
        
        <motion.div
          className="cards-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="cards-item"
              variants={itemVariants}
            >
              <div className="cards-item-link">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <div>
                    <h3 className="cards-item-title">
                      {feature.title}
                    </h3>
                    <p className="cards-item-desc">
                      {feature.description}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Features
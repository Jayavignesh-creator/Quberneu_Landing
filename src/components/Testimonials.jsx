import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const aboutStats = [
    {
      number: "20+",
      label: "Years Experience",
      description: "Delivering successful IT projects"
    },
    {
      number: "500+",
      label: "Projects Completed", 
      description: "Across various industries"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Focused on delivery excellence"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Dedicated technical support"
    }
  ]

  return (
    <div id="about" className="py-section bg-accent-200">
      <div className="max-w-container mx-auto px-[4.5%]">
        {/* About Content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="font-tomato text-dark mb-4"
              style={{ fontSize: 'clamp(32px, 3.333vw, 48px)' }}>
            About Codec
          </h2>
          <p className="font-fedra text-lg text-secondary max-w-[600px] mx-auto">
            As a Microsoft-certified IT managed services provider, Codec offers best-in-class people and processes 
            to lead successful digital transformation projects. We combine proven technologies with a personalised 
            approach to fully support your organisation's success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-accent relative max-w-[301px] w-full text-center flex flex-col justify-center items-center min-h-[200px] p-8 transition-all duration-300 ease-in-out shadow-card cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(43,43,46,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="text-primary font-tomato font-medium mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              >
                {stat.number}
              </motion.div>
              
              <motion.h3
                className="text-xl font-tomato text-dark mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: false }}
              >
                {stat.label}
              </motion.h3>
              
              <motion.p
                className="text-secondary text-base text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: false }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="text-center bg-accent rounded-none p-12 border-4 border-primary mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-primary font-tomato mb-6"
              style={{ fontSize: 'clamp(24px, 2.5vw, 32px)' }}>
            Our Mission
          </h3>
          <p className="text-lg text-dark max-w-[800px] mx-auto leading-relaxed font-fedra">
            To be the most trusted Microsoft partner, delivering innovative IT solutions that transform how 
            organisations work, enabling them to achieve more while reducing risk and maximizing value from 
            their technology investments.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
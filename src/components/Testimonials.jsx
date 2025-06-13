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
    <div id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-gray-400">"</div>
        <div className="absolute bottom-20 right-10 text-6xl text-gray-400 rotate-180">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Content */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Codec
          </h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
            As a Microsoft-certified IT managed services provider, Codec offers best-in-class people and processes 
            to lead successful digital transformation projects. We combine proven technologies with a personalised 
            approach to fully support your organisation's success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-5xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              >
                {stat.number}
              </motion.div>
              
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: false }}
              >
                {stat.label}
              </motion.h3>
              
              <motion.p
                className="text-gray-600"
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
          className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
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
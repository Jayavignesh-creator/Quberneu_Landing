import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const industries = [
    {
      title: "Public Sector & Government",
      description: "Digital transformation solutions for government agencies and public institutions",
      icon: "🏛️",
      tech: ["Microsoft 365", "Azure Cloud", "Power Platform"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Health & Life Sciences",
      description: "Secure, compliant IT solutions for healthcare providers and life sciences organizations",
      icon: "🏥",
      tech: ["Azure Healthcare", "Dynamics 365", "Compliance"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Financial Services",
      description: "Secure financial technology solutions with regulatory compliance and risk management",
      icon: "🏦",
      tech: ["Security", "Compliance", "Data Analytics"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Higher Education",
      description: "Modern education technology platforms for enhanced learning and administration",
      icon: "🎓",
      tech: ["Microsoft Teams", "SharePoint", "Power BI"],
      color: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <div id="industries" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Specialized IT solutions tailored to industry-specific challenges and requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  className="text-center mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`text-6xl mb-4 inline-block p-4 rounded-full bg-gradient-to-r ${industry.color}`}>
                    {industry.icon}
                  </div>
                </motion.div>
                
                <div className="text-center">
                  <motion.h3 
                    className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: false }}
                  >
                    {industry.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {industry.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {industry.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable Azure cloud solutions with secure, reliable infrastructure for digital transformation",
      icon: "☁️",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Data & AI Solutions",
      description: "Microsoft Fabric and Azure AI services to unlock insights and drive intelligent decision-making",
      icon: "🧠",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Microsoft 365 & Dynamics",
      description: "Complete Microsoft ecosystem implementation including Dynamics 365 and Power Platform",
      icon: "💼",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Digital Security",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: "🔒",
      color: "from-red-500 to-pink-600"
    }
  ]

  return (
    <div id="technologies" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT Solutions & Services
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Microsoft-certified managed services that transform your business operations and drive innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-300 border border-white/10">
                <motion.div
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
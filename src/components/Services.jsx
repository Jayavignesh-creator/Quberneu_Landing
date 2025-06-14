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
    <div id="technologies" className="py-section bg-accent-200">
      <div className="max-w-container mx-auto px-[4.5%]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="font-tomato text-dark mb-4"
              style={{ fontSize: 'clamp(32px, 3.333vw, 48px)' }}>
            IT Solutions & Services
          </h2>
          <p className="font-fedra text-lg text-secondary max-w-[600px] mx-auto">
            Microsoft-certified managed services that transform your business operations and drive innovation
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-accent relative min-h-[338px] max-w-[301px] w-full flex flex-col transition-all duration-300 ease-in-out shadow-card cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(43,43,46,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="h-full no-underline text-inherit">
                <a href="#" onClick={(e) => e.preventDefault()}
                   className="w-full h-full flex flex-col justify-between py-10 px-5 no-underline text-inherit relative">
                  <div>
                    <h3 className="font-tomato text-dark transition-all duration-300 ease-in-out mb-4"
                        style={{ fontSize: 'clamp(22px, 2.269vw, 31px)' }}>
                      {service.title}
                    </h3>
                    <p className="font-fedra text-lg text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Arrow indicators */}
                  <div className="absolute left-5 bottom-7 w-5 h-1 bg-primary transition-all duration-300 ease-in-out"></div>
                  <div className="absolute left-5 bottom-5 w-6 h-5 opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"
                       style={{ 
                         backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"%231922fb\"><path d=\"M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z\"/></svg>')",
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover'
                       }}>
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
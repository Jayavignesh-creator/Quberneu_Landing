import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const contactInfo = [
    { label: 'Email', value: 'info@codec.ie', href: 'mailto:info@codec.ie' },
    { label: 'Phone', value: '+353-1-603-4300', href: 'tel:+353-1-603-4300' },
    { label: 'Address', value: 'Dublin, Ireland', href: '#' }
  ]

  return (
    <footer id="contact" className="py-section bg-accent-200">
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
            Contact Codec
          </h2>
          <p className="font-fedra text-lg text-secondary max-w-[600px] mx-auto">
            Ready to transform your business with Microsoft-certified IT solutions? Get in touch with our team.
          </p>
        </motion.div>

        <motion.div
          className="text-center bg-accent p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                className="text-center min-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: false }}
              >
                <h4 className="font-tomato text-lg text-primary mb-2">
                  {contact.label}
                </h4>
                <a 
                  href={contact.href}
                  className="text-dark no-underline text-base font-fedra transition-colors duration-300 hover:text-primary"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex gap-4 justify-center flex-wrap mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="mailto:info@codec.ie"
              className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-0 rounded-none cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-primary text-white hover:bg-primary-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center pt-8 border-t border-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="mb-4">
            {/* Codec Logo */}
            <svg 
              className="h-8 mx-auto block"
              viewBox="0 0 134.57 35.505" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2b2b2e">
                <path d="M86.82,11.67c-3.31.11-5.91,2.87-5.84,6.18s2.80,5.94,6.11,5.91s5.98-2.73,5.98-6.04c-.06-3.39-2.86-6.09-6.25-6.05m6.25,12.58c-1.72,1.53-3.94,2.37-6.25,2.37-4.88-.16-8.72-4.23-8.61-9.11s4.13-8.77,9.01-8.71s8.81,4.03,8.81,8.91c0,.14,0,.28-.01,.42h.01v13.68h-2.97Z" transform="translate(-77.36,-8.89)"/>
                <path d="M96.75,34.92c2.27.01,4.37-1.20,5.50-3.17h-11c1.13,1.97,3.23,3.19,5.50,3.17m0-12.08c-3.39-.05-6.19,2.65-6.25,6.04h15.46c.13,3.75-2.04,7.21-5.47,8.74s-7.45.81-10.15-1.80-3.55-6.60-2.14-10.08,4.79-5.76,8.55-5.76c2.43-.01,4.77.92,6.52,2.61l-2.10,2.03c-1.19-1.14-2.77-1.78-4.42-1.77" transform="translate(-77.36,-8.89)"/>
                <path d="M65.12,46.82c-3.31.11-5.91,2.87-5.84,6.18s2.80,5.94,6.11,5.91s5.98-2.73,5.98-6.04c-.06-3.39-2.86-6.09-6.25-6.05m0,14.95c-4.88-.16-8.72-4.23-8.61-9.11s4.13-8.77,9.01-8.71s8.81,4.03,8.81,8.91c-.09,5.00-4.21,8.99-9.22,8.91" transform="translate(-77.36,-8.89)"/>
                <path d="M125.65,32.07c2.35.01,4.62-.87,6.35-2.46l-2.10-2.03c-1.17,1.05-2.68,1.63-4.25,1.62-2.21.08-4.28-1.05-5.41-2.95s-1.13-4.27,0-6.17,3.20-3.03,5.41-2.95c1.57,0,3.08.57,4.25,1.62l2.10-2.03c-1.73-1.59-4.00-2.47-6.35-2.46-3.26-.12-6.32,1.55-7.98,4.35s-1.66,6.29,0,9.09,4.73,4.47,7.98,4.35" transform="translate(-77.36,-8.89)"/>
                <path d="M31.98,32.07c2.35.01,4.62-.87,6.35-2.46l-2.10-2.03c-1.17,1.05-2.68,1.63-4.25,1.62-2.21.08-4.28-1.05-5.41-2.95s-1.13-4.27,0-6.17,3.20-3.03,5.41-2.95c1.57,0,3.08.57,4.25,1.62l2.10-2.03c-1.73-1.59-4.00-2.47-6.35-2.46-3.26-.12-6.32,1.55-7.98,4.35s-1.66,6.29,0,9.09,4.73,4.47,7.98,4.35" transform="translate(-77.36,-8.89)"/>
              </g>
            </svg>
          </div>
          <p className="text-secondary text-sm font-fedra">
            © 2024 Codec. All rights reserved. Microsoft-certified IT managed services provider.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
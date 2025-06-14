import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const contactInfo = [
    { label: 'Email', value: 'info@quberneu.com', href: 'mailto:info@quberneu.com' },
    { label: 'Phone', value: '+353-1-603-4300', href: 'tel:+353-1-603-4300' },
    { label: 'Address', value: 'Dublin, Ireland', href: '#' }
  ]

  return (
    <footer id="contact" className="section bg-secondary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">
            Contact Quberneu
          </h2>
          <p className="section-subtitle text-secondary">
            Ready to transform your business with Microsoft-certified IT solutions? Get in touch with our team.
          </p>
        </motion.div>

        <motion.div
          style={{
            textAlign: 'center',
            backgroundColor: '#eeede9',
            padding: '3rem 2rem',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                style={{ textAlign: 'center', minWidth: '200px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: false }}
              >
                <h4 style={{ 
                  fontFamily: 'TomatoGrotesk-Medium, sans-serif',
                  fontSize: '18px',
                  color: '#1922fb',
                  marginBottom: '0.5rem'
                }}>
                  {contact.label}
                </h4>
                <a 
                  href={contact.href}
                  style={{
                    color: '#2b2b2e',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontFamily: 'FedraSansStd, sans-serif'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#1922fb'}
                  onMouseOut={(e) => e.target.style.color = '#2b2b2e'}
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="btn-group"
            style={{ marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="mailto:info@quberneu.com"
              className="btn btn-primary"
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
          style={{
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid #948f8a'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <div style={{ marginBottom: '1rem' }}>
            {/* Quberneu Logo */}
            <div style={{
              fontFamily: 'TomatoGrotesk-Medium, sans-serif',
              fontSize: '24px',
              fontWeight: '500',
              color: '#1922fb',
              letterSpacing: '1px',
              margin: '0 auto',
              display: 'block'
            }}>
              QUBERNEU
            </div>
          </div>
          <p style={{ 
            color: '#948f8a', 
            fontSize: '14px',
            fontFamily: 'FedraSansStd, sans-serif'
          }}>
            © 2024 Quberneu. All rights reserved. Microsoft-certified IT managed services provider.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
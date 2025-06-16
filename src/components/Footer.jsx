import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "info@quberneu.com",
      href: "mailto:info@quberneu.com",
    },
    { label: "Phone", value: "+353-1-603-4300", href: "tel:+353-1-603-4300" },
    { label: "Address", value: "Dublin, Ireland", href: "#" },
  ];

  return (
    <footer id="contact" className="py-[calc(60px+5vh)] bg-secondary">
      <div className="max-w-container mx-auto px-[4.5%]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="font-tomato text-section-title text-primary mb-4">Contact Quberneu</h2>
          <p className="font-fedra text-lg text-neutral-medium max-w-[600px] mx-auto">
            Ready to transform your business with Microsoft-certified IT
            solutions? Get in touch with our team.
          </p>
        </motion.div>

        <motion.div
          className="text-center bg-white p-12 mb-12 border border-primary rounded-[10px]"
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
                  className="text-neutral-dark no-underline text-base font-fedra hover:text-primary transition-colors duration-300"
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
              href="mailto:info@quberneu.com"
              className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-none rounded-none cursor-pointer transition-all duration-300 relative overflow-hidden bg-primary text-white hover:bg-blue-600 hover:-translate-y-0.5"
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
          className="text-center pt-8 border-t border-neutral-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="mb-4">
            {/* Quberneu Logo */}
            <div className="font-tomato text-2xl font-medium text-primary tracking-wider mx-auto block">
              Quberneu
            </div>
          </div>
          <p className="text-neutral-medium text-sm font-fedra">
            © 2024 Quberneu. All rights reserved. Microsoft-certified IT managed
            services provider.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

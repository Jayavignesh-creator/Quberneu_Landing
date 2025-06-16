import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const aboutStats = [
    {
      number: "20+",
      label: "Years Experience",
      description: "Delivering successful IT projects",
    },
    {
      number: "500+",
      label: "Projects Completed",
      description: "Across various industries",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Focused on delivery excellence",
    },
  ];

  return (
    <div id="about" className="section bg-secondary">
      <div className="main-container">
        {/* About Content */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">About Quberneu</h2>
          <p className="section-subtitle text-secondary">
            As a Microsoft-certified IT managed services provider, Quberneu
            offers best-in-class people and processes to lead successful digital
            transformation projects. We combine proven technologies with a
            personalised approach to fully support your organisation's success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="cards-wrap">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="cards-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
                padding: "2rem",
              }}
            >
              <motion.div
                className="text-primary"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontFamily: "TomatoGrotesk-Medium, sans-serif",
                  fontWeight: "500",
                  marginBottom: "1rem",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              >
                {stat.number}
              </motion.div>

              <motion.h3
                style={{
                  fontSize: "20px",
                  fontFamily: "TomatoGrotesk-Medium, sans-serif",
                  color: "#2b2b2e",
                  marginBottom: "0.5rem",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: false }}
              >
                {stat.label}
              </motion.h3>

              <motion.p
                className="text-secondary"
                style={{ fontSize: "16px", textAlign: "center" }}
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
      </div>
    </div>
  );
};

export default Testimonials;

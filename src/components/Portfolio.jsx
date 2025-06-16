import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const industries = [
    {
      title: "Public Sector & Government",
      description:
        "Digital transformation solutions for government agencies and public institutions",
    },
    {
      title: "Health & Life Sciences",
      description:
        "Secure, compliant IT solutions for healthcare providers and life sciences organizations",
    },
    {
      title: "Financial Services",
      description:
        "Secure financial technology solutions with regulatory compliance and risk management",
    },
  ];

  return (
    <div id="industries" className="section bg-primary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle text-secondary">
            Specialized IT solutions tailored to industry-specific challenges
            and requirements
          </p>
        </motion.div>

        <div className="cards-wrap">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="cards-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="cards-item-link">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <div>
                    <h3 className="cards-item-title">{industry.title}</h3>
                    <p className="cards-item-desc">{industry.description}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

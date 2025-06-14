import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "We do the right things",
      description:
        "Our experts are invested in your organisation's success. We combine proven technologies and processes with a personalised approach to fully support your digital transformation projects.",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "We sort the delivery",
      description:
        "We customise our approach to your specific needs, with a focus on getting the fundamentals right. Through constant innovation of delivery methods, we're always improving our standard of service.",
      icon: "🚀",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Microsoft-Certified Delivery",
      description:
        "We're one of the most awarded and certified specialist Microsoft Partners in Europe, delivering best-in-class people and processes for successful digital transformation projects.",
      icon: "🏆",
      gradient:
        "linear-gradient(135deg,rgb(124, 185, 239) 0%,rgb(6, 92, 138) 100%)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      rotateY: -45,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="solutions" className="section bg-primary">
      <div className="main-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="section-title">Our Delivery Difference</h2>
          <p className="section-subtitle text-secondary">
            Microsoft-certified IT managed services provider delivering
            best-in-class solutions for digital transformation
          </p>
        </motion.div>

        <motion.div
          className="cards-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card-enhanced"
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                background: feature.gradient,
                borderRadius: "16px",
                padding: "2rem",
                margin: "1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background pattern */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)",
                  opacity: 0.3,
                }}
              />

              {/* Icon */}
              <motion.div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {feature.icon}
              </motion.div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <motion.h3
                  className="cards-item-title"
                  style={{
                    color: "#ffffff",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="cards-item-desc"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                    lineHeight: "1.6",
                  }}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

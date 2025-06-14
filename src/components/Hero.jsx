import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleContactUs = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="home" className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eeede9 0%, #e3e0da 100%)' }}>
      {/* Background pattern overlay */}
      <div className="bg-pattern"></div>

      <div className="max-w-container mx-auto px-[4.5%] text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="ms-partner-badge" variants={itemVariants}>
            Microsoft Certified Partner
          </motion.div>

          <motion.h1 className="font-tomato font-medium leading-tight text-dark mb-8" 
            style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
            variants={itemVariants}>
            Impact,
            <span className="text-primary"> delivered</span>
          </motion.h1>

          <motion.p className="font-fedra leading-relaxed text-secondary mb-12 max-w-[800px] mx-auto"
            style={{ fontSize: 'clamp(18px, 1.5vw, 24px)' }}
            variants={itemVariants}>
            Actionable Insights. Accurate Decisions. Data-centric approach for
            human-centric decisions.
          </motion.p>

          <motion.div className="flex gap-4 justify-center flex-wrap" variants={itemVariants}>
            <motion.button
              onClick={handleContactUs}
              className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-0 rounded-none cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-primary text-white hover:bg-primary-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Us
            </motion.button>

            <motion.button
              className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-2 border-primary rounded-none cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-transparent text-primary hover:bg-primary hover:text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                const solutionsSection = document.querySelector("#solutions");
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Our Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1922fb">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;

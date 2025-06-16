import React from "react";
import { motion } from "framer-motion";
import QuberneuLogo from "./QuberneuLogo";

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
    <div id="home" className="bg-secondary min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-pattern pointer-events-none -z-10"></div>

      <div className="max-w-container mx-auto px-[4.5%] z-10 relative">
        <div className="flex items-center gap-16 min-h-[60vh]">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-left max-w-[600px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="font-tomato text-hero-title font-medium leading-[1.1] text-neutral-dark mb-8" variants={itemVariants}>
              Actionable Insights.
              <span className="text-primary"> Accurate Decisions.</span>
            </motion.h1>

            <motion.p className="font-fedra text-hero-subtitle leading-[1.6] text-black mb-12 max-w-[800px] mx-auto" variants={itemVariants}>
              Data-centric approach for human-centric decisions.
            </motion.p>

            <motion.div className="flex gap-4 justify-center flex-wrap" variants={itemVariants}>
              <motion.button
                onClick={handleContactUs}
                className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-none rounded-none cursor-pointer transition-all duration-300 relative overflow-hidden bg-primary text-white hover:bg-blue-600 hover:-translate-y-0.5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Us
              </motion.button>

              <motion.button
                className="inline-flex items-center px-8 py-4 font-tomato text-base font-medium no-underline border-2 border-primary rounded-none cursor-pointer transition-all duration-300 relative overflow-hidden bg-transparent text-primary hover:bg-primary hover:text-white"
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

          {/* Right Logo */}
          <motion.div
            className="flex-none flex justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <QuberneuLogo />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#f0242c">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;

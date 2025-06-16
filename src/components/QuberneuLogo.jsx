import React from "react";
import { motion } from "framer-motion";

const QuberneuLogo = () => {
  const barHeights = [40, 60, 45, 70, 55, 65, 50, 75, 50, 70, 90];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatingDots = [
    { top: "10%", right: "10%", size: 6, delay: 0 },
    { bottom: "20%", left: "15%", size: 5, delay: 1 },
    { top: "5%", left: "5%", size: 4, delay: 0.3 },
    { bottom: "10%", right: "5%", size: 5, delay: 0.6 },
    { top: "50%", left: "0%", size: 4, delay: 0.2 },
    { top: "60%", right: "0%", size: 5, delay: 0.5 },
    { bottom: "0%", left: "50%", size: 6, delay: 0.7 },
    { top: "0%", right: "50%", size: 5, delay: 0.4 },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "180px",
        padding: "1rem",
        position: "relative",
      }}
    >
      {/* 🔷 Logo Box */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f0242c",
          borderRadius: "16px",
          padding: "1rem",
          marginBottom: "1rem",
          boxShadow: "0 6px 18px rgba(25, 34, 251, 0.3)",
          width: "140px",
          height: "140px",
          overflow: "hidden",
        }}
      >
        {/* 📊 Mini Bar Chart */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "3px",
            padding: "0 6px",
            height: "100px",
            zIndex: 0,
          }}
        >
          {barHeights.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{
                width: "6px",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,1))",
                borderRadius: "3px 3px 0 0",
              }}
            />
          ))}
        </div>

        {/* 🔤 Company Name */}
        <motion.div
          variants={circleVariants}
          style={{
            color: "white",
            fontFamily: "TomatoGrotesk-Medium, sans-serif",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.5px",
            zIndex: 1,
          }}
        >
          QUBERNEU
        </motion.div>
      </motion.div>

      {/* 🏷️ Tagline */}
      <motion.div
        variants={circleVariants}
        style={{
          color: "#f0242c",
          fontFamily: "FedraSansStd, sans-serif",
          fontSize: "15px",
          fontWeight: "500",
          textAlign: "center",
          letterSpacing: "0.5px",
        }}
      >
        Analytics Platform
      </motion.div>

      {/* ✨ Floating Dots */}
      {floatingDots.map((dot, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: dot.top,
            bottom: dot.bottom,
            left: dot.left,
            right: dot.right,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: "#f0242c",
            borderRadius: "50%",
            opacity: 0.6,
          }}
          animate={{
            y: [0, -5, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </motion.div>
  );
};

export default QuberneuLogo;

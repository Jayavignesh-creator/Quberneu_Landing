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
    <div id="about" className="py-[calc(60px+5vh)] bg-secondary">
      <div className="max-w-container mx-auto px-[4.5%]">
        {/* About Content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="font-tomato text-section-title text-primary mb-4">About Quberneu</h2>
          <p className="font-fedra text-lg text-neutral-medium max-w-[600px] mx-auto">
            As a Microsoft-certified IT managed services provider, Quberneu
            offers best-in-class people and processes to lead successful digital
            transformation projects. We combine proven technologies with a
            personalised approach to fully support your organisation's success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-secondary relative min-h-[200px] max-w-[301px] w-full flex flex-col justify-center items-center transition-all duration-300 shadow-[0_3px_30px_rgba(43,43,46,0.1)] cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(43,43,46,0.15)] text-center p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="text-primary font-tomato text-[clamp(32px,4vw,48px)] font-medium mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              >
                {stat.number}
              </motion.div>

              <motion.h3
                className="text-xl font-tomato text-neutral-dark mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: false }}
              >
                {stat.label}
              </motion.h3>

              <motion.p
                className="text-neutral-medium text-base text-center"
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

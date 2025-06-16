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
    <div id="industries" className="py-[calc(60px+5vh)] bg-neutral-light">
      <div className="max-w-container mx-auto px-[4.5%]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="font-tomato text-section-title text-primary mb-4">Industries We Serve</h2>
          <p className="font-fedra text-lg text-neutral-medium max-w-[600px] mx-auto">
            Specialized IT solutions tailored to industry-specific challenges
            and requirements
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-secondary relative min-h-[338px] max-w-[301px] w-full flex flex-col transition-all duration-300 shadow-[0_3px_30px_rgba(43,43,46,0.1)] cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(43,43,46,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="h-full">
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="w-full h-full flex flex-col justify-between py-10 px-5 no-underline text-inherit"
                >
                  <div>
                    <h3 className="font-tomato text-card-title text-neutral-dark font-medium leading-tight mb-4">{industry.title}</h3>
                    <p className="font-fedra text-base leading-[1.666] text-neutral-dark my-4">{industry.description}</p>
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

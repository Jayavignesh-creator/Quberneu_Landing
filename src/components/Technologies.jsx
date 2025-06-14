import React from "react";
import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = [
    {
      name: "Microsoft Dynamics 365",
      logo: "D365",
      alt: "Dynamics 365"
    },
    {
      name: "Microsoft Power Platform", 
      logo: "PP",
      alt: "Microsoft Power Platform"
    },
    {
      name: "Dynamics 365 Business Central",
      logo: "BC", 
      alt: "Dynamics 365 Business Central"
    },
    {
      name: "Azure Cloud",
      logo: "AZ",
      alt: "Azure Cloud"
    },
    {
      name: "Azure Data & AI",
      logo: "AI",
      alt: "Azure Data & AI"
    },
    {
      name: "Microsoft Office 365",
      logo: "O365",
      alt: "Microsoft Office 365"
    },
    {
      name: "Solver CPM",
      logo: "CPM",
      alt: "Solver CPM"
    },
    {
      name: "Oracle EPM",
      logo: "ORA",
      alt: "Oracle EPM"
    }
  ];

  return (
    <section className="technologies-section bg-light" style={{ padding: "4rem 0" }}>
      <div className="main-container">
        <div className="row" style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          {/* Left Column - Content */}
          <div className="col-6" style={{ flex: "1" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="section-title">Technologies we specialise in</h2>
              <p className="section-description">
                Your technology investments can make or break your business model. As a Microsoft Gold Partner, our consultants work with you to identify and deploy best-fit solutions from across the Microsoft ecosystem. We enable innovation that creates long-term value while enhancing your company's ability to build success in an uncertain future.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Microsoft Logo */}
          <div className="col-6" style={{ flex: "1", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="logo-container"
            >
              <div 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "200px",
                  height: "80px",
                  background: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#00BCF2",
                  fontFamily: "TomatoGrotesk-Medium, sans-serif"
                }}
              >
                Microsoft
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technologies Cards Grid */}
        <motion.div
          className="technologies-cards-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "4rem"
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="technologies-cards-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease"
              }}
            >
              <div className="technologies-icon" style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1922fb 0%, #00BCF2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#ffffff"
                  }}
                >
                  {tech.logo}
                </div>
              </div>
              <h3 
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2b2b2e",
                  margin: "0",
                  fontFamily: "TomatoGrotesk-Medium, sans-serif"
                }}
              >
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
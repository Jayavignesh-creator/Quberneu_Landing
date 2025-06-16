import React, { useRef } from "react";
import { motion } from "framer-motion";

// Animation container for staggering letters
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Animation for each letter
const letterVariants = {
  hidden: { opacity: 0, y: 20, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

// Component to animate headings letter by letter
const AnimatedHeading = ({ text }) => {
  const lines =
    typeof text === "string"
      ? [text]
      : React.Children.toArray(text.props.children);

  return (
    <motion.h2
      className="text-4xl font-bold mb-1 leading-tight"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {lines.map((line, i) =>
        typeof line === "string" ? (
          <div key={i} className="flex flex-wrap">
            {line.split(/(\s)/).map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ) : (
          <div key={i} className="inline-block">
            <motion.span
              variants={letterVariants}
              className={line.props.className}
            >
              {React.Children.toArray(line.props.children).flatMap(
                (child, idx) =>
                  typeof child === "string"
                    ? child.split(/(\s)/).map((char, subIdx) => (
                        <motion.span
                          key={`${idx}-${subIdx}`}
                          variants={letterVariants}
                          className="inline-block"
                          style={{
                            whiteSpace: char === " " ? "pre" : "normal",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))
                    : [<span key={idx}>{child}</span>]
              )}
            </motion.span>
          </div>
        )
      )}
    </motion.h2>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--x", `${x}px`);
    sectionRef.current.style.setProperty("--y", `${y}px`);
  };

  const features = [
    {
      heading: (
        <>
          We do
          <br />
          <span className="text-[#f0242c] font-semibold">
            Strategy and Advisory
          </span>
        </>
      ),
      description:
        "Our experts are invested in your organisation's success. We combine proven technologies and processes with a personalised approach to fully support your digital transformation projects.",
      image: "https://picsum.photos/id/1011/600/400",
    },
    {
      heading: (
        <>
          We Leverage <br />
          <span className="text-[#f0242c] font-semibold">AI and ML</span>
        </>
      ),
      description:
        "We customise our approach to your specific needs, with a focus on getting the fundamentals right. Through constant innovation of delivery methods, we’re always improving our standard of service.",
      image: "https://picsum.photos/id/1005/600/400",
    },
    {
      heading: (
        <>
          We work with <br />
          <span className="text-[#f0242c] font-semibold">Data Engineering</span>
        </>
      ),
      description:
        "Embracing emerging technologies, we help our clients adopt AI, automation, and scalable systems tailored to long-term growth.",
      image: "https://picsum.photos/id/1015/600/400",
    },
    {
      heading: (
        <>
          We provide <br />
          <span className="text-[#f0242c] font-semibold">
            Operationable Insights
          </span>
        </>
      ),
      description:
        "Driving transformation at every level of your business with smart, adaptable, and human-centered digital experiences.",
      image: "https://picsum.photos/id/1021/600/400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      // className="bg-white"
      style={{
        backgroundImage: `
          radial-gradient(circle, #D3D3D3 1px, transparent 2px),
          radial-gradient(
            500px circle at var(--x, 50%) var(--y, 50%),
            #fef9f3,
            transparent 80%
          )
        `,
        backgroundSize: "30px 30px, cover",
        backgroundRepeat: "repeat, no-repeat",
      }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="w-full py-2 relative"
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Section */}
            <div
              className={`relative p-2 transition-all duration-300 ease-out ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <div className="relative z-10 p-3">
                <AnimatedHeading text={feature.heading} />
                <p className="text-gray-700 text-lg mt-2">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`relative p-6 ${index % 2 !== 0 ? "md:order-1" : ""}`}
            >
              <img
                src={feature.image}
                alt="Feature visual"
                className="rounded-2xl shadow-lg w-full h-auto object-cover z-20"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Features;

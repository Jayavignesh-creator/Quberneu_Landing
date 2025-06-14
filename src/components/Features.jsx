import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      heading: (
        <>
          We do the <br />
          <span className="text-blue-600 font-semibold">right things</span>
        </>
      ),
      description:
        "Our experts are invested in your organisation's success. We combine proven technologies and processes with a personalised approach to fully support your digital transformation projects.",
    },
    {
      heading: (
        <>
          We sort the <br />
          <span className="text-blue-600 font-semibold">delivery</span>
        </>
      ),
      description:
        "We customise our approach to your specific needs, with a focus on getting the fundamentals right. Through constant innovation of delivery methods, we’re always improving our standard of service.",
    },
  ];

  return <div class="bg-gray-200">Hiiii</div>;
};

export default Features;

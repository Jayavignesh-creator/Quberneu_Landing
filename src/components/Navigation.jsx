import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QuberneuLogo from "./QuberneuLogo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Solutions", href: "#solutions" },
    { name: "Technologies", href: "#technologies" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className="bg-secondary backdrop-blur-20 fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between py-6 max-w-container mx-auto w-[91%]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={(e) => handleNavClick(e, "#home")}
          className="cursor-pointer"
        >
          {/* Use QuberneuLogo component instead of text */}
          <div className="scale-50 origin-left">
            <QuberneuLogo />
          </div>
        </motion.div>

        <div className="flex list-none m-0 p-0 gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="font-tomato text-base text-neutral-dark no-underline transition-colors duration-300 relative hover:text-primary"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

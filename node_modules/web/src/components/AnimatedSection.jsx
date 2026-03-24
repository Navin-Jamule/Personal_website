import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    "scale-in": {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
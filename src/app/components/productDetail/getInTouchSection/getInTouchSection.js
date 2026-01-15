"use client";
import React from 'react';
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const buttonHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.25, ease: "easeOut" }
  },
  tap: { scale: 0.97 }
};

const GetInTouchSection = () => {
  return (
    <section className="w-full bg-blue-600 rounded-2xl my-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-white text-xl md:text-3xl font-bold mb-6"
          >
            Ready to Transform Your Security?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-blue-100 text-sm md:text-xl mx-auto mb-10 leading-relaxed"
          >
            Schedule a personalized demo and see CAIR Surveillance System in action
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6"
            variants={staggerContainer}
          >
            <motion.button
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 min-w-[220px]"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Schedule Demo
            </motion.button>

            <motion.button
              href="/"
              download
              className="inline-flex items-center justify-center px-5 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 min-w-[220px]"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
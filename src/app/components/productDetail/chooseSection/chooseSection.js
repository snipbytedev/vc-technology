"use client";
import React from 'react';
import { motion } from "framer-motion";
import { IoCheckmarkCircle } from 'react-icons/io5';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.25 } }
};

const ChooseSection = ({ data }) => {
  return (
    <section className="py-20 px-6 bg-lightCard rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {data.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="md:text-xl text-sm text-gray-600"
          >
            {data.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {data.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover="hover"
            >
              <motion.div variants={iconVariants} initial="rest">
                <IoCheckmarkCircle className="text-green-500 text-2xl flex-shrink-0 mt-0.5" />
              </motion.div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseSection;
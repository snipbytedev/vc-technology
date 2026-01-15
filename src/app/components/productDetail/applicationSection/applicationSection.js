"use client";
import React from 'react';
import { motion } from "framer-motion";
import { IoArrowForward } from 'react-icons/io5';

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
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const arrowHover = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.25, ease: "easeOut" } }
};

const ApplicationSection = ({ data }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-blue-600 font-medium">Applications</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-5xl font-bold text-gray-900"
          >
            Trusted Across Industries
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {data.map((application, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {application.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {application.description}
              </p>
              <motion.button
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                whileHover="hover"
                initial="rest"
              >
                <span>{application.link}</span>
                <motion.div variants={arrowHover}>
                  <IoArrowForward className="text-lg" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationSection;
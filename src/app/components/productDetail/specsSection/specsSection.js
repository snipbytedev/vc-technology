"use client";
import React from 'react';
import { motion } from "framer-motion";

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
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const SpecsSection = ({ data }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <div className="mb-8">
              <motion.div variants={fadeInUp}>
                <span className="inline-block bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 text-xs text-blue-600 font-medium mb-3">
                  Technical Specs
                </span>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                {data.title}
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md"
              >
                {data.subtitle}
              </motion.p>
            </div>

            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              {data.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-gray-600 font-normal">
                    {spec.label}
                  </span>
                  <span className="text-sm text-gray-900 font-medium text-right">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={imageVariants}
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl aspect-square overflow-hidden shadow-md">
              {data.image ? (
                <img
                  src={data.image}
                  alt="Technical Specifications"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full"></div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
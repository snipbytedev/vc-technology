"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // nice cubic-bezier for smooth feel
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.04, transition: { duration: 0.3 } },
    tap: { scale: 0.97 },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200/40 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/30 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          variants={badgeVariants}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <HiSparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm text-gray-700 font-medium">
              AI-Powered Digital Solutions
            </span>
          </div>
        </motion.div>
        <motion.div className="text-center mb-6" variants={itemVariants}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 leading-tight mb-2">
            Building Intelligent
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 leading-tight">
            Digital Experiences
          </h1>
        </motion.div>
        <motion.p
          className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10"
          variants={itemVariants}
        >
          We develop AI-powered software, automation systems, and scalable products for global teams.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20"
          variants={itemVariants}
        >
          <motion.button
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View Our Work
            <FaArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all border border-gray-200 shadow-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore Services
          </motion.button>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 sm:pt-12"
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={statVariants}>
            <div className="text-4xl font-semibold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600 text-sm">Projects</div>
          </motion.div>

          <motion.div className="text-center relative" variants={statVariants}>
            <div className="text-4xl font-semibold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Clients</div>
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div className="text-center" variants={statVariants}>
            <div className="text-4xl font-semibold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600 text-sm">Satisfaction</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
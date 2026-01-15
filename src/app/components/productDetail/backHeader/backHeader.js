"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -2,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const BackHeader = () => {
  return (
    <motion.div
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-30"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div variants={slideInLeft}>
            <Link
              href="/#products"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group text-sm sm:text-base font-medium"
              scroll={true}
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <FiArrowLeft className="w-5 h-5" />
              </motion.div>
              <span>Back to Products</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-4 flex-wrap"
            variants={fadeIn}
            transition={{ delay: 0.15 }}
          >
            <motion.div variants={buttonHover} initial="rest" whileHover="hover">
              <Link
                href="#"
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Request Demo
              </Link>
            </motion.div>

            <motion.div variants={buttonHover} initial="rest" whileHover="hover">
              <Link
                href="/"
                className="px-5 sm:px-6 py-2 sm:py-2.5 border border-gray-300 hover:border-gray-400 text-gray-800 font-medium text-sm rounded-lg transition-all bg-white hover:bg-gray-50 whitespace-nowrap"
              >
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BackHeader;
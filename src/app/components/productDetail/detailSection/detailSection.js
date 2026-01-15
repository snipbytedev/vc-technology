"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const DetailSection = ({ data }) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={badgeVariants}
        >
          <span
            className={`${data.badge.color} text-white text-xs font-semibold px-4 py-2 rounded-full inline-block`}
          >
            {data.badge.text}
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-3xl"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="flex flex-wrap gap-3 mb-8"
          >
            {data.features.map((feature, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg font-medium cursor-default"
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={imageVariants}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100 to-blue-100 aspect-video">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailSection;
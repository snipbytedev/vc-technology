"use client";
import React from "react";
import { motion } from "framer-motion";
import { LuZap } from "react-icons/lu";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbTrendingUp } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import ChooseUsCard from "../chooseUsCard/chooseUsCard";

const ChooseUsSection = () => {
  const advantagesData = [
    {
      icon: LuZap,
      title: "Fast Delivery",
      description: "Rapid development cycles with agile methodologies",
    },
    {
      icon: HiOutlineCodeBracket,
      title: "End-to-End Engineering",
      description: "Complete product lifecycle management",
    },
    {
      icon: MdOutlineWbSunny,
      title: "AI-Focused Expertise",
      description: "Cutting-edge AI and machine learning",
    },
    {
      icon: TbTrendingUp,
      title: "Scalable Architectures",
      description: "Built to grow with your business needs",
    },
    {
      icon: BiDollar,
      title: "Affordable Pricing",
      description: "Enterprise quality at competitive rates",
    },
  ];

  const statsData = [
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "15+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">
              Our Advantages
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
            Why Choose Us
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {advantagesData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ChooseUsCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statVariants}
              custom={index}
            >
              <div className="text-5xl font-semibold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
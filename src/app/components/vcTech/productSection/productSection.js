"use client";
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../productCard/productCard";

const ProductSection = () => {
  const productsData = [
    {
      slug: "ai-workforce-suite",
      title: "AI Workforce Suite",
      description:
        "Intelligent automation platform that streamlines team workflows with AI-powered task management and predictive analytics.",
      tags: ["AI-Powered", "Cloud-Based"],
      bgColor: "bg-blue-100",
      badgeColor: "bg-blue-600",
      badgeText: "New",
    },
    {
      slug: "cair-surveillance-system",
      title: "CAIR Surveillance System",
      description:
        "Advanced computer vision surveillance solution with real-time threat detection and automated incident reporting.",
      tags: ["AI-Powered", "Cloud-Based"],
      bgColor: "bg-purple-100",
      badgeColor: "bg-purple-600",
      badgeText: "Beta",
    },
    {
      slug: "solar-admin-lite",
      title: "Solar Admin Lite",
      description:
        "Comprehensive solar energy management platform with monitoring, analytics, and maintenance scheduling.",
      tags: ["AI-Powered", "Cloud-Based"],
      bgColor: "bg-green-100",
      badgeColor: "bg-green-600",
      badgeText: "New",
    },
    {
      slug: "setupgrid-erp",
      title: "SetupGrid ERP",
      description:
        "Modern cloud-based ERP system designed for growing businesses with modular architecture and AI insights.",
      tags: ["AI-Powered", "Cloud-Based"],
      bgColor: "bg-orange-100",
      badgeColor: "bg-orange-600",
      badgeText: "New",
    },
    {
      slug: "esports-analytics-platform",
      title: "Esports Analytics Platform",
      description:
        "Real-time gaming analytics and player performance tracking with machine learning predictions and insights.",
      tags: ["AI-Powered", "Cloud-Based"],
      bgColor: "bg-purple-100",
      badgeColor: "bg-purple-600",
      badgeText: "New",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
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

  return (
    <section
      id="products"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
            Our Products
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Optional: subtle lift on hover
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ProductCard
                slug={product.slug}
                title={product.title}
                description={product.description}
                tags={product.tags}
                bgColor={product.bgColor}
                badgeColor={product.badgeColor}
                badgeText={product.badgeText}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// Simple reusable fade + slight scale animation variants
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
    },
  },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.25 } },
};

const BuildTogetherSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // You can later add real submit logic here (emailjs, formspree, etc.)
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm text-blue-600 font-medium">Get in Touch</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 mb-4"
          >
            Let's Build Something Together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? Get in touch with our team.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8 sm:p-10"
          >
            <motion.div variants={staggerChildren}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@gmail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Project Type</label>
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mb-8">
                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </motion.div>

              <motion.div variants={scaleOnHover} initial="rest" whileHover="hover">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  Send Message
                  <FiSend className="text-lg" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {[
                  { icon: FiMail, label: "Email", value: "hello@techco.com" },
                  { icon: FaWhatsapp, label: "WhatsApp", value: "+1 (234) 567-890" },
                  { icon: FaLinkedinIn, label: "LinkedIn", value: "@techco" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-lg p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-3">Quick Response</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries, reach out via WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuildTogetherSection;
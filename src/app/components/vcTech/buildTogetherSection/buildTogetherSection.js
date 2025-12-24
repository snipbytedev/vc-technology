"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
            Let's Build Something Together
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our
            team.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8 sm:p-10">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@gmail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Company Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Project Type Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Send Message
                <FiSend className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Get in Touch Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <p className="text-gray-900 font-medium">hello@techco.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">WhatsApp</p>
                  <p className="text-gray-900 font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaLinkedinIn className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">LinkedIn</p>
                  <p className="text-gray-900 font-medium">@techco</p>
                </div>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Quick Response</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries,
                reach out via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTogetherSection;

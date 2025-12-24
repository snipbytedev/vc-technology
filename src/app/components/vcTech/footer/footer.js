import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">VCT Pvt</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building intelligent digital experiences with AI and modern engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-600 transition-all"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-600 transition-all"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-600 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="mailto:contact@vctpvt.com"
                className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-600 transition-all"
              >
                <HiMail className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
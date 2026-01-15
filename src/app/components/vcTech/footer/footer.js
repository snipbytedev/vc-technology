"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaMicrochip } from "react-icons/fa6";
import Link from "next/link";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const iconHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.15,
    y: -3,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
               <Link href="/">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <FaMicrochip className="w-6 h-6 text-white" />
              </div>
            </Link>
              <h2 className="text-xl font-bold text-gray-900">VCT Pvt</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building intelligent digital experiences with AI and modern engineering.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Services", "Products", "About", "Contact"].map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {[
                { Icon: FaLinkedinIn, href: "https://linkedin.com/company/vctpvt" },
                { Icon: FaTwitter, href: "https://twitter.com/vctpvt" },
                { Icon: FaGithub, href: "https://github.com/vctpvt" },
                { Icon: HiMail, href: "mailto:contact@vctpvt.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-600 transition-all"
                  variants={iconHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-200 pt-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} — All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
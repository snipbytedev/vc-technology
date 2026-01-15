"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrochip } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Variants for desktop nav items (staggered entrance)
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Mobile menu item variants
  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08 + 0.2, // slight delay after drawer opens
        duration: 0.4,
      },
    }),
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 z-40">
      <div className="px-6 sm:px-6 lg:px-8 py-4  mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <FaMicrochip className="w-6 h-6 text-white" />
              </div>
            </Link>
            <span className="text-lg font-semibold text-gray-900">VCT Pvt</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", id: "services" },
              { label: "Products", id: "products" },
              { label: "About", id: "about" },
            ].map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.button
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact
            </motion.button>
          </nav>

          <motion.button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-700"
            aria-label="Open menu"
            whileHover={{ rotate: 90, scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FiMenu size={24} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-white p-6 z-50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between mb-8">
                <motion.span
                  className="text-lg font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Menu
                </motion.span>
                <motion.button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={22} />
                </motion.button>
              </div>

              <nav className="flex flex-col gap-6">
                {[
                  { label: "Services", id: "services" },
                  { label: "Products", id: "products" },
                  { label: "About", id: "about" },
                ].map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={mobileItemVariants}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium text-left w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
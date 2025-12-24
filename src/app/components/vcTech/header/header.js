"use client";
import React, { useState } from "react";
import { FaMicrochip } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaMicrochip className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              VCT Pvt
            </span>
          </div>

          {/* Desktop Navigation (UNCHANGED) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              About
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-700"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold text-gray-900">
              Menu
            </span>
            <button onClick={() => setOpen(false)}>
              <FiX size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

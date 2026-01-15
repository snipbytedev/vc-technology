"use client";
import React from 'react';
import { motion } from "framer-motion";
import { 
  IoEyeOutline, 
  IoShieldCheckmarkOutline, 
  IoFlashOutline, 
  IoStatsChartOutline, 
  IoCloudOutline, 
  IoLockClosedOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoGlobeOutline
} from 'react-icons/io5';

const iconMap = {
  eye: IoEyeOutline,
  shield: IoShieldCheckmarkOutline,
  flash: IoFlashOutline,
  stats: IoStatsChartOutline,
  cloud: IoCloudOutline,
  lock: IoLockClosedOutline,
  people: IoPeopleOutline,
  calendar: IoCalendarOutline,
  document: IoDocumentTextOutline,
  globe: IoGlobeOutline
};

// Animation variants (subtle & clean)
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const iconHover = {
  rest: { scale: 1 },
  hover: { scale: 1.12, transition: { duration: 0.25 } }
};

const CapabilitiesSection = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">Core Capabilities</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for Complete Security
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {data.map((capability, index) => {
            const IconComponent = iconMap[capability.icon] || IoFlashOutline;
            
            return (
              <motion.div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
                whileHover="hover"
              >
                <motion.div 
                  className={`${capability.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  variants={iconHover}
                  initial="rest"
                >
                  <IconComponent className="text-white text-2xl" />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
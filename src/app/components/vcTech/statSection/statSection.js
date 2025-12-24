import React from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { IoFlashOutline } from 'react-icons/io5';
import { FiCloud } from 'react-icons/fi';
import { TbLayout2 } from 'react-icons/tb';
import StatCard from '../statCard/statCard';


const StatSection = () => {
  const expertiseData = [
    {
      icon: RiRobot2Line,
      title: 'AI Development',
      description: 'Custom AI models and intelligent automation solutions'
    },
    {
      icon: HiOutlineCpuChip,
      title: 'Machine Learning Solutions',
      description: 'Advanced ML pipelines and predictive analytics'
    },
    {
      icon: MdOutlinePhoneAndroid,
      title: 'Web & Mobile Development',
      description: 'Cross-platform applications with modern tech stacks'
    },
    {
      icon: IoFlashOutline,
      title: 'SaaS Product Engineering',
      description: 'End-to-end product development and scaling'
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps Infrastructure',
      description: 'Scalable cloud architecture and CI/CD pipelines'
    },
    {
      icon: TbLayout2,
      title: 'UI/UX Design',
      description: 'User-centered design and interactive experiences'
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Blurred decoration on right side */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl transform translate-x-1/3"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
            Our Expertise
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {expertiseData.map((item, index) => (
            <StatCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
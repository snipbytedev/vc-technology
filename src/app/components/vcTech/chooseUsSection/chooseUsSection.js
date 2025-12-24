import React from 'react';
import { LuZap } from 'react-icons/lu';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { MdOutlineWbSunny } from 'react-icons/md';
import { TbTrendingUp } from 'react-icons/tb';
import { BiDollar } from 'react-icons/bi';
import ChooseUsCard from '../chooseUsCard/chooseUsCard';


const ChooseUsSection = () => {
  const advantagesData = [
    {
      icon: LuZap,
      title: 'Fast Delivery',
      description: 'Rapid development cycles with agile methodologies'
    },
    {
      icon: HiOutlineCodeBracket,
      title: 'End-to-End Engineering',
      description: 'Complete product lifecycle management'
    },
    {
      icon: MdOutlineWbSunny,
      title: 'AI-Focused Expertise',
      description: 'Cutting-edge AI and machine learning'
    },
    {
      icon: TbTrendingUp,
      title: 'Scalable Architectures',
      description: 'Built to grow with your business needs'
    },
    {
      icon: BiDollar,
      title: 'Affordable Pricing',
      description: 'Enterprise quality at competitive rates'
    }
  ];

  const statsData = [
    {
      value: '200+',
      label: 'Projects Delivered'
    },
    {
      value: '50+',
      label: 'Global Clients'
    },
    {
      value: '15+',
      label: 'Countries Served'
    },
    {
      value: '99%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-blue-600 font-medium">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400">
            Why Choose Us
          </h2>
        </div>

        {/* Advantages Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {advantagesData.map((item, index) => (
            <ChooseUsCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-semibold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
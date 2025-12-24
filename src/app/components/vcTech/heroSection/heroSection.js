import React from 'react';
import { HiSparkles } from 'react-icons/hi2';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ 
  children, 
  onClick, 
  isLoading = false, 
  disabled = false, 
  className = '', 
  icon: Icon = null 
}) => {
  return (
    <button
      onClick={onClick}
      className={`my-1 rounded-md hover:before:bg-btnColor relative overflow-hidden border border-btnColor px-4 py-1 text-btnColor transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full ${className} ${disabled ? 'bg-blue-300 cursor-not-allowed' : ''}`}
      disabled={disabled || isLoading}
    >
      <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
        {Icon && <Icon className="mr-2" />} 
        {isLoading ? 'Submitting...' : children}
      </span>
    </button>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      
      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>

      {/* Floating dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/40 rounded-full"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400/40 rounded-full"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-blue-300/40 rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-purple-300/40 rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">

        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <HiSparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm text-gray-700 font-medium">
              AI-Powered Digital Solutions
            </span>
          </div>
        </div>

        {/* Headings */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 leading-tight mb-2">
            Building Intelligent
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 leading-tight">
            Digital Experiences
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
          We develop AI-powered software, automation systems, and scalable products for global teams.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
            View Our Work
            <FaArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all border border-gray-200 shadow-sm">
            Explore Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 sm:pt-12">
          <div className="text-center">
            <div className="text-4xl  font-semibold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600 text-sm">Projects</div>
          </div>

          <div className="text-center relative">
            <div className="text-4xl  font-semibold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Clients</div>

            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-2  sm:flex">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl  font-semibold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

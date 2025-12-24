import React from 'react';

const ChooseUsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center border border-gray-200 rounded-xl py-8 px-8 text-center group">
      {/* Icon Container */}
      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
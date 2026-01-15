import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const ProductCard = ({slug, title, description, tags, bgColor, badgeColor, badgeText }) => {
  return (
    <Link
      href={`/product-detail/${slug}`} // Update route as per your routing setup
      className="block group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer">
        {/* Product Image/Preview Area */}
        <div className={`relative h-48 ${bgColor} p-6`}>
          {/* Badge in top-right corner */}
          <div className="absolute top-4 right-4">
            <span className={`${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {badgeText}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Title with Arrow Icon */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 flex-1">
              {title}
            </h3>
            <FiArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-2" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
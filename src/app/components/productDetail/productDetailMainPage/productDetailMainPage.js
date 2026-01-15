"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { productsData } from '@/app/products';
import DetailSection from '../detailSection/detailSection';
import CapabilitiesSection from '../capabilitiesSection/capabilitiesSection';
import SpecsSection from '../specsSection/specsSection';
import ApplicationSection from '../applicationSection/applicationSection';
import ChooseSection from '../chooseSection/chooseSection';
import Link from 'next/link';
import Footer from '../../vcTech/footer/footer';
import GetInTouchSection from '../getInTouchSection/getInTouchSection';
import BackHeader from '../backHeader/backHeader';

const ProductDetailMainPage = () => {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);
  const slug = parts[parts.length - 1];
  if (!slug || parts.length < 2 || parts[0] !== 'product-detail') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invalid Product Route
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The URL seems incorrect. Please check the product link.
          </p>
        </div>
      </div>
    );
  }
  const product = productsData[slug];
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            The product you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackHeader />
      <div className="w-full px-6">
        <DetailSection data={product.detailSection} />
        <CapabilitiesSection data={product.capabilities} />
        <SpecsSection data={product.technicalSpecs} />
        <ApplicationSection data={product.applications} />
        <ChooseSection data={product.whyChoose} />
        <GetInTouchSection />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailMainPage;
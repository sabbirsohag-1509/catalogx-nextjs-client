'use client';

import GlobalLoader from '@/app/components/loader/GlobalLoader';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import {
  FaTag,
  FaTimes,
  FaImages,
  FaShoppingCart
} from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';

const ViewDetailsPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: item, isLoading, isError } = useQuery({
    queryKey: ['item', id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/items/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch item details');
      }
      return res.json();
    }
  });

  if (isLoading) return <GlobalLoader />;

  if (isError) {
    return (
      <p className="text-3xl font-bold text-center pt-14 text-red-500">
        Error loading item details
      </p>
    );
  }

  // 🔹 Collect all images safely
  const allImages = [
    item?.mainImage
      ? typeof item.mainImage === 'string'
        ? { url: item.mainImage }
        : item.mainImage
      : null,
    ...((item?.images || []).map(img =>
      typeof img === 'string' ? { url: img } : img
    ))
  ].filter(Boolean);

  //Discount calculation
  const finalPrice =
    item?.discount
      ? Math.max(item.price - item.discount, 0)
      : item?.price;

  return (
    <div className="max-w-7xl bg-base-100 mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ================= Image Section ================= */}
        <div>
          <div className="relative">
            <img
              src={allImages[0]?.url}
              alt={item?.name}
              className="w-full h-[420px] object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(allImages[0])}
            />

            {item?.discount && (
              <span className="absolute top-4 left-4 bg-secondary text-secondary-content px-4 py-1 rounded-full text-sm font-semibold shadow flex items-center">
                - <TbCurrencyTaka size={16} /> {item.discount}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto py-2 mt-2">
            {allImages.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={`${item?.name || 'Image'} ${idx + 1}`}
                className="h-20 md:h-28 w-28 md:w-36 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-transform duration-200 hover:scale-105"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* ================= Details Section ================= */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            {item?.name}
          </h1>

          <p className="leading-relaxed">
            {item?.description}
          </p>

          {/* Category + Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-lg">
              <FaTag className="text-blue-600" />
              <span className="font-medium">{item?.category}</span>
            </div>

            {item?.discount ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-600 flex items-center">
                  <TbCurrencyTaka size={20} />
                  {finalPrice}
                </span>

                <span className="text-gray-400 line-through flex items-center">
                  <TbCurrencyTaka size={16} />
                  {item?.price}
                </span>
              </div>
            ) : (
              <div className="flex items-center text-xl font-semibold">
                <TbCurrencyTaka size={20} />
                {item?.price}
              </div>
            )}
          </div>

          {/* Images count */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaImages />
            <span>{allImages.length} images available</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-secondary w-1/2 text-white">
              Buy Now
            </button>

            <button className="btn btn-sm btn-primary w-1/2 flex items-center justify-center gap-1">
              <FaShoppingCart size={14} />
              Add to Cart
            </button>
          </div>
          {/* HardCoded Content  */}
          <div className="mt-8"> 
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-3 text-gray-700">
              <p>• High-quality materials ensure durability and longevity.</p>
              <p>• Ergonomically designed for maximum comfort and usability.</p>
              <p>• Available in multiple colors and sizes to suit your preferences.</p>
              <p>• Easy to clean and maintain, perfect for everyday use.</p>
              <p>• Backed by a 1-year warranty for peace of mind.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Image Modal ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.url}
            alt="Enlarged Item"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewDetailsPage;

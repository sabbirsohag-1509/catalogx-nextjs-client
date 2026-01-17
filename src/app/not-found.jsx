'use client';

import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="text-center p-10 rounded-2xl bg-white/70 backdrop-blur shadow-xl animate-fade-in">

        {/* Icon */}
        <div className="flex justify-center mb-6 animate-bounce-slow">
          <FaExclamationTriangle className="text-6xl text-pink-500 drop-shadow" />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </p>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform">
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

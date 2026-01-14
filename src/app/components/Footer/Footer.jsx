"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-12 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center gap-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center ">
          <img
            src="/images/logo/logo.png"
            alt="CatalogX Logo"
            className="w-24 h-24 object-contain"
          />
          <p className="text-base sm:text-lg text-base-content/70 text-center max-w-md">
            CatalogX is your ultimate online shopping destination, offering handpicked products, exclusive deals, and a seamless shopping experience for everyone.
          </p>
        </div>

        {/* Middle Section: Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-base-content/70 w-full max-w-4xl text-center sm:text-left">
          <div>
            <h3 className="font-semibold text-lg text-base-content mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-base-content mb-4">Support</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-base-content mb-4">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Promotions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-base-300 pt-6 text-center text-base-content/50 w-full mt-6">
          &copy; {new Date().getFullYear()} CatalogX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

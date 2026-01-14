"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-24 bg-base-200" id="newsletter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-base sm:text-lg text-base-content/70">
            Stay up-to-date with the latest products, exclusive offers, and
            handpicked deals from <span className="font-semibold text-primary">CatalogX</span>. Our newsletter is carefully crafted to bring
            you insights, recommendations, and tips that enhance your online shopping
            experience. Whether it’s discovering trending items, seasonal promotions, or
            expert advice on choosing the right products, subscribing ensures that you
            never miss out on value-packed updates.
          </p>

          <p className="text-base sm:text-lg text-base-content/70">
            By joining our newsletter, you will gain early access to limited-time sales,
            exclusive discounts, and curated content designed specifically for our
            subscribers. Every edition contains informative articles about product
            highlights, reviews, shopping hacks, and behind-the-scenes stories from
            CatalogX. We respect your privacy and promise to deliver only meaningful
            and useful content directly to your inbox. This is more than just updates;
            it’s a complete guide to making the most of your shopping journey.
          </p>

          <p className="text-base sm:text-lg text-base-content/70">
            Our newsletter also shares educational content about products, insights into
            industry trends, and practical tips to help you make informed decisions.
            Whether you are a frequent shopper, a bargain hunter, or someone looking
            for inspiration, subscribing to CatalogX newsletter will enrich your online
            shopping experience with actionable knowledge. We emphasize quality over
            quantity, so each email is concise, engaging, and full of value.
          </p>

          <p className="text-base sm:text-lg text-base-content/70">
            In addition to exclusive offers and tips, subscribers get access to
            special events, giveaways, and early-bird notifications about new product
            launches. Our aim is to foster a community of informed and satisfied
            customers. From the latest fashion trends to tech gadgets and home
            essentials, we cover a wide range of categories that matter to our users.
            Every email is designed to inspire, guide, and provide actionable
            opportunities to shop smarter, save money, and enjoy every purchase.
          </p>

          <p className="text-base sm:text-lg text-base-content/70">
            Join thousands of satisfied subscribers who trust CatalogX to bring them
            the best products, tips, and exclusive deals. Don’t miss this opportunity
            to stay connected with a brand committed to quality, transparency, and
            customer satisfaction. Subscribe today and take the first step toward a
            more informed, engaging, and rewarding shopping experience.
          </p>

          {/* CTA Input */}
          <form className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-lg w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="btn btn-primary btn-lg flex items-center gap-2"
            >
              <FaEnvelope /> Subscribe
            </button>
          </form>
        </div>

        {/* Right: Image / Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/hero/item-5.jpg" 
            alt="Subscribe to CatalogX Newsletter"
            className="rounded-2xl shadow-xl object-cover w-full max-w-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

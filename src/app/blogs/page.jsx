"use client";

import React from "react";
import { FaBookOpen, FaLightbulb, FaChartLine, FaTools } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const Blogs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        CatalogX Blog
      </h1>

      {/* Blog 1 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold text-secondary">
          <FaBookOpen /> Tech Trends in 2026
        </div>
        <p className="text-base text-base-content/80 leading-relaxed">
          The tech industry is evolving rapidly, and 2026 is set to be an exciting year for innovation. From artificial intelligence advancements to quantum computing breakthroughs, businesses and consumers will experience technology in ways previously unimaginable. Companies like CatalogX are constantly adapting to these trends, ensuring their products and services meet the growing expectations of modern users. With an increasing demand for smart home devices, wearable gadgets, and IoT integration, staying ahead in technology requires both creativity and strategic planning. Understanding emerging technologies and implementing them effectively can drive productivity, efficiency, and user satisfaction.
        </p>
      </div>

      {/* Blog 2 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold text-secondary">
          <FaLightbulb /> Innovative Gadgets You Must Try
        </div>
        <p className="text-base text-base-content/80 leading-relaxed">
          At CatalogX, innovation is at the heart of every product. From smartwatches that track your health metrics to wireless earbuds offering immersive sound, technology is designed to simplify and enhance daily life. The latest gadgets also include eco-friendly devices, energy-efficient appliances, and multi-functional tools that cater to modern living. Whether it’s enhancing home entertainment, optimizing fitness routines, or improving productivity at work, these gadgets are built to empower users. Experimenting with new devices not only provides convenience but also encourages a smarter, more connected lifestyle.
        </p>
      </div>

      {/* Blog 3 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold text-secondary">
          <FaChartLine /> How Tech Affects Modern Economy
        </div>
        <p className="text-base text-base-content/80 leading-relaxed">
          Technology has transformed the modern economy, impacting industries, employment, and consumer behavior. With online marketplaces, mobile payments, and digital platforms, businesses reach a global audience instantly. Innovations like AI-driven analytics allow companies to predict trends, optimize supply chains, and make informed financial decisions. CatalogX emphasizes the importance of understanding these technological shifts, as integrating smart devices and automation tools can significantly enhance business efficiency. Moreover, tech literacy empowers individuals to make smarter purchasing decisions, invest wisely, and leverage emerging opportunities in the digital age.
        </p>
      </div>

      {/* Blog 4 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold text-secondary">
          <FaTools /> Tips to Choose the Right Tech Products
        </div>
        <p className="text-base text-base-content/80 leading-relaxed">
          Choosing the right technology products can be overwhelming given the variety available today. CatalogX recommends assessing personal needs first — consider what features are essential, how often the device will be used, and compatibility with other products. Reading reviews, checking warranty policies, and understanding long-term support are critical steps before purchase. Price should be balanced with quality; sometimes investing slightly more upfront ensures durability and better performance. By being informed, users can avoid unnecessary spending and enjoy products that truly enhance productivity, entertainment, and lifestyle.
        </p>
      </div>

      {/* Blog 5 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold text-secondary">
          <TbCurrencyTaka /> Maximizing Value for Your Tech Investment
        </div>
        <p className="text-base text-base-content/80 leading-relaxed">
          Investing in technology wisely ensures that you get the most value for your money. CatalogX encourages users to consider device longevity, regular software updates, and multi-functional capabilities. Combining these factors with proper maintenance and responsible usage increases the lifespan of gadgets. Additionally, exploring promotions, discounts, and bundle deals can provide better affordability without compromising quality. Ultimately, understanding both the product specifications and your personal requirements leads to smarter purchases, better satisfaction, and a more efficient lifestyle in a tech-driven world.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

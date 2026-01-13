"use client";

import { useQuery } from "@tanstack/react-query";
import GlobalLoader from "../../loader/GlobalLoader";
import { ShoppingCart } from "lucide";

const FeaturesItems = () => {
  const {
    data: items = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/items");
      if (!res.ok) throw new Error("Failed to fetch items");
      return res.json();
    },
  });

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError)
    return (
      <p className="text-center text-2xl text-red-500 mt-10">
        Failed to load items
      </p>
    );

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary">
        Featured Items
      </h1>
      <p className="text-center mt-4 mb-8 text-base sm:text-lg text-base-content/70">
        Handpicked products showcasing the best in quality, innovation, and
        value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="relative card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Discount Ribbon */}
            {item.discount && (
              <div className="absolute top-3 left-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-br-lg shadow-md z-10">
                {item.discount}% OFF
              </div>
            )}

            <figure className="relative">
              <img
                src={item.mainImage}
                alt={item.name}
                className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-base font-semibold">
                {item.name}
              </h2>
              <p className="text-sm text-base-content/70 mt-1">
                {item.description.slice(0, 80)}...
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  {item.discount ? (
                    <>
                      <span className="text-sm text-base-content/50 line-through">
                        ৳ {item.price}
                      </span>
                      <span className="text-primary font-bold">
                        ৳{" "}
                        {Math.round((item.price * (100 - item.discount)) / 100)}
                      </span>
                    </>
                  ) : (
                    <span className="text-primary font-bold">
                      ৳ {item.price}
                    </span>
                  )}
                </div>

                <button className="btn btn-sm btn-outline btn-primary flex items-center gap-1 hover:bg-primary hover:text-white transition-colors">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesItems;

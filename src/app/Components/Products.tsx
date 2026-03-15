// app/components/Products.tsx
interface Product {
  img: string;
  name: string;
  price: number | string;
  originalPrice?: number | string;
  brand: string;
  colors?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  soldOut?: boolean;
}

export default function Products() {
  const products: Product[] = [
    { 
      name: "Wool Cashmere Coat", 
      price: 895, 
      brand: "MAX MARA",
      colors: 3,
      img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
      isNew: true
    },
    { 
      name: "Leather Crossbody Bag", 
      price: 450, 
      originalPrice: 650,
      brand: "GUCCI",
      colors: 2,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop",
      isBestseller: true
    },
    { 
      name: "Silk Blouse", 
      price: 295, 
      brand: "SAINT LAURENT",
      colors: 4,
      img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&auto=format&fit=crop",
      isNew: true
    },
    { 
      name: "Leather Ankle Boots", 
      price: 695, 
      brand: "PRADA",
      colors: 2,
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop",
      isBestseller: true
    },
  ];

  const formatPrice = (price: number | string): string => {
    if (typeof price === 'string') return price;
    return `$${price}`;
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading - Minimalist Fashion Style */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] text-gray-400 uppercase mb-3">Curated Selection</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            New Arrivals
          </h2>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >
              {/* Image Container - Fashion Focus */}
              <div className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Fashion Badges - Minimal */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs tracking-wider px-3 py-1.5 shadow-sm">
                    NEW
                  </span>
                )}
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs tracking-wider px-3 py-1.5">
                    BESTSELLER
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs tracking-wider px-3 py-1.5">
                    SALE
                  </span>
                )}

                {/* Quick Shop - Fashion Hover Effect */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-full bg-white text-gray-900 py-3 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition">
                    Quick Shop
                  </button>
                </div>
              </div>

              {/* Product Info - Clean Fashion Typography */}
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-400 tracking-wider mb-1">{product.brand}</p>
                <h3 className="text-sm text-gray-900 mb-2 font-light">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  {product.originalPrice ? (
                    <>
                      <p className="text-sm font-medium text-gray-900">
                        {formatPrice(product.price)}
                      </p>
                      <p className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm font-medium text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                  )}
                </div>

                {/* Color Options - Fashion Detail */}
                {product.colors && (
                  <p className="text-xs text-gray-400">{product.colors} colors available</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link - Fashion Style */}
        <div className="text-center mt-16">
          <button className="text-sm tracking-[3px] text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
}
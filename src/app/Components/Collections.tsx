// app/components/Collections.tsx
export default function Collections() {
  const collections = [
    { 
      title: "Fashion", 
      subtitle: "Curated Apparel",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
      items: "124 items"
    },
    { 
      title: "Accessories", 
      subtitle: "Fine Details",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
      items: "89 items"
    },
    { 
      title: "Gadgets", 
      subtitle: "Modern Essentials",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop",
      items: "56 items"
    } 
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading - Refined */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-3">
            Curated Selections
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Shop by Collection
          </h2>
          <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden bg-gray-100">
                <img 
                  src={collection.img} 
                  alt={collection.title}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay - More Sophisticated */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Top Badge - Optional */}
                <div className="mb-auto">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs tracking-wider px-3 py-1.5 inline-block">
                    {collection.items}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  {/* Subtitle */}
                  <p className="text-xs tracking-[3px] text-white/70 mb-2">
                    {collection.subtitle}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-light text-white mb-3">
                    {collection.title}
                  </h3>
                  
                  {/* Divider Line */}
                  <div className="w-12 h-[1px] bg-white/50 mb-4 transition-all duration-500 group-hover:w-16"></div>
                  
                  {/* Shop Link */}
                  <p className="text-sm text-white/80 flex items-center gap-2 group/link">
                    <span className="tracking-wide">Explore Collection</span>
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                  </p>
                </div>
              </div>

              {/* Border Accent on Hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 text-sm tracking-[3px] text-gray-900 border-b border-gray-300 pb-2 hover:border-gray-900 transition-all">
            <span>DISCOVER ALL COLLECTIONS</span>
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
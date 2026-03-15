"use client"
import { useState, useEffect } from "react"
import { FiClock, FiArrowRight, FiShoppingBag, FiEye } from "react-icons/fi"

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Featured Products Data
  const featuredProducts = [
    {
      id: 1,
      name: "Merino Wool Coat",
      category: "Outerwear",
      originalPrice: 1295,
      salePrice: 647,
      discount: 50,
      material: "100% Italian Wool",
      sizes: ["XS", "S", "M", "L"],
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Leather Crossbody",
      category: "Accessories",
      originalPrice: 895,
      salePrice: 447,
      discount: 50,
      material: "Full-Grain Leather",
      colors: 3,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      category: "Knitwear",
      originalPrice: 695,
      salePrice: 347,
      discount: 50,
      material: "Grade-A Cashmere",
      sizes: ["XS", "S", "M", "L", "XL"],
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop"
    }
  ]

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 2)
    targetDate.setHours(23, 59, 59)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 bg-[#f1f1f1] overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gray-900"></span>
              <span className="text-xs tracking-[4px] text-gray-500">LIMITED EDITION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              The Private Sale
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mt-4 font-light">
              Exclusive access to 50% off on our most coveted pieces. 
              Members only.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex gap-6 mt-8 md:mt-0">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HRS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-light text-gray-900 font-mono mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] tracking-[3px] text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group relative bg-white"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container - Luxury Fashion Style */}
              <div className="relative overflow-hidden bg-gray-50 mb-5">
                <div className="aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay Indicators */}
                <div className="absolute top-5 left-5 flex flex-col gap-2">
                  <span className="bg-gray-900 text-white text-[10px] tracking-[2px] px-3 py-1.5">
                    -{product.discount}% OFF
                  </span>
                </div>

                {/* Quick View - Appears on Hover */}
                <div className="absolute inset-x-5 bottom-5 opacity-0 group-hover:opacity-100 transition duration-500">
                  <button className="w-full bg-white text-gray-900 py-3 text-xs tracking-[3px] hover:bg-gray-900 hover:text-white transition flex items-center justify-center gap-2">
                    <FiEye className="text-sm" />
                    QUICK VIEW
                  </button>
                </div>

                {/* Material Badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] px-3 py-1.5">
                  {product.material}
                </div>
              </div>

              {/* Product Info - Minimal Luxury */}
              <div className="space-y-3 p-3">
                {/* Category */}
                <p className="text-[10px] tracking-[3px] text-gray-400">
                  {product.category}
                </p>

                {/* Name and Price Row */}
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${product.salePrice}
                    </p>
                    <p className="text-[10px] text-gray-400 line-through">
                      ${product.originalPrice}
                    </p>
                  </div>
                </div>

                {/* Size/Color Options - Professional Detail */}
                <div className="flex items-center gap-4 text-[10px]">
                  {product.sizes ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Sizes:</span>
                      <div className="flex gap-1.5">
                        {product.sizes.slice(0, 3).map((size) => (
                          <span key={size} className="text-gray-700">{size}</span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="text-gray-400">+{product.sizes.length - 3}</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Colors:</span>
                      <div className="flex gap-1">
                        {[...Array(product.colors)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full border border-gray-300"
                            style={{ backgroundColor: i === 0 ? '#000' : i === 1 ? '#666' : '#999' }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Add to Cart Button - Minimal */}
                <button className="w-full border border-gray-200 py-3 mt-2 text-xs tracking-[3px] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition flex items-center justify-center gap-2">
                  <FiShoppingBag className="text-sm" />
                  ADD TO CART
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border border-gray-900 pointer-events-none transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-4 text-xs tracking-[4px] text-gray-900 border-b border-gray-300 pb-2 hover:border-gray-900 transition">
            <span>VIEW ALL 24 PRODUCTS</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Strip */}
        <div className="flex justify-center items-center gap-12 mt-20 pt-12 border-t border-gray-200">
          {[
            { label: 'COMPLIMENTARY SHIPPING', desc: 'On orders over $500' },
            { label: 'SECURE CHECKOUT', desc: '256-bit encryption' },
            { label: 'EASY RETURNS', desc: '30-day return policy' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-xs tracking-[3px] text-gray-900 mb-1">{item.label}</p>
              <p className="text-[10px] text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Corner Accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-gray-200"></div>
      <div className="absolute top-12 right-12 w-16 h-16 border-t border-r border-gray-200"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b border-l border-gray-200"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-gray-200"></div>
    </section>
  )
}
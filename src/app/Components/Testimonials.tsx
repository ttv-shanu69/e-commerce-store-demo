"use client"
import { useState } from "react"
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews = [
    { 
      name: "Jane D.", 
      text: "Exceptional quality and attention to detail. The cashmere coat exceeded my expectations—luxurious feel and impeccable tailoring. Fast delivery and premium packaging.",
      rating: 5,
      location: "New York",
      product: "Cashmere Coat Collection"
    },
    { 
      name: "Mark T.", 
      text: "A truly luxury experience online. The leather goods are outstanding, and the customer service team went above and beyond to ensure my satisfaction.",
      rating: 5,
      location: "London",
      product: "Leather Accessories"
    },
    { 
      name: "Sophia L.", 
      text: "Beautiful products and excellent customer service. The attention to detail in both the items and the shopping experience sets this brand apart.",
      rating: 5,
      location: "Paris",
      product: "Silk Collection"
    },
    { 
      name: "Alexander C.", 
      text: "The quality is simply unmatched. I've been a loyal customer for years, and each purchase reaffirms why this is my go-to luxury brand.",
      rating: 5,
      location: "Milan",
      product: "Tailored Suits"
    },
    { 
      name: "Isabella R.", 
      text: "From packaging to product, everything screams luxury. The attention to detail is impeccable, and the fit is always perfect.",
      rating: 5,
      location: "Tokyo",
      product: "Evening Wear"
    },
    { 
      name: "William H.", 
      text: "Outstanding service and premium quality. The team helped me find the perfect gift, and the recipient was absolutely thrilled.",
      rating: 5,
      location: "Sydney",
      product: "Gift Collection"
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length - 2))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2))
  }

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gray-900"></span>
            <FiMessageCircle className="text-gray-400 text-lg" />
            <span className="w-12 h-[1px] bg-gray-900"></span>
          </div>
          <p className="text-xs tracking-[6px] text-gray-400 mb-4">CLIENT EXPERIENCES</p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            Trusted by
            <span className="relative ml-4">
              <span className="relative z-10 font-medium">Discerning Clients</span>
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gray-900"></span>
            </span>
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          {/* Quote Icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-gray-200 text-7xl opacity-30">
            <FaQuoteLeft />
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.slice(activeIndex, activeIndex + 3).map((review, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-100 p-8 hover:border-gray-900 transition-all duration-500"
              >
                {/* Quote Mark */}
                <div className="absolute -top-3 left-8 text-gray-900 text-2xl opacity-20">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? 'text-gray-900 fill-gray-900' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Product Tag */}
                <div className="mb-6">
                  <span className="text-[10px] tracking-[2px] text-gray-400 border border-gray-200 px-3 py-1.5">
                    {review.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{review.name}</h3>
                    <p className="text-[10px] tracking-[2px] text-gray-400 mt-1">{review.location}</p>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[8px] tracking-[1px] text-gray-400">VERIFIED</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-gray-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition flex items-center justify-center"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition flex items-center justify-center"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '5,000+', label: 'HAPPY CLIENTS' },
            { value: '98%', label: 'SATISFACTION RATE' },
            { value: '4.9/5', label: 'AVERAGE RATING' },
            { value: '15+', label: 'COUNTRIES' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{stat.value}</p>
              <p className="text-[10px] tracking-[3px] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-3 border border-gray-900 px-10 py-4 text-xs tracking-[4px] bg-gray-900 hover:text-white transition">
            <span>WRITE A REVIEW</span>
            <FiMessageCircle className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-gray-200"></div>
      <div className="absolute top-12 right-12 w-16 h-16 border-t border-r border-gray-200"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b border-l border-gray-200"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-gray-200"></div>
    </section>
  )
}
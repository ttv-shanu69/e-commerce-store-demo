"use client"
import { useState, useEffect } from "react"
import { FiArrowRight, FiPlay, FiPause } from "react-icons/fi"

export default function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop",
      title: "Modern Luxury",
      subtitle: "Autumn Winter 2024",
      desc: "Explore premium fashion and lifestyle essentials designed for modern living.",
      accent: "New Arrivals",
      color: "#ffffff"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&auto=format&fit=crop",
      title: "New Collection",
      subtitle: "Limited Edition",
      desc: "Discover the latest trends crafted with quality and elegance.",
      accent: "Exclusive",
      color: "#f5f5f5"
    },
    {
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&auto=format&fit=crop",
      title: "Exclusive Products",
      subtitle: "Curated Selection",
      desc: "Premium gadgets, accessories and fashion curated just for you.",
      accent: "Premium",
      color: "#ffffff"
    }
  ]

  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 20
    const y = (clientY / innerHeight - 0.5) * 20
    setMousePosition({ x, y })
  }

  return (
    <section 
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Images with Parallax */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ease-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Main Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: `translate(${mousePosition.x * (i === current ? 0.5 : 0)}px, ${mousePosition.y * (i === current ? 0.5 : 0)}px) scale(1.05)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          {/* Animated Overlay Lines */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-slide"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-slide-reverse"></div>
          </div>
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Animated Accent Badge */}
            <div className="mb-8 overflow-hidden">
              <span className="inline-block border border-white/20 backdrop-blur-sm text-white/90 text-xs tracking-[4px] px-5 py-2.5 animate-slideUp">
                {slides[current].accent}
              </span>
            </div>

            {/* Title with Stagger Animation */}
            <div className="overflow-hidden">
              <p className="text-white/60 text-sm tracking-[6px] mb-4 animate-slideUp animation-delay-200">
                {slides[current].subtitle}
              </p>
              <h1 className="text-7xl md:text-9xl font-light text-white leading-[0.9] tracking-tight">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span className="block animate-slideUp animation-delay-400 hover:translate-x-2 transition-transform duration-500">
                      {word}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            {/* Description with Gradient Text */}
            <p className="mt-8 text-white/80 max-w-xl text-lg font-light leading-relaxed animate-fadeIn animation-delay-600">
              {slides[current].desc}
              <span className="block w-0 group-hover:w-full transition-all"></span>
            </p>

            {/* Animated Divider */}
            <div className="relative w-24 h-[2px] my-8 overflow-hidden">
              <div className="absolute inset-0 bg-white/30"></div>
              <div className="absolute inset-0 bg-white transform -translate-x-full animate-shimmer"></div>
            </div>

            {/* Buttons with Advanced Hover Effects */}
            <div className="flex flex-wrap gap-6 animate-fadeIn animation-delay-800">
              <button className="group relative bg-white text-gray-900 hover:text-white  px-10 py-4 text-sm tracking-[3px] overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  SHOP COLLECTION
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute inset-0 border border-white group-hover:border-black transition-colors duration-500"></span>
              </button>

              <button className="group relative border border-white/30 text-white px-10 py-4 text-sm tracking-[3px] overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  DISCOVER MORE
                  <FiArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </button>
            </div>

            {/* Stats / Features */}
            <div className="flex gap-12 mt-16 animate-fadeIn animation-delay-1000">
              <div>
                <p className="text-3xl font-light text-white">200+</p>
                <p className="text-xs tracking-[3px] text-white/50 mt-2">PREMIUM BRANDS</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">5k+</p>
                <p className="text-xs tracking-[3px] text-white/50 mt-2">HAPPY CLIENTS</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">24/7</p>
                <p className="text-xs tracking-[3px] text-white/50 mt-2">CONCIERGE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slider Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white/50 hover:text-white transition-colors"
        >
          {isAutoPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
        </button>

        {/* Progress Lines */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative w-16 h-[2px] overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20"></span>
              <span 
                className={`absolute inset-0 bg-white transform transition-transform duration-300 ${
                  current === i ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: 'left' }}
              ></span>
              {current === i && isAutoPlaying && (
                <span 
                  className="absolute inset-0 bg-white/50 animate-progress"
                  style={{ transformOrigin: 'left' }}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-white/50 text-xs tracking-[2px] font-mono">
          <span className="text-white">{(current + 1).toString().padStart(2, '0')}</span> / {slides.length.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-white/30 text-xs tracking-[3px] transform rotate-90 mb-8">
            SCROLL
          </span>
          <div className="relative w-[1px] h-20 bg-white/20">
            <div className="absolute top-0 left-0 w-full h-0 bg-white/60 animate-scroll"></div>
          </div>
          <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/20"></div>
      <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-white/20"></div>
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b border-l border-white/20"></div>
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/20"></div>
    </section>
  )
}
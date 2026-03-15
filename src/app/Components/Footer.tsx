import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaApple,
  FaGooglePay
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiClock, FiChevronRight } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      {/* Newsletter Section - Full White */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] tracking-[6px] text-gray-400 mb-4 block">NEWSLETTER</span>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Join the Inner Circle
            </h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-8 font-light">
              Subscribe to receive exclusive offers, early access to new collections, and personalized styling insights.
            </p>
            
            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none transition"
              />
              <button className="bg-gray-900 text-white px-8 py-4 text-sm tracking-[3px] hover:bg-gray-800 transition whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 mt-4 tracking-wider">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer - Black */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          {/* Brand Column - 4 cols */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <h2 className="text-3xl font-light text-white tracking-[8px]">
                GOLDEN<span className="font-normal">CART</span>
              </h2>
              <div className="w-12 h-[1px] bg-gray-700 mt-4"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Curating exceptional products for the discerning customer since 2015. 
              Where luxury meets everyday elegance.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaWhatsapp, label: 'WhatsApp' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center group hover:border-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="text-gray-400 text-sm group-hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm tracking-[4px] mb-6">EXPLORE</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Collections', 'New Arrivals', 'Sale'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2 group"
                  >
                    <FiChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition text-white" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information - 2 cols */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm tracking-[4px] mb-6">INFORMATION</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Size Guide', 'FAQs', 'Shipping'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-gray-400 text-sm hover:text-white transition flex items-center gap-2 group"
                  >
                    <FiChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition text-white" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-white text-sm tracking-[4px] mb-6">CONCIERGE</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <FiMapPin className="text-gray-400 text-lg mt-0.5 group-hover:text-white transition" />
                <div>
                  <p className="text-white text-sm font-medium">Flagship Store</p>
                  <p className="text-gray-400 text-sm">48 Madison Avenue, New York, NY 10022</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <FiPhone className="text-gray-400 text-lg mt-0.5 group-hover:text-white transition" />
                <div>
                  <p className="text-white text-sm font-medium">Client Services</p>
                  <p className="text-gray-400 text-sm">+1 (212) 555-7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <FiMail className="text-gray-400 text-lg mt-0.5 group-hover:text-white transition" />
                <div>
                  <p className="text-white text-sm font-medium">Email Us</p>
                  <p className="text-gray-400 text-sm">concierge@goldencart.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <FiClock className="text-gray-400 text-lg mt-0.5 group-hover:text-white transition" />
                <div>
                  <p className="text-white text-sm font-medium">Hours</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9am - 8pm EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs text-gray-500 order-2 md:order-1">
              © {currentYear} GOLDENCART. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-[10px] tracking-[2px] text-gray-500">WE ACCEPT</span>
              <div className="flex gap-3">
                <FaCcVisa className="text-2xl text-gray-500 hover:text-white transition" />
                <FaCcMastercard className="text-2xl text-gray-500 hover:text-white transition" />
                <FaCcAmex className="text-2xl text-gray-500 hover:text-white transition" />
                <FaCcPaypal className="text-2xl text-gray-500 hover:text-white transition" />
                <FaApple className="text-2xl text-gray-500 hover:text-white transition" />
                <FaGooglePay className="text-2xl text-gray-500 hover:text-white transition" />
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 order-3">
              <a href="#" className="text-[10px] tracking-[2px] text-gray-500 hover:text-white transition">
                PRIVACY
              </a>
              <a href="#" className="text-[10px] tracking-[2px] text-gray-500 hover:text-white transition">
                TERMS
              </a>
              <a href="#" className="text-[10px] tracking-[2px] text-gray-500 hover:text-white transition">
                COOKIES
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      {/* <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-gray-800"></div>
      <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-gray-800"></div> */}
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b border-l border-gray-800"></div>
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-gray-800"></div>
    </footer>
  )
}
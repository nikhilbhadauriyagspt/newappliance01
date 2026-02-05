import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Bio */}
          <div className="space-y-6">
            <div className="font-logo font-extrabold text-3xl tracking-tighter leading-none">
              <span className="text-white">Felona</span>
              <span className="text-secondary">Repair</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We provide appliance repair and maintenance services for various household brands. Our goal is to provide technical support and component repair solutions to maintain your equipment's functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h5 className="font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/#services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <a href={item.path} className="text-gray-400 hover:text-secondary hover:translate-x-2 transition-all inline-block">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.path} className="text-gray-400 hover:text-secondary hover:translate-x-2 transition-all inline-block">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed mt-1">123 Street Name, Tech District, City Name, USA</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <FaPhoneAlt className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-gray-400 text-sm">+1 234 567 890</span>
                  <span className="text-gray-400 text-sm">+1 987 654 321</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <FaEnvelope className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm mt-2">info@felonarepair.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-lg mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h5>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Stay updated with our latest offers and repair tips. Subscribe to our newsletter today!
            </p>
            <form className="space-y-3">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all text-sm"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-secondary hover:bg-orange-600 text-white w-12 rounded-xl flex items-center justify-center transition-all hover:scale-105"
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 ml-2">We respect your privacy. No spam ever.</p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-black/20 border-t border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Felona Repair. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="text-gray-500 hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

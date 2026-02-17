import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubscribed(true);
        e.target.reset();
        setTimeout(() => setSubscribed(false), 5000);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <footer className="bg-primary text-white pt-24 overflow-hidden relative font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Top Section: CTA and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pb-20 border-b border-white/5">
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-block mb-8">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center p-3 shadow-2xl">
                  <img src="/logo/logo.png" alt="appliance nerds" className="w-full h-full object-contain" />
                </div>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
              Elevating home appliance maintenance to a professional art form. Fast, reliable, and technically superior services.
            </p>
          </div>

          <div className="flex-1 max-w-md w-full">
            <h4 className="text-lg font-black mb-6 text-center lg:text-left">Subscribe to Our Updates</h4>
            <form onSubmit={handleSubscribe} className="relative group" name="newsletter" data-netlify="true">
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-[20px] py-5 pl-8 pr-32 outline-none focus:bg-white/10 focus:border-secondary transition-all font-medium text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-6 rounded-2xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-secondary transition-all shadow-lg active:scale-95"
              >
                Join <FaArrowRight size={10} />
              </button>
            </form>
            {subscribed && <p className="text-secondary text-center lg:text-left mt-4 text-xs font-bold animate-pulse">Welcome to our community!</p>}
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20">

          {/* Services */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Core Services</h5>
            <ul className="space-y-4">
              {['Washing Machines', 'Refrigerators', 'Air Conditioners', 'Smart TVs', 'Oven & Stoves'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Company</h5>
            <ul className="space-y-4">
              {[
                { name: 'About History', path: '/about' },
                { name: 'Latest Blogs', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Our Projects', path: '/projects' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Get In Touch</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span className="text-slate-400 text-sm font-medium leading-relaxed">Grandview Glendale, <br />CA 91201, USA</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-secondary" />
                <span className="text-slate-400 text-sm font-black">+1 (530) 554-4817</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-secondary" />
                <span className="text-slate-400 text-sm font-medium">appliancenerds@outlook.com</span>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Legal & Policies</h5>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Refund Policy', path: '/refund-policy' },
                { name: 'Cookie Policy', path: '/cookie-policy' },
                { name: 'Disclaimer', path: '/disclaimer' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} appliance nerds. Designed for technical excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
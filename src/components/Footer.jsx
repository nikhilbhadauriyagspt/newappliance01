import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

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
                <div className="w-52 bg-white flex items-center justify-center p-1 shadow-2xl">
                  <img src="/logo/logo.png" alt="Appliance Nerds" className="w-full h-full object-contain" />
                </div>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
              Making home appliance care easy and simple. Fast, reliable, and expert service you can trust.
            </p>
          </div>

          <div className="flex-1 max-w-md w-full">
            <h4 className="text-lg font-black mb-6 text-center lg:text-left">Get our latest tips</h4>
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
            {subscribed && <p className="text-secondary text-center lg:text-left mt-4 text-xs font-bold animate-pulse">Thanks for joining us!</p>}
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 py-20">

          {/* Services */}
          <div className="lg:col-span-1">
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">What we fix</h5>
            <ul className="space-y-4">
              {servicesData.slice(0, showAllServices ? servicesData.length : 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.slug}`} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-secondary transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            {servicesData.length > 5 && (
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="mt-6 text-secondary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
              >
                {showAllServices ? (
                  <>See Less <FaChevronUp size={8} /></>
                ) : (
                  <>See More <FaChevronDown size={8} /></>
                )}
              </button>
            )}
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Quick Links</h5>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Latest Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="lg:col-span-1">
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Small Print</h5>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Use', path: '/terms-of-service' },
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

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500 mb-8">Reach out</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span className="text-slate-400 text-sm font-medium leading-relaxed">Caldwell Blvd Nampa, ID 83651, USA</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-secondary" />
                <span className="text-slate-400 text-sm font-medium">info@appliancenerds.shop</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Appliance Nerds. Built for the best service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
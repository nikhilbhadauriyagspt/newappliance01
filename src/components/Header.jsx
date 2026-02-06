import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaTools, FaSnowflake, FaPlug, FaTv, FaCoffee, FaWind, FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan, FaWrench } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Header = () => {
  const { openBookingModal } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isHomePage = location.pathname === '/';

  const servicesList = [
    { name: 'Washing Machine', path: '/service/washing-machine', icon: FaTools, desc: 'Drum & motor repair' },
    { name: 'Refrigerator', path: '/service/refrigerator', icon: FaSnowflake, desc: 'Cooling & compressor fix' },
    { name: 'Dishwasher', path: '/service/dishwasher', icon: FaPlug, desc: 'Pump & leakage repair' },
    { name: 'Television', path: '/service/television', icon: FaTv, desc: 'Display & audio fix' },
    { name: 'Coffee Maker', path: '/service/coffee-maker', icon: FaCoffee, desc: 'Heater & pump service' },
    { name: 'Air Conditioner', path: '/service/air-conditioner', icon: FaWind, desc: 'Gas refilling & PCB fix' },
    { name: 'Microwave Oven', path: '/service/microwave-oven', icon: FaMicrochip, desc: 'Magnetron & panel fix' },
    { name: 'Oven & Gas Stove', path: '/service/oven-stove', icon: FaBurn, desc: 'Burner & ignition repair' },
    { name: 'Water Purifier', path: '/service/water-purifier', icon: FaWater, desc: 'RO filter replacement' },
    { name: 'Clothes Dryer', path: '/service/clothes-dryer', icon: FaTshirt, desc: 'Heating & belt repair' },
    { name: 'Kitchen Chimney', path: '/service/kitchen-chimney', icon: FaFan, desc: 'Deep cleaning & motor fix' },
    { name: 'Other Appliances', path: '/service/other-appliances', icon: FaWrench, desc: 'Mixers, irons & more' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'bg-white shadow-xl py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 group z-[110]">
            <img 
              src="/logo/logo.png" 
              alt="Appliance Vista Logo" 
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Navigation with Background Capsule */}
          <nav className={`hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-500 ${
            scrolled || !isHomePage ? 'bg-gray-100/50' : 'bg-white/10 backdrop-blur-md border border-white/10'
          }`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`px-4 py-2 text-[10px] font-black uppercase tracking-[2px] transition-all relative group ${
                scrolled || !isHomePage ? 'text-gray-900 hover:text-secondary' : 'text-white/90 hover:text-white'
              }`}>
                {link.name}
              </Link>
            ))}

            <div className="relative group h-full">
              <button className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[2px] transition-all cursor-pointer ${
                scrolled || !isHomePage ? 'text-gray-900 hover:text-secondary' : 'text-white/90 hover:text-white'
              }`}>
                Services <FaChevronDown size={8} />
              </button>
              
              <div className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 z-50 overflow-hidden">
                <div className="grid grid-cols-3 p-6 gap-3">
                  {servicesList.map((service, idx) => (
                    <Link key={idx} to={service.path} className="flex flex-col p-4 rounded-2xl hover:bg-gray-50 transition-all group/item border border-transparent hover:border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-primary group-hover/item:bg-secondary group-hover/item:text-white transition-all mb-3">
                        <service.icon size={18} />
                      </div>
                      <h6 className="font-bold text-gray-900 text-[11px] uppercase tracking-wide group-hover/item:text-secondary">{service.name}</h6>
                      <p className="text-[9px] text-gray-400 mt-1 line-clamp-1">{service.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-3 ${scrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20"><FaPhoneAlt size={14} /></div>
              <div>
                <p className={`text-[8px] font-black uppercase tracking-widest ${scrolled || !isHomePage ? 'opacity-40' : 'opacity-60'}`}>Call Now</p>
                <p className="text-sm font-black">+1 (234) 567-890</p>
              </div>
            </div>
            <button 
              onClick={() => openBookingModal()}
              className={`px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-[2px] transition-all shadow-lg active:scale-95 ${
                scrolled || !isHomePage ? 'bg-primary text-white hover:bg-secondary' : 'bg-white text-primary hover:bg-secondary hover:text-white'
              }`}
            >Free Quote</button>
          </div>

          {/* Toggle Button - Force High Z-Index */}
          <button 
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center relative z-[120] ${
              scrolled || !isHomePage ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'
            }`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] bg-gray-900 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">
          <div className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-3xl font-black text-white uppercase tracking-tighter hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10">
             <p className="text-secondary font-black uppercase tracking-[3px] text-[10px] mb-6">Our Services</p>
             <div className="grid grid-cols-1 gap-4">
                {servicesList.map((s, i) => (
                  <Link 
                    key={i} 
                    to={s.path} 
                    className="text-white/70 hover:text-white py-1 uppercase font-bold text-xs tracking-widest flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {s.name}
                  </Link>
                ))}
             </div>
          </div>
          
          <div className="mt-auto pt-10">
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-3 text-white mb-8 bg-white/5 py-4 rounded-xl border border-white/10"
            >
              <FaPhoneAlt className="text-secondary" />
              <span className="font-bold">+1 (234) 567-890</span>
            </a>
            <button 
              onClick={() => {
                openBookingModal();
                setIsMenuOpen(false);
              }} 
              className="w-full bg-secondary text-white py-5 rounded-xl text-center font-black uppercase tracking-widest text-sm shadow-2xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
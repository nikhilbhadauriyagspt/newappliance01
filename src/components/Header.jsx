import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes, FaWrench, FaChevronDown, FaTools, FaSnowflake, FaPlug, FaTv, FaCoffee, FaWind, FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan } from 'react-icons/fa';
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
  }, [location]);

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
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled || !isHomePage ? 'bg-primary text-white' : 'bg-white text-primary'
            } shadow-lg group-hover:bg-secondary group-hover:text-white`}>
              <FaWrench size={18} />
            </div>
            <div className="flex flex-col">
              <span className={`font-logo font-black text-2xl tracking-tighter leading-none transition-colors duration-300 ${
                scrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}>
                Felona<span className="text-secondary">Repair</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`px-4 py-2 text-[11px] font-black uppercase tracking-[2px] transition-all relative group ${
                scrolled || !isHomePage ? 'text-gray-700 hover:text-secondary' : 'text-white/90 hover:text-white'
              }`}>
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}

            <div className="relative group h-full">
              <button className={`flex items-center gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-[2px] transition-all cursor-pointer ${
                scrolled || !isHomePage ? 'text-gray-700 hover:text-secondary' : 'text-white/90 hover:text-white'
              }`}>
                Services <FaChevronDown size={8} />
              </button>
              
              <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 z-50 overflow-hidden">
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
            <div className={`flex items-center gap-3 ${scrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}>
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20"><FaPhoneAlt size={14} /></div>
              <div>
                <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Call Now</p>
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

          <button className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center ${scrolled || !isHomePage ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[-1] bg-gray-900/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="block text-2xl font-black text-white uppercase mb-4">{link.name}</Link>
          ))}
          <div className="pt-8 border-t border-white/10">
             <p className="text-secondary font-black uppercase tracking-[3px] text-xs mb-4">Our Services</p>
             <div className="grid grid-cols-1 gap-2">
                {servicesList.map((s, i) => (
                  <Link key={i} to={s.path} className="text-white/70 hover:text-white py-1 uppercase font-bold text-xs tracking-widest">{s.name}</Link>
                ))}
             </div>
          </div>
          <div className="mt-auto pt-10">
            <button onClick={() => openBookingModal()} className="w-full bg-secondary text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest text-sm shadow-xl block">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
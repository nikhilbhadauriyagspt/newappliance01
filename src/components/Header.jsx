import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaSearch, FaBars, FaTimes, FaChevronDown, FaTools, FaSnowflake, FaPlug, FaTv, FaCoffee, FaWind, FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan, FaWrench, FaMapMarkerAlt, FaWhatsapp, FaUserCheck } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Header = () => {
  const { openBookingModal } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setSearchActive(false);
    setSearchQuery('');
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    { name: 'Washing Machine', path: '/service/washing-machine', icon: FaTools, color: 'text-blue-500' },
    { name: 'Refrigerator', path: '/service/refrigerator', icon: FaSnowflake, color: 'text-cyan-500' },
    { name: 'Dishwasher', path: '/service/dishwasher', icon: FaPlug, color: 'text-indigo-500' },
    { name: 'Television', path: '/service/television', icon: FaTv, color: 'text-purple-500' },
    { name: 'Coffee Maker', path: '/service/coffee-maker', icon: FaCoffee, color: 'text-amber-700' },
    { name: 'Air Conditioner', path: '/service/air-conditioner', icon: FaWind, color: 'text-sky-400' },
    { name: 'Microwave', path: '/service/microwave-oven', icon: FaMicrochip, color: 'text-slate-500' },
    { name: 'Oven & Stove', path: '/service/oven-stove', icon: FaBurn, color: 'text-orange-600' },
    { name: 'Water Purifier', path: '/service/water-purifier', icon: FaWater, color: 'text-blue-400' },
    { name: 'Dryer', path: '/service/clothes-dryer', icon: FaTshirt, color: 'text-pink-500' },
    { name: 'Chimney', path: '/service/kitchen-chimney', icon: FaFan, color: 'text-zinc-600' },
    { name: 'Other Fixes', path: '/service/other-appliances', icon: FaWrench, color: 'text-emerald-500' },
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const results = servicesList.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setSearchActive(true);
    } else {
      setFilteredResults([]);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full fixed top-0 z-[100] transition-all duration-500 font-sans">
      {/* Top Notification Bar - Compliance Cleaned */}
      <div className={`bg-primary text-white overflow-hidden transition-all duration-300 ${scrolled ? 'h-0' : 'h-10'}`}>
        <div className="container mx-auto px-6 h-full flex justify-between items-center text-[11px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Professional Service Appointments Available
            </span>
            <span className="hidden md:flex items-center gap-2 opacity-70">
              <FaMapMarkerAlt /> Serving Glendale, California & Surrounding Regions
            </span>
          </div>
          <div className="flex items-center gap-4">
             <a href="https://wa.me/15305544817" className="flex items-center gap-2 hover:text-secondary transition-colors">
               <FaWhatsapp size={14} className="text-green-400" /> Technical Support
             </a>
          </div>
        </div>
      </div>

      <header className={`w-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-premium py-3' : 'bg-white py-5 border-b border-slate-100'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-8">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-2xl flex items-center justify-center p-2 shadow-inner border border-slate-100">
                <img src="/logo/logo.png" alt="Appliance Vista" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-primary tracking-tighter leading-none uppercase">Appliance<span className="text-secondary">Vista</span></h1>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[3px] mt-1">Professional Repair Services</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="relative px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-primary transition-colors group">
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-6"></span>
                </Link>
              ))}
              <div className="relative group ml-2">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 rounded-full text-[13px] font-bold text-slate-700 hover:bg-white hover:shadow-premium transition-all border border-slate-100 uppercase tracking-wider">
                  Our Services <FaChevronDown size={8} className="group-hover:rotate-180 transition-transform duration-300 text-slate-400" />
                </button>
                <div className="absolute top-full right-1/2 translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
                  <div className="w-[850px] bg-white rounded-[32px] shadow-premium-hover border border-slate-100 p-8 flex gap-8">
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      {servicesList.map((service, idx) => (
                        <Link key={idx} to={service.path} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100">
                          <div className={`w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center ${service.color} group-hover/item:scale-110 transition-transform`}><service.icon size={16} /></div>
                          <span className="text-sm font-semibold text-slate-700 group-hover/item:text-primary uppercase tracking-tight">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="w-64 bg-slate-50 rounded-3xl p-6 flex flex-col">
                       <div className="flex-1">
                          <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Service Standards</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-500"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Skilled Technical Team</li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-500"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Standard Service Warranty</li>
                            <li className="flex items-center gap-2 text-xs font-medium text-slate-500"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Verified Spare Parts</li>
                          </ul>
                       </div>
                       <button onClick={() => openBookingModal()} className="mt-6 w-full py-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-secondary transition-colors shadow-lg uppercase tracking-widest">Request Quote</button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-4 md:gap-6">
              <div ref={searchRef} className={`relative hidden xl:flex items-center transition-all duration-500 ${searchActive ? 'w-64' : 'w-48'}`}>
                <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search services..." className="w-full bg-slate-100/50 border border-slate-200 rounded-full py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all uppercase tracking-wider" onFocus={() => searchQuery && setSearchActive(true)} />
                <FaSearch className="absolute left-4 text-slate-400" size={12} />
                {searchActive && filteredResults.length > 0 && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden z-50">
                    {filteredResults.map((result, idx) => (
                      <Link key={idx} to={result.path} className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0" onClick={() => { setSearchActive(false); setSearchQuery(''); }}>
                        <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center ${result.color}`}><result.icon size={12} /></div>
                        <span className="text-xs font-bold text-slate-700 uppercase">{result.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="hidden md:flex items-center gap-4">
                 <Link to="/contact" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:text-secondary hover:bg-white hover:shadow-sm transition-all border border-slate-100 group"><FaUserCheck size={16} /></Link>
                 <a href="tel:+15305544817" className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Contact Line</span>
                    <span className="text-sm font-black text-primary">+1 530 554 4817</span>
                 </a>
              </div>
              <button onClick={() => openBookingModal()} className="group relative hidden md:flex px-7 py-3.5 bg-secondary text-white text-[11px] font-black uppercase tracking-[2px] rounded-2xl overflow-hidden shadow-xl active:scale-95 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">Book Service <FaWrench /></span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="lg:hidden w-12 h-12 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center gap-1.5 active:scale-90 transition-all shadow-xl" onClick={() => setIsMenuOpen(true)}>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-3 h-0.5 bg-secondary rounded-full ml-auto mr-3.5"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Simplified */}
      <div className={`lg:hidden fixed inset-0 z-[200] bg-primary/20 backdrop-blur-md transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col h-full">
            <div className="p-8 flex justify-between items-center border-b border-slate-50">
               <div>
                 <h2 className="text-2xl font-black text-primary tracking-tighter uppercase">Menu</h2>
                 <p className="text-[10px] font-black text-secondary uppercase tracking-[3px]">Service Navigation</p>
               </div>
               <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100"><FaTimes size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <Link key={i} to={link.path} className="group flex items-center justify-between py-2 text-3xl font-black text-primary/40 hover:text-primary transition-all uppercase" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                ))}
              </div>
            </div>
            <div className="p-8 border-t border-slate-50 bg-slate-50/50">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary"><FaPhoneAlt /></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Support Line</p>
                    <p className="text-lg font-black text-primary">+1 530 554 4817</p>
                  </div>
               </div>
               <button onClick={() => { openBookingModal(); setIsMenuOpen(false); }} className="w-full py-5 bg-primary text-white rounded-[20px] font-black uppercase tracking-[3px] text-xs shadow-2xl">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

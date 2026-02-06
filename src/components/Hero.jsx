import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FaWrench, FaShieldAlt, FaClock, FaCheckCircle, FaTools, FaSnowflake, FaPlug } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Professional Appliance Repair Solutions",
    subtitle: "Qualified Technicians • Scheduled Support",
    description: "Assisting with appliance malfunctions to help maintain your household routine. Our technicians provide diagnostic and repair services for luxury and standard brands.",
    bgImage: "/banner/hero-1.jpg",
    icon: <FaTools className="text-secondary" />,
    stats: { label: "Booking Status", value: "Open" },
    status: "Service slots available"
  },
  {
    id: 2,
    title: "Residential Refrigerator Repair Services",
    subtitle: "Temperature Calibration • Component Repair",
    description: "Addressing cooling inefficiencies and component failures in residential units. We service various refrigerator models to restore standard operation.",
    bgImage: "/banner/hero-2.jpg",
    icon: <FaSnowflake className="text-blue-400" />,
    stats: { label: "Response", value: "Quick" },
    status: "In-home service active"
  },
  {
    id: 3,
    title: "Washing Machine Diagnostic Services",
    subtitle: "Mechanical Repair • Technical Maintenance",
    description: "Maintenance for front-loading and top-loading machines. We address motor, drainage, and electronic control issues using standard industry tools.",
    bgImage: "/banner/hero-3.jpg",
    icon: <FaPlug className="text-primary" />,
    stats: { label: "Availability", value: "Daily" },
    status: "Bookings subject to slot"
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();
  return (
    <section id="home" className="relative h-[90vh] lg:min-h-screen bg-[#05070a] overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex items-center">
              
              <div className="absolute inset-0 z-0">
                <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover opacity-30 swiper-bg-image" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
              </div>

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
                  
                  <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <div className="hero-element inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-6 lg:mb-8">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                      <span className="text-white/70 text-[9px] md:text-[11px] font-bold uppercase tracking-[2px]">{slide.subtitle}</span>
                    </div>

                    <h1 className="hero-element text-2xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 lg:mb-6 leading-[1.3] lg:leading-[1.1] tracking-tight">
                      {slide.title}
                    </h1>

                    <p className="hero-element text-xs md:text-xl text-gray-400 font-light mb-6 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="hero-element flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 lg:mb-12">
                      <button onClick={() => openBookingModal()} className="w-full sm:w-auto px-6 py-3 bg-secondary text-white font-bold uppercase tracking-wider text-[11px] lg:text-sm rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl">
                         <FaWrench /> Request Service
                      </button>
                      <a href="#services" className="w-full sm:w-auto px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase tracking-wider text-[11px] lg:text-sm rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
                        View Solutions
                      </a>
                    </div>

                    <div className="hero-element flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8 text-gray-500">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="text-secondary text-lg lg:text-xl" />
                        <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-white/50">Service Warranty Coverage</span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-white/10"></div>
                      <div className="flex items-center gap-3">
                        <FaClock className="text-secondary text-lg lg:text-xl" />
                        <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-white/50">Support Availability</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-full lg:w-2/5 relative justify-center items-center">
                    <div className="hero-element-visual relative w-72 h-72 md:w-96 md:h-96">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[60px] animate-spin-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-6xl shadow-2xl relative z-10">
                          {slide.icon}
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 md:top-10 md:-right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20 animate-float">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter text-left">Service Status</p>
                            <p className="text-xs text-white font-medium whitespace-nowrap">{slide.status}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-secondary/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl z-20 animate-float-delayed text-left">
                        <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">{slide.stats.label}</p>
                        <p className="text-2xl text-white font-black">{slide.stats.value}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-swiper .swiper-pagination { bottom: 40px !important; left: 6% !important; text-align: left !important; }
        .custom-bullet { width: 30px !important; height: 3px !important; border-radius: 0 !important; background: rgba(255, 255, 255, 0.1) !important; opacity: 1 !important; margin: 0 6px !important; transition: all 0.4s ease !important; }
        .custom-bullet.swiper-pagination-bullet-active { background: #FF6600 !important; width: 50px !important; }
        .hero-element { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
        .swiper-slide-active .hero-element { opacity: 1; transform: translateY(0); }
        .swiper-slide-active .hero-element:nth-child(1) { transition-delay: 0.2s; }
        .swiper-slide-active .hero-element:nth-child(2) { transition-delay: 0.4s; }
        .swiper-slide-active .hero-element:nth-child(3) { transition-delay: 0.6s; }
        .swiper-slide-active .hero-element:nth-child(4) { transition-delay: 0.8s; }
        .swiper-slide-active .hero-element:nth-child(5) { transition-delay: 1s; }
        .hero-element-visual { opacity: 0; transform: scale(0.8) rotate(-5deg); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s; }
        .swiper-slide-active .hero-element-visual { opacity: 1; transform: scale(1) rotate(0); }
        .swiper-bg-image { transform: scale(1.1); transition: transform 10s ease-out; }
        .swiper-slide-active .swiper-bg-image { transform: scale(1); }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </section>
  );
};

export default Hero;
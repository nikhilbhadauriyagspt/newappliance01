import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FaArrowRight, FaPhoneAlt, FaTools, FaSnowflake, FaMicrochip, FaCogs, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "PROFESSIONAL HOME APPLIANCE REPAIR",
    subtitle: "TECHNICAL SERVICE DIVISION",
    bgImage: "/banner/hero-1.jpg",
    cta: "REQUEST SERVICE",
    specs: ["SERVICE WARRANTY", "VERIFIED SPARE PARTS", "SCHEDULED VISITS"],
    cardInfo: {
      title: "Diagnostic Audit",
      desc: "Comprehensive technical assessment of household appliances by our skilled technical team.",
      code: "SERVICE-UNIT: A1",
      icon: <FaTools />,
      progress: "w-full",
      status: "Ready for Dispatch"
    }
  },
  {
    id: 2,
    title: "REFRIGERATOR COOLING SOLUTIONS",
    subtitle: "TECHNICAL MAINTENANCE TEAM",
    bgImage: "/banner/hero-2.jpg",
    cta: "SCHEDULE FIX",
    specs: ["GAS REFILLING", "COMPRESSOR REPAIR", "RESIDENTIAL SERVICE"],
    cardInfo: {
      title: "Thermal Analysis",
      desc: "Temperature calibration and technical pressure verification for cooling systems.",
      code: "COOL-UNIT: B2",
      icon: <FaSnowflake />,
      progress: "w-4/5",
      status: "Verified Protocol"
    }
  },
  {
    id: 3,
    title: "WASHING MACHINE REPAIR SERVICE",
    subtitle: "LAUNDRY APPLIANCE DIVISION",
    bgImage: "/banner/hero-3.jpg",
    cta: "BOOK APPOINTMENT",
    specs: ["PCB BOARD FIX", "DRUM CALIBRATION", "MOTOR RESTORATION"],
    cardInfo: {
      title: "System Testing",
      desc: "Mechanical performance verification and electronic diagnostic testing for laundry units.",
      code: "WASH-SYS: C3",
      icon: <FaCogs />,
      progress: "w-3/4",
      status: "Logic Confirmed"
    }
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="home" className="relative h-[85vh] lg:h-[95vh] w-full bg-[#020617] overflow-hidden font-sans">
      
      <div className="absolute inset-0 pointer-events-none z-30 opacity-30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary/20 animate-scan pointer-events-none"></div>
        <div className="absolute left-8 top-1/2 -rotate-90 origin-left hidden xl:block">
           <span className="text-[9px] font-black tracking-[6px] text-white/30 uppercase">TECHNICAL INTERFACE</span>
        </div>
        <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-white/20"></div>
        <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-white/20"></div>
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-white/20"></div>
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-white/20"></div>
      </div>

      <Swiper
        spaceBetween={0}
        effect={'fade'}
        loop={true}
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex items-center">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover" />
              </div>

              <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                  
                  <div className="w-full lg:w-[60%] text-center lg:text-left">
                    <div className="hero-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
                      <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-lg mb-6 backdrop-blur-sm">
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">{slide.subtitle}</span>
                      </div>

                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1] uppercase drop-shadow-xl">
                        {slide.title}
                      </h1>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mb-12">
                        {slide.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <FaCheckCircle className="text-secondary text-[10px]" />
                            <span className="text-white/70 font-bold text-[10px] uppercase tracking-[2px]">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <button onClick={() => openBookingModal()} className="group relative px-10 py-4 bg-secondary text-white font-black uppercase tracking-[3px] text-[11px] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all active:scale-95">
                          <span className="relative z-10 flex items-center gap-3">{slide.cta} <FaArrowRight size={10} /></span>
                          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                        <a href="tel:+15305544817" className="flex items-center gap-4 text-white hover:text-secondary transition-all">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"><FaPhoneAlt size={16} /></div>
                           <div className="text-left leading-none">
                              <span className="block text-[9px] font-black text-white/40 uppercase tracking-[1px] mb-1.5">Direct Line</span>
                              <span className="block text-xl font-black tracking-tight">+1 (530) 554-4817</span>
                           </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-full lg:w-[40%]">
                    <div className="hero-card opacity-0 translate-x-8 transition-all duration-1000 delay-300">
                       <div className="relative p-10 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0"></div>
                          <div className="relative z-10">
                             <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-[20px] bg-primary flex items-center justify-center text-secondary text-2xl shadow-lg">{slide.cardInfo.icon}</div>
                                <div className="text-right">
                                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-[2px] mb-1">{slide.cardInfo.code}</p>
                                </div>
                             </div>
                             <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-tighter">{slide.cardInfo.title}</h3>
                             <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8">{slide.cardInfo.desc}</p>
                             <div className="space-y-5">
                                <div className="flex justify-between items-end mb-1.5">
                                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{slide.cardInfo.status}</span>
                                   <FaMicrochip className="text-secondary animate-pulse" size={12} />
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                                   <div className={`h-full bg-secondary rounded-full ${slide.cardInfo.progress} transition-all duration-[2s] delay-500`}></div>
                                </div>
                             </div>
                          </div>
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
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 5s linear infinite; }
        .hero-swiper .swiper-pagination { bottom: 40px !important; display: flex !important; gap: 12px !important; justify-content: center !important; }
        @media (min-width: 1024px) { .hero-swiper .swiper-pagination { left: 15% !important; justify-content: flex-start !important; transform: none !important; } }
        .custom-bullet { width: 45px !important; height: 3px !important; background: rgba(255, 255, 255, 0.15) !important; opacity: 1 !important; margin: 0 !important; transition: all 0.5s ease !important; cursor: pointer !important; }
        .custom-bullet.swiper-pagination-bullet-active { background: #2563eb !important; width: 80px !important; }
        .swiper-slide-active .hero-element { opacity: 1; transform: translateY(0); }
        .swiper-slide-active .hero-card { opacity: 1; transform: translateX(0); }
      `}} />
    </section>
  );
};

export default Hero;
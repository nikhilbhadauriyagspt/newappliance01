import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  FaTools, FaSnowflake, FaTv, FaCoffee, FaPlug, FaWind, 
  FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan, FaArrowRight,
  FaShieldAlt, FaClock, FaCheckCircle
} from 'react-icons/fa';

const iconMap = {
  FaTools: FaTools,
  FaSnowflake: FaSnowflake,
  FaTv: FaTv,
  FaCoffee: FaCoffee,
  FaPlug: FaPlug,
  FaWind: FaWind,
  FaMicrochip: FaMicrochip,
  FaBurn: FaBurn,
  FaWater: FaWater,
  FaTshirt: FaTshirt,
  FaFan: FaFan
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Page Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        {/* Decorative background number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                       <span className="text-[30vw] font-black text-white leading-none">NERDS</span>        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Service Directory</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Professional <br />Repair <span className="text-secondary">Solutions</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Precision maintenance for high-end residential and commercial equipment. Delivering technical perfection across all categories.
          </p>
        </div>
      </section>

      {/* Services Grid with Modern Cards */}
      <section className="py-32 bg-slate-50 relative -mt-16 rounded-t-[60px] z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName] || FaTools;
              return (
                <Link 
                  key={service.id} 
                  to={`/service/${service.slug}`}
                  className="group bg-white rounded-[48px] p-10 border border-slate-100 hover:shadow-premium transition-all duration-700 flex flex-col h-[500px] relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {/* Hover Image Reveal */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                     <img src={service.image} className="w-full h-full object-cover" alt="" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 mb-10 shadow-inner">
                      <Icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-primary mb-6 leading-none group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                      {service.shortDesc}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-[3px] text-primary group-hover:gap-6 flex items-center gap-3 transition-all">
                        Master Service <FaArrowRight className="text-secondary" />
                      </span>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-secondary/30"></div>)}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-8">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
               <span className="text-xl font-black tracking-widest italic">SAMSUNG CARE</span>
               <span className="text-xl font-black tracking-widest">LG CERTIFIED</span>
               <span className="text-xl font-black tracking-widest uppercase">Bosch Expert</span>
               <span className="text-xl font-black tracking-widest italic">MAYTAG DEPOT</span>
            </div>
         </div>
      </section>

      {/* Interactive Contact Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-[60px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                  UNRESOLVED <br /><span className="text-secondary">APPLIANCE ISSUES?</span>
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-secondary" />
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Immediate Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-secondary" />
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Factory Parts</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="px-12 py-6 bg-secondary text-white rounded-[24px] font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-white hover:text-secondary transition-all active:scale-95 text-center whitespace-nowrap"
              >
                Launch Request &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
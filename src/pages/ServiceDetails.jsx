import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock, FaArrowRight, FaCogs, FaClipboardList, FaSearch, FaWrench, FaMicrochip } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.slug === id || s.id === parseInt(id));
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <Helmet>
           <title>Service Not Found - Appliance Vista</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-6xl font-black text-primary mb-6 tracking-tighter uppercase">404</h2>
          <p className="text-slate-500 mb-8 font-medium uppercase tracking-widest">Technical Path Not Found</p>
          <Link to="/" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[3px] text-xs hover:bg-secondary transition-all shadow-xl">
            Return to Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>{service.title} - Appliance Vista Services</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://www.appliancevista.shop/service/${service.slug}`} />
      </Helmet>
      
      {/* Dynamic Hero Header */}
      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
           <Link to="/services" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[3px] text-[10px] mb-10 hover:gap-5 transition-all">
             <FaArrowLeft /> View All Solutions
           </Link>
           <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
             {service.title.split(' ').map((word, i) => i === service.title.split(' ').length - 1 ? <span key={i} className="text-secondary">{word}</span> : word + ' ')}
           </h1>
           <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
             {service.shortDesc}
           </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 relative -mt-16 bg-white rounded-t-[60px] z-20">
        <div className="flex flex-col lg:flex-row gap-24 items-start mb-32">
          
          {/* Visual Asset */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-6 border-2 border-slate-50 rounded-[4rem] pointer-events-none"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium">
                <img 
                  src={service.image} 
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50 hidden md:block max-w-xs">
                 <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg">
                       <FaShieldAlt size={24} />
                    </div>
                    <div>
                       <h5 className="text-primary font-black text-sm uppercase tracking-widest leading-none">100% Quality Assurance</h5>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Technical Protocol Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
               <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Protocol: Certified Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight tracking-tighter uppercase">
              Operational <span className="text-secondary">Summary</span>
            </h2>
            
            <div className="prose prose-lg text-slate-500 font-medium mb-12 max-w-none">
              <p className="leading-relaxed">{service.longDesc}</p>
            </div>
            
            <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100 mb-12">
              <h5 className="font-black text-xl text-primary mb-8 tracking-tighter uppercase flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white"><FaTools size={14} /></div>
                Service Benchmarks
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-primary font-black text-[11px] uppercase tracking-wider group-hover:text-secondary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                onClick={() => openBookingModal(service.title)}
                className="w-full sm:w-auto bg-primary text-white px-12 py-6 rounded-[24px] font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-secondary transition-all active:scale-95 flex items-center justify-center gap-4"
              >
                Execute Booking <FaArrowRight />
              </button>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-secondary">
                    <FaRegClock />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Arrival Window</span>
                    <span className="text-sm font-black text-primary leading-none">Under 2.0 Hours</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: Technical Workflow */}
        <div className="mb-32">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter uppercase">Standard Repair <span className="text-secondary">Protocol</span></h3>
              <p className="text-slate-500 font-medium">Our systematic approach ensures diagnosis accuracy and repair longevity.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <FaClipboardList />, title: "Initial Audit", desc: "Digital logging of error codes and symptom analysis." },
                { icon: <FaSearch />, title: "Deep Diagnostic", desc: "Component-level testing using calibrated industrial tools." },
                { icon: <FaWrench />, title: "Precision Fix", desc: "Replacement of failed units with OEM certified parts." },
                { icon: <FaCheckCircle />, title: "Final Calibration", desc: "Performance stress-testing before job closure." }
              ].map((step, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-premium transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                      {step.icon}
                   </div>
                   <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black text-slate-300">0{i+1}</span>
                      <h4 className="text-sm font-black text-primary uppercase tracking-wider">{step.title}</h4>
                   </div>
                   <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* New Section: Component Analysis */}
        <div className="bg-primary rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden mb-32">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2"></div>
           
           <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                 <div>
                    <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/10">
                       <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Scope of Work</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Multi-Point <br /><span className="text-secondary">System Inspection</span></h3>
                 </div>
                 <p className="text-slate-400 max-w-sm font-medium text-sm leading-relaxed">
                    We don't just fix the obvious. Our technicians perform a comprehensive health check on critical subsystems.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   "Main Logic Control Board", "Motor Drive Assembly", "Power Supply Unit", 
                   "Sensor Network Array", "Fluid/Gas Integrity", "Mechanical Linkages",
                   "Thermal Regulation", "Safety Interlocks", "User Interface Panel"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all">
                      <FaMicrochip className="text-secondary" />
                      <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* New Section: Guarantee */}
        <div className="text-center max-w-4xl mx-auto">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 text-secondary rounded-full mb-8 animate-pulse">
              <FaShieldAlt size={32} />
           </div>
           <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 tracking-tighter uppercase">The VISTA® Guarantee</h3>
           <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              We stand firmly behind our engineering. All technical labor is backed by a 30-day warranty, and replaced components carry a manufacturer warranty of up to 90 days.
           </p>
           <button 
             onClick={() => openBookingModal(service.title)}
             className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-[3px] text-xs shadow-xl hover:bg-primary transition-all"
           >
             Schedule Inspection
           </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;

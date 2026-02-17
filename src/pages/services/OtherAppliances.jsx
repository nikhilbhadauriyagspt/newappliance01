import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock, FaArrowRight, FaClipboardList, FaSearch, FaWrench, FaMicrochip } from 'react-icons/fa';
import { useBooking } from '../../context/BookingContext';

const OtherAppliances = () => {
  const { openBookingModal } = useBooking();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Helmet>
        <title>General Appliance Repair | Multi-Brand Maintenance | Appliance Nerds</title>
        <meta name="description" content="Professional repair for all household appliances. We fix small kitchen assets, home utility machines, and more. Certified technicians & genuine parts. Book now!" />
      </Helmet>

      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[3px] text-[10px] mb-10 hover:gap-5 transition-all">
            <FaArrowLeft /> All Repair Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Miscellaneous <span className="text-secondary">Systems Repair</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Specialized Specialized support for various domestic electronic assets. From small kitchen gadgets to complex home utility equipment.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 relative -mt-16 bg-white rounded-t-[60px] z-20">
        <div className="flex flex-col lg:flex-row gap-24 items-start mb-32">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-6 border-2 border-slate-50 rounded-[4rem] pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium">
                <img src="/service-6.jpg" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="General Repair" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50 hidden md:block max-w-xs">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm">
                      <FaShieldAlt size={20} />
                    </div>
                    <p className="text-primary font-black text-sm leading-tight tracking-tight uppercase">Specialized Logic <br />Certified</p>
                  </div>
                  <div className="h-px bg-slate-100 w-full"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                      <FaTools size={20} />
                    </div>
                    <p className="text-primary font-black text-sm leading-tight tracking-tight uppercase">Global OEM <br />Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight tracking-tighter uppercase">
              Domestic <span className="text-secondary">Asset</span> Restoration
            </h2>
            <div className="prose prose-lg text-slate-500 font-medium mb-12 max-w-none space-y-6">
              <p>We provide a wide-spectrum diagnostic framework for various household appliances not covered in standard categories. Our technicians utilize universal diagnostic tools to restore mechanical and electrical functionality.</p>
              <p>Certified for a vast range of domestic brands, ensuring every specialized asset in your home receives professional care.</p>
              <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 mt-12">
                <h3 className="text-primary font-black text-2xl mb-8 tracking-tighter uppercase">Specialized Scope</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Small Motor Repair", "Electronic PCB Fix", "Heating Element Check", "Wiring Harness Restore", "Switch & UI Repair", "General Safety Scan"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-primary font-black text-[11px] uppercase tracking-wider group-hover:text-secondary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button onClick={() => openBookingModal('Other Appliances')} className="w-full sm:w-auto bg-primary text-white px-12 py-6 rounded-[24px] font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-secondary transition-all active:scale-95 flex items-center justify-center gap-4">
                Schedule Repair <FaArrowRight />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-secondary"><FaRegClock /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Standard Arrival</span>
                  <span className="text-sm font-black text-primary leading-none">Under 3 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter uppercase">Universal Repair <span className="text-secondary">Protocol</span></h3>
            <p className="text-slate-500 font-medium">Systematic approach to varied domestic asset engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaClipboardList />, title: "Specialized Audit", desc: "Initial symptom logging and load-capacity analysis." },
              { icon: <FaSearch />, title: "Logic Diagnostic", desc: "Verifying circuit continuity and component resistance." },
              { icon: <FaWrench />, title: "Precision Fix", desc: "Replacement of failed units with compatible parts." },
              { icon: <FaCheckCircle />, title: "Safety Test", desc: "Final grounding and thermal stability verification." }
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-premium transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all">{step.icon}</div>
                <h4 className="text-sm font-black text-primary uppercase tracking-wider mb-3">{step.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">Universal <br /><span className="text-secondary">Component Integrity Check</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Drive Motor Windings", "Heating Element Loop", "Logic Control Unit", "Power Input Harness", "Safety Interlocks", "Thermostat Switches", "Capacitor Startup", "Bearing & Bushing Array", "User Interface Module"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all">
                  <FaMicrochip className="text-secondary" />
                  <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 text-secondary rounded-full mb-8 animate-pulse"><FaShieldAlt size={32} /></div>
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-6 tracking-tighter uppercase">Professional Asset Guarantee</h3>
          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">Every appliance repair, regardless of category, includes our Specialized seal of approval and a 30-day labor warranty.</p>
          <button onClick={() => openBookingModal('Other Appliances')} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-[3px] text-xs shadow-xl hover:bg-primary transition-all">Book Specialized Visit</button>
        </div>
      </div>
    </div>
  );
};

export default OtherAppliances;
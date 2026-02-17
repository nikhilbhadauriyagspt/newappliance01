import React from 'react';
import { FaCheckCircle, FaUserCheck, FaShieldAlt, FaAward } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

          <div className="w-full lg:w-1/2" data-aos="fade-up">
            <div className="relative group">
              <div className="absolute -inset-6 border-2 border-slate-50 rounded-[4rem] pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative rounded-[3rem] md:rounded-[80px] overflow-hidden shadow-soft">
                <img src="/banner/about.jpg" className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-[2s]" alt="Professional Technical Division" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>

                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-soft border border-white/20 text-center">
                  <p className="text-4xl font-black text-secondary leading-none uppercase">Fix</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[2px] mt-2">Technical Standards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-5 py-2 rounded-2xl mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-secondary text-[10px] font-bold uppercase tracking-[3px]">Service Mission</span>
            </div>

            <h2 className="text-[2.8rem] font-black text-primary mb-8 leading-[1.1] tracking-tighter uppercase">
              Professional Solutions For <span className="text-secondary">Appliance Maintenance</span>
            </h2>

            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              We provide systematic technical support for residential appliances. Our division focuses on delivering professional-grade maintenance and repair protocols for essential home equipment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: 'Skilled Technicians',
                  desc: 'A technical team trained in modern appliance diagnostics and repair.',
                  icon: <FaUserCheck />
                },
                {
                  title: 'Safety Standards',
                  desc: 'Adherence to electrical and mechanical safety compliance protocols.',
                  icon: <FaShieldAlt />
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-5 shadow-inner">
                    {item.icon}
                  </div>
                  <h5 className="font-black text-primary text-sm uppercase tracking-widest mb-3 leading-none">{item.title}</h5>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10 pt-10 border-t border-slate-50">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-[4px] text-xs shadow-xl hover:bg-secondary transition-all active:scale-95"
              >
                Learn Our Process
              </button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"></div>)}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
                  Professional <span className="text-primary font-black uppercase">Service Network</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
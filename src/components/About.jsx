import React from 'react';
import { FaCheckCircle, FaUserCheck, FaShieldAlt, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
                <img src="/banner/about.jpg" className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-[2s]" alt="Our Repair Team" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>

                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-soft border border-white/20 text-center">
                  <p className="text-4xl font-black text-secondary leading-none uppercase">Fix</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[2px] mt-2">Quality Work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-5 py-2 rounded-2xl mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-secondary text-[10px] font-bold uppercase tracking-[3px]">Our Mission</span>
            </div>

            <h2 className="text-[2.8rem] font-black text-primary mb-8 leading-[1.1] tracking-tighter uppercase">
              Reliable Help For <span className="text-secondary">Your Home Appliances</span>
            </h2>

            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              We provide simple and fast help for your home appliances. Our team focuses on giving you great service and solid repairs for all your important equipment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: 'Expert Team',
                  desc: 'A friendly team trained to find and fix any appliance problem.',
                  icon: <FaUserCheck />
                },
                {
                  title: 'Safe Repairs',
                  desc: 'We follow all safety rules to make sure your home stays safe.',
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
              <Link
                to="/about"
                className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-[4px] text-xs shadow-xl hover:bg-secondary transition-all active:scale-95 text-center"
              >
                See how we work
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
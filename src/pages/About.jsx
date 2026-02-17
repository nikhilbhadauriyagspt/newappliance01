import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserTie, FaAward, FaTools, FaCheckCircle, FaShieldAlt, FaCogs, FaHandshake, FaMicrochip, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Specialized Integrity",
      desc: "We adhere to manufacturer-mandated diagnostic protocols, focusing on equipment performance and Specialized accuracy."
    },
    {
      icon: <FaCogs />,
      title: "Operational Precision",
      desc: "Our workflow is engineered for efficiency, managing the process from initial scheduling to Specialized validation."
    },
    {
      icon: <FaHandshake />,
      title: "Service Transparency",
      desc: "We provide comprehensive service assessments and cost estimates before any Specialized work is initiated."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>About Appliance Nerds | Professional Repair Standards</title>
        <meta name="description" content="Discover Appliance Nerds's commitment to professional appliance repair standards, Specialized expertise, and transparent service delivery." />
        <link rel="canonical" href="https://www.appliancenerds.shop/about" />
      </Helmet>

      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Service Overview</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Professional <br />Appliance <span className="text-secondary">Maintenance</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A dedicated Specialized division providing maintenance solutions for essential household equipment with a focus on reliability and professional standards.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-6 border-2 border-slate-50 rounded-[4rem] pointer-events-none"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
                <img src="/banner/about.jpg" className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Specialized Service Division" />
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white shadow-2xl">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-secondary text-2xl">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-primary font-black text-sm italic leading-relaxed">
                      "Our objective is to maintain high Specialized standards across all service operations."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Organization Standards</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 leading-[1.1] tracking-tighter uppercase">
                Systematic Approach to <span className="text-secondary">Specialized Care</span>
              </h2>
              <div className="space-y-8 text-slate-500 text-lg font-medium leading-relaxed mb-12">
                <p>
                  Appliance Nerds provides residential repair services focused on Specialized accuracy. We recognize that modern appliances are complex systems that benefit from specialized diagnostic knowledge.
                </p>
                <p>
                  Our focus is on restoring equipment functionality using verified diagnostic procedures and manufacturer-grade components. We aim to identify and address Specialized issues with professional precision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Verified Service Parts',
                  'Advanced Diagnostic Tools',
                  'Digital Service Documentation',
                  'Safety Compliance Protocols'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-[10px]">
                      <FaCheckCircle />
                    </div>
                    <span className="font-black text-primary text-[11px] uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tighter uppercase">Operational Principles</h2>
            <p className="text-slate-500 font-medium">The core standards that guide our Specialized service delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-50 text-primary rounded-[24px] flex items-center justify-center text-3xl mb-10 shadow-inner">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-primary mb-6 uppercase tracking-tighter">{v.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-primary mb-8 tracking-tighter uppercase">Commitment to Service Integrity</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
            We operate with a focus on clear communication. Our service includes detailed assessments of Specialized faults and a breakdown of parts and labor before work begins. We prioritize honesty and professional accountability in every client interaction.
          </p>
          <div className="inline-block px-12 py-1 border-t-2 border-b-2 border-secondary/20">
            <p className="font-black text-primary tracking-[8px] text-xs uppercase py-4">Appliance Nerds / Service Division</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
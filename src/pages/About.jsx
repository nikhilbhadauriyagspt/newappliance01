import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserTie, FaAward, FaTools, FaCheckCircle, FaShieldAlt, FaCogs, FaHandshake, FaMicrochip } from 'react-icons/fa';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Technical Integrity",
      desc: "We adhere to manufacturer-recommended diagnostic and repair protocols to ensure the longevity of your equipment."
    },
    {
      icon: <FaCogs />,
      title: "Operational Excellence",
      desc: "Our workflow is designed for efficiency, from the initial service request to the final quality inspection."
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Communication",
      desc: "We provide clear, upfront technical assessments and cost estimates before any repair work commences."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Appliance Vista | Professional Repair Standards</title>
        <meta name="description" content="Discover Appliance Vista's commitment to professional appliance repair standards, technical expertise, and transparent service delivery." />
        <link rel="canonical" href="https://www.appliancevista.shop/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-primary py-32 lg:py-48 overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h6 className="text-secondary font-bold uppercase tracking-[4px] text-sm mb-6">Our Identity</h6>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">About Appliance Vista</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Establishing higher standards in household appliance maintenance through technical precision and professional accountability.
            </p>
         </div>
      </div>

      {/* Corporate Philosophy */}
      <div className="container mx-auto px-4 py-24 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <img src="/banner/about.jpg" className="rounded-[3rem] shadow-2xl w-full h-[400px] lg:h-[600px] object-cover" alt="Technical Workshop" />
                <div className="absolute -bottom-10 -right-1 lg:right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 hidden md:block">
                   <div className="flex items-center gap-6">
                      <div className="text-secondary text-4xl font-black">STND</div>
                      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-tight">Industry <br/> Standard <br/> Compliant</div>
                   </div>
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
             <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Objective</h6>
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">A Professional Approach to Technical Challenges</h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Appliance Vista was founded on the principle that household repairs should be handled with the same level of precision as industrial maintenance. We recognize that modern appliances are complex electronic systems that require specialized knowledge and calibrated tools for effective servicing.
                </p>
                <p>
                  Our organization focuses on bridging the gap between appliance failure and long-term functional restoration. By employing experienced technical personnel and utilizing genuine replacement components, we aim to deliver results that meet or exceed original equipment manufacturer (OEM) specifications.
                </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
               {['OEM Standard Parts', 'Advanced Diagnostics', 'Protocol-Driven Service', 'Technical Documentation'].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                   <FaCheckCircle className="text-secondary" />
                   <span className="font-bold text-gray-700 text-sm">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Competencies</h2>
            <p className="text-gray-500">The pillars that define our service delivery and technical operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Standards */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-8">Technical Proficiency</h2>
                 <p className="text-white/70 text-lg mb-10 leading-relaxed">
                   Our technical team undergoes continuous training to stay updated with the latest advancements in appliance technology. Whether it's the latest Smart TV display panels, high-efficiency inverter compressors in refrigerators, or complex PCB circuits in washing machines, we have the tools and expertise to perform detailed diagnostics.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold">01</div>
                       <p className="font-bold">Comprehensive system health audits with every repair.</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold">02</div>
                       <p className="font-bold">Strict adherence to safety and electrical compliance standards.</p>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: <FaUserTie />, label: "Experienced Staff" },
                   { icon: <FaTools />, label: "Calibrated Tools" },
                   { icon: <FaAward />, label: "Standardized Testing" },
                   { icon: <FaMicrochip />, label: "Component Level Fix" }
                 ].map((box, i) => (
                   <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center hover:bg-white/20 transition-all">
                      <div className="text-3xl text-secondary mb-4 flex justify-center">{box.icon}</div>
                      <p className="font-bold text-sm uppercase tracking-wider leading-tight">{box.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Operational Transparency */}
      <div className="container mx-auto px-4 pb-24">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Transparency</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              We believe that trust is built through consistency and honest service. Appliance Vista ensures that every client receives a detailed explanation of the appliance fault, the proposed solution, and a breakdown of the parts and labor required. We do not engage in hidden fees or unverifiable service claims.
            </p>
            <div className="inline-block border-b-2 border-secondary pb-2">
               <p className="font-heading font-black text-gray-900 tracking-tighter text-2xl">Appliance <span className="text-secondary">Vista</span></p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
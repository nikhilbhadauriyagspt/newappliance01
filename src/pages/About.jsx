import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserTie, FaAward, FaHistory, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Felona Appliance Repair</title>
        <meta name="description" content="Learn about Felona Repair, our professional approach to appliance maintenance and repair services." />
      </Helmet>

      <div className="relative bg-primary py-32 overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">About Felona Repair</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">Dedicated to providing professional appliance maintenance and repair solutions.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <img src="/banner/about.jpg" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" alt="Our Professional Team" />
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                   <div className="flex items-center gap-4">
                      <div className="text-secondary text-2xl font-bold">Standard</div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Quality <br/> Service</div>
                   </div>
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
             <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Approach</h6>
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">Focusing on Professionalism and Reliability</h2>
             <p className="text-gray-500 text-lg mb-8 leading-relaxed">
               At Felona Repair, we focus on technical accuracy and timely service. Our business is built on providing diagnostic clarity and performing repairs that aim to extend the lifecycle of your household appliances. We serve residential clients with a commitment to maintaining standard operating procedures.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Qualified Technicians', 'Component Diagnostics', 'Transparent Pricing', 'Scheduled Support'].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <FaCheckCircle className="text-secondary" />
                   <span className="font-bold text-gray-700">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {[
             { icon: FaUserTie, title: "Trained", label: "Professional Personnel" },
             { icon: FaAward, title: "Standard", label: "Diagnostic Procedures" },
             { icon: FaHistory, title: "Regular", label: "Business Operations" }
           ].map((stat, idx) => (
             <div key={idx} className="bg-gray-50 p-10 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all">
                <stat.icon className="text-secondary text-5xl mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;
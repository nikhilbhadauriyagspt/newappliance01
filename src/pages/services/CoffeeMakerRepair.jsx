import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock } from 'react-icons/fa';
import { useBooking } from '../../context/BookingContext';

const CoffeeMakerRepair = () => {
  const { openBookingModal } = useBooking();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Coffee Maker Repair - Appliance Vista Services</title>
        <meta name="description" content="Start your morning right. We fix espresso machines and coffee makers." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img src="/service-5.jpg" className="rounded-3xl shadow-2xl w-full object-cover max-h-[600px]" alt="Coffee Maker Repair" />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl"><FaShieldAlt size={24} /></div>
                  <h5 className="font-bold leading-tight">100% Guaranteed Satisfaction</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Specialization</h6>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">Coffee Maker Repair</h1>
            <p className="text-xl text-primary font-medium mb-6 leading-relaxed">Start your morning right. We fix espresso machines and coffee makers.</p>
            <div className="prose prose-lg text-gray-500 mb-10 max-w-none">
              <p>From commercial espresso machines to home coffee makers, we understand the importance of your morning brew. We fix heating issues, pump failures, and descaling problems to ensure the perfect cup every time.</p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-10">
              <h5 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3"><FaTools className="text-secondary" /> Key Features of This Service:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Heating element repair", "Water pump replacement", "Grinder maintenance", "Descaling and cleaning"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button onClick={() => openBookingModal('Coffee Maker')} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all text-center">Book Service Now</button>
              <div className="flex items-center gap-3 text-gray-500 font-bold"><FaRegClock className="text-secondary" /><span>Fast 2-Hour Response</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMakerRepair;

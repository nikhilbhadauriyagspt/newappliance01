import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock } from 'react-icons/fa';
import { useBooking } from '../../context/BookingContext';

const RefrigeratorRepair = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Reliable Refrigerator Repair Service | Fridge Fix Experts</title>
        <meta name="description" content="Fast and efficient refrigerator repair services. We fix cooling issues, compressor failures, gas leaks, and more for all major brands. Same-day service available!" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/service-2.jpg" 
                className="rounded-3xl shadow-2xl w-full object-cover max-h-[600px]" 
                alt="Refrigerator Repair" 
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold leading-tight">100% Guaranteed Satisfaction</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Expert Cooling Solutions</h6>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">Refrigerator Repair Services</h1>
            
            <p className="text-xl text-primary font-medium mb-6 leading-relaxed">
              Keep your food fresh and healthy with our quick, reliable, and cost-effective refrigerator repair solutions.
            </p>
            
            <div className="prose prose-lg text-gray-500 mb-10 max-w-none">
              <p>
                A malfunctioning refrigerator is an emergency. Whether it's a <strong>single-door, double-door, or side-by-side refrigerator</strong>, our skilled technicians at <strong>Appliance Vista</strong> are ready to diagnose and fix the problem immediately. We understand the importance of keeping your groceries fresh and safe.
              </p>
              <p>
                We service all leading brands, including <strong>Samsung, LG, Whirlpool, Godrej, Haier, Hitachi</strong>, and more. Our experts carry common spare parts to ensure most repairs are completed on the first visit.
              </p>
              
              <h3 className="text-gray-900 font-bold text-xl mt-6 mb-3">We Fix All Fridge Problems:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Not Cooling:</strong> Fridge running but not getting cold enough.</li>
                <li><strong>Excessive Frosting:</strong> Ice buildup in the freezer or fridge compartment.</li>
                <li><strong>Water Leakage:</strong> Water pooling inside or underneath the unit.</li>
                <li><strong>Compressor Issues:</strong> Loud noises or the compressor not starting.</li>
                <li><strong>Gas Refilling:</strong> Professional refrigerant recharge for optimal cooling.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-10">
              <h5 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                <FaTools className="text-secondary" /> Service Highlights:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Compressor Repair", "Thermostat Replacement", "Gas Leakage Fix", "Door Seal Change", "PCB Repair", "Emergency Support"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => openBookingModal('Refrigerator')}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                Book Expert Now
              </button>
              <div className="flex items-center gap-3 text-gray-500 font-bold">
                <FaRegClock className="text-secondary" />
                <span>Arriving in 2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefrigeratorRepair;

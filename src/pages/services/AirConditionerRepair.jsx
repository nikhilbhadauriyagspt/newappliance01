import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock } from 'react-icons/fa';
import { useBooking } from '../../context/BookingContext';

const AirConditionerRepair = () => {
  const { openBookingModal } = useBooking();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Professional AC Repair & Service | Air Conditioner Maintenance</title>
        <meta name="description" content="Expert AC repair and service for split and window units. We offer gas filling, installation, and advanced troubleshooting. Beat the heat with Appliance Vista!" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img src="/service-7.jpg" className="rounded-3xl shadow-2xl w-full object-cover max-h-[600px]" alt="Air Conditioner Repair" />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl"><FaShieldAlt size={24} /></div>
                  <h5 className="font-bold leading-tight">100% Guaranteed Satisfaction</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Cooling Experts</h6>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">Air Conditioner Repair & Service</h1>
            <p className="text-xl text-primary font-medium mb-6 leading-relaxed">
              Stay comfortable all year round with our premium AC maintenance, installation, and repair services.
            </p>
            
            <div className="prose prose-lg text-gray-500 mb-10 max-w-none">
              <p>
                Is your AC not cooling effectively or making loud noises? Don't sweat it! <strong>Appliance Vista</strong> offers comprehensive air conditioner services for homes and offices. Our certified technicians are experts in handling <strong>Split ACs, Window ACs, and Central Cooling Systems</strong>.
              </p>
              <p>
                Regular servicing not only improves cooling efficiency but also reduces electricity bills and extends the lifespan of your unit. We use high-quality refrigerants and genuine spare parts for all repairs.
              </p>
              
              <h3 className="text-gray-900 font-bold text-xl mt-6 mb-3">Common AC Issues We Resolve:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Low Cooling:</strong> Filters clogged or gas leakage reducing performance.</li>
                <li><strong>Gas Leakage:</strong> Identifying and fixing leaks followed by gas refilling.</li>
                <li><strong>Water Leakage:</strong> Water dripping from the indoor unit.</li>
                <li><strong>Compressor Failure:</strong> AC fan running but the compressor is off.</li>
                <li><strong>Electrical Issues:</strong> PCB repair and fixing wiring faults.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-10">
              <h5 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3"><FaTools className="text-secondary" /> Why Hire Us?</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["AC Installation & Uninstallation", "Gas Refilling (R22, R32, R410A)", "Deep Jet Cleaning", "PCB Circuit Repair", "Copper Pipe Fixing", "Annual Maintenance Contracts (AMC)"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button onClick={() => openBookingModal('Air Conditioner')} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all text-center">Book Service Now</button>
              <div className="flex items-center gap-3 text-gray-500 font-bold"><FaRegClock className="text-secondary" /><span>Service within 2 Hours</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditionerRepair;

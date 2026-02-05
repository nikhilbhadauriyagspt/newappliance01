import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as Icons from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Services = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Our Services</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Expert Repair Solutions</h2>
          <p className="text-gray-500">We specialize in a wide range of appliance repairs, ensuring your home runs smoothly with minimal downtime.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
             const IconComponent = Icons[service.iconName] || Icons.FaTools;
             return (
              <div 
                key={service.id} 
                className="group h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <div className="bg-secondary text-white w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <IconComponent size={24} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pt-12 pb-8 flex-grow flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Link 
                    to={`/service/${service.slug}`} 
                    className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                  >
                    Explore Service <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 italic">Don't see your appliance? We probably fix it anyway!</p>
          <button 
            onClick={() => openBookingModal()}
            className="text-primary font-bold border-b-2 border-secondary hover:text-secondary transition-colors"
          >
            Contact us for custom inquiries
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

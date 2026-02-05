import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="py-20 bg-light overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0" data-aos="fade-right">
            <div className="relative">
              <img src="/banner/about.jpg" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" alt="About Our Team" />
              <div className="bg-secondary p-8 rounded-xl absolute -bottom-6 -right-6 md:right-6 md:bottom-6 shadow-xl text-white hidden sm:block" style={{ maxWidth: '220px' }}>
                <h2 className="font-heading font-extrabold text-3xl mb-1">Service</h2>
                <p className="font-bold text-sm uppercase tracking-wider opacity-90">Professional Appliance Care</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:pl-16" data-aos="fade-left">
            <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-block border-b-2 border-secondary pb-1">Our Organization</h6>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">Providing Appliance Repair Solutions</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We offer technical appliance repair services that focus on thorough diagnostics and functional repairs. Our team is trained to handle various appliance issues, aiming to provide solutions that assist in maintaining your home equipment.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: 'Trained Technicians', desc: 'Technicians with experience in appliance maintenance.' },
                { title: 'Upfront Pricing', desc: 'Detailed cost estimates provided before work begins.' },
                { title: 'Scheduled Support', desc: 'Service appointments based on availability.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1"><FaCheckCircle className="text-secondary text-2xl" /></div>
                  <div className="ml-4">
                    <h5 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => openBookingModal()} className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 shadow-lg">
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
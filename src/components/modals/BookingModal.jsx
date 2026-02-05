import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { FaTimes, FaCheckCircle, FaWrench, FaPhoneAlt } from 'react-icons/fa';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeBookingModal();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" 
        onClick={closeBookingModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closeBookingModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-secondary transition-colors z-10"
        >
          <FaTimes size={24} />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center py-20">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <FaCheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-500">Our technician will call you within 15 minutes to confirm the time.</p>
          </div>
        ) : (
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                <FaWrench size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 leading-none">Book a Repair</h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Professional Service • Subject to availability</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="Phone" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="Email" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Select Service</label>
                <select 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all text-gray-600 appearance-none"
                  defaultValue={selectedService}
                >
                  <option value="">Choose an appliance</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Dishwasher">Dishwasher</option>
                  <option value="Television">Television</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                  <option value="Microwave Oven">Microwave Oven</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Address</label>
                <textarea required rows="2" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all resize-none" placeholder="Service location..."></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-secondary hover:bg-orange-600 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all mt-4"
              >
                Confirm Booking Now
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-400 mt-6">
                <FaPhoneAlt size={12} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Call us directly: +1 (234) 567-890</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;

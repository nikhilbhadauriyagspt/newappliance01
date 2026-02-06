import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a professional API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - Appliance Vista</title>
        <meta name="description" content="Get in touch with us for professional appliance maintenance and repair services." />
        <link rel="canonical" href="https://www.appliancevista.shop/contact" />
      </Helmet>

      <div className="relative bg-primary py-32 overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Available for technical support and service scheduling.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Service Information</h6>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Request Technical Support</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              If you are experiencing issues with your household appliances, please provide the details below. Our technical team will review your request and contact you based on availability.
            </p>

            <div className="grid gap-8">
               <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    <FaPhoneAlt size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Phone Support</h4>
                    <p className="text-gray-500 mb-1">Standard Support Line</p>
                    <a href="tel:+1234567890" className="text-lg font-bold text-primary hover:text-secondary transition-colors">+1 (234) 567-890</a>
                 </div>
               </div>

               <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-secondary flex-shrink-0">
                    <FaEnvelope size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Email Correspondence</h4>
                    <p className="text-gray-500 mb-1">Standard Response Time: 2-4 Hours</p>
                    <a href="mailto:info@appliancevista.shop" className="text-lg font-bold text-primary hover:text-secondary transition-colors">info@appliancevista.shop</a>
                 </div>
               </div>

               <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Operational Base</h4>
                    <p className="text-gray-500 leading-relaxed max-w-xs">
                       Grandview Glendale, <br />CA 91201, USA
                    </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100px]"></div>
             
             {isSubmitted ? (
                <div className="relative z-10 py-20 text-center animate-in fade-in zoom-in duration-500">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle size={40} />
                   </div>
                   <h3 className="text-3xl font-bold text-gray-900 mb-2">Request Submitted</h3>
                   <p className="text-gray-500 max-w-sm mx-auto">We have received your information. A technician will contact you to discuss your repair requirements.</p>
                   <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-bold hover:text-secondary transition-colors underline"
                   >
                     Submit another request
                   </button>
                </div>
             ) : (
             <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="Doe" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                   <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Service Required</label>
                   <select required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all text-gray-600 appearance-none">
                      <option value="">Select an appliance</option>
                      <option>Washing Machine Repair</option>
                      <option>Refrigerator Repair</option>
                      <option>Dishwasher Repair</option>
                      <option>Television Repair</option>
                      <option>Air Conditioner Repair</option>
                      <option>Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message Detail</label>
                   <textarea required rows="4" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-all resize-none" placeholder="Describe the issue..."></textarea>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit" 
                  className="w-full bg-secondary hover:bg-orange-600 disabled:bg-gray-400 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                   {isLoading ? (
                     <>
                       <FaSpinner className="animate-spin" /> Processing...
                     </>
                   ) : 'Send Request'}
                </button>
             </form>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

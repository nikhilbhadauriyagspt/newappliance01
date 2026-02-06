import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Contact Us</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Let's Fix Your Appliance</h2>
          <p className="text-gray-500">Have a question or need a repair? Send us a message and our team will get back to you within 24 hours.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Side */}
          <div className="w-full lg:w-5/12" data-aos="fade-right">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-white h-full relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16"></div>
              
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="bg-secondary p-4 rounded-2xl shadow-lg shadow-secondary/20">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Our Location</h5>
                    <p className="text-white/70 text-sm">Grandview Glendale, <br />CA 91201, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-secondary p-4 rounded-2xl shadow-lg shadow-secondary/20">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Phone Number</h5>
                    <p className="text-white/70 text-sm">+1 (234) 567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-secondary p-4 rounded-2xl shadow-lg shadow-secondary/20">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Email Address</h5>
                    <p className="text-white/70 text-sm">info@appliancevista.shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12" data-aos="fade-left">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-8 rounded-xl shadow-sm animate-pulse">
                  <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. One of our experts will contact you shortly to discuss your repair needs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Subject</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Washing Machine Repair" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Tell us about the issue you're facing..." 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-[2px] py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl hover:-translate-y-1 active:scale-95"
                  >
                    Send Message 
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional Map Section */}
      <div className="mt-24 h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100">
        <iframe 
           width="100%" 
           height="100%" 
           style={{border:0}} 
           loading="lazy" 
           allowFullScreen 
           src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed">
        </iframe>
      </div>
    </section>
  );
};

export default Contact;


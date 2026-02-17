import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitted(true); // Fallback for Netlify
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50/50 -skew-y-3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Side: Information */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-primary mb-8 leading-[1.1] tracking-tighter">
                Talk to our <br /><span className="text-secondary">Expert Repair Team</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-md">
                Get the best help for your home appliances. Our team is ready to answer your questions and fix your problems.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <FaPhoneAlt />, label: 'Call us', val: '+1 (530) 554-4817', sub: 'Available 24/7' },
                  { icon: <FaEnvelope />, label: 'Email us', val: 'info@appliancenerds.shop', sub: 'We reply fast' },
                  { icon: <FaClock />, label: 'Open Hours', val: 'Mon - Sat: 8AM - 9PM', sub: 'Sunday Emergency Only' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-premium transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-black text-primary leading-none mb-1">{item.val}</p>
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-widest opacity-60">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-primary rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -translate-x-10 translate-y-10 blur-2xl"></div>

              <div className="relative z-10">
                <div className="mb-12">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Need help?</h3>
                  <p className="text-slate-400 font-medium">Tell us what's wrong and we'll get back to you.</p>
                </div>

                {submitted ? (
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] text-center backdrop-blur-md animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-xl shadow-secondary/20">
                      <FaHeadset />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4">Message Sent</h4>
                    <p className="text-slate-400 font-medium mb-8">One of our experts will call you soon to help.</p>
                    <button onClick={() => setSubmitted(false)} className="text-secondary font-black uppercase tracking-widest text-[10px] border-b border-secondary pb-1">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" name="contact-home" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-home" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 ml-2">Your Name</label>
                        <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-secondary focus:bg-white/10 transition-all text-white placeholder:text-slate-600 font-medium" placeholder="Ex: John Smith" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 ml-2">Email Address</label>
                        <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-secondary focus:bg-white/10 transition-all text-white placeholder:text-slate-600 font-medium" placeholder="Ex: john@appliancenerds.shop" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 ml-2">What needs fixing?</label>
                      <select name="appliance" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-secondary focus:bg-white/10 transition-all text-white font-medium appearance-none">
                        <option className="bg-primary text-white">Select Appliance</option>
                        <option className="bg-primary text-white">Washing Machine</option>
                        <option className="bg-primary text-white">Refrigerator</option>
                        <option className="bg-primary text-white">Air Conditioner</option>
                        <option className="bg-primary text-white">Others</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 ml-2">Tell us about the issue</label>
                      <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-secondary focus:bg-white/10 transition-all text-white placeholder:text-slate-600 font-medium resize-none" placeholder="What is the problem?"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-secondary text-white py-5 rounded-2xl font-black uppercase tracking-[4px] text-xs shadow-2xl hover:bg-white hover:text-secondary transition-all active:scale-95 flex items-center justify-center gap-4">
                      Send Request <FaPaperPlane />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-32 rounded-[48px] overflow-hidden h-[500px] shadow-premium relative group">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) invert(90%)' }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Caldwell%20Blvd,%20Nampa,%20ID%2083651,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed">
          </iframe>

          {/* Address Overlay Card */}
          <div className="absolute bottom-10 left-10 z-20 bg-white p-8 rounded-[32px] shadow-2xl max-w-xs border border-slate-100 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h5 className="text-[10px] font-black uppercase tracking-[3px] text-secondary mb-3">Our Office</h5>
            <p className="text-primary font-black text-lg leading-tight mb-4">Caldwell Blvd, Nampa, ID 83651, USA</p>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <FaMapMarkerAlt className="text-secondary" /> Open for visits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
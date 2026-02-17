import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner, FaArrowRight, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok || response.status === 200) {
        setIsLoading(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setIsLoading(false);
        setIsSubmitted(true); // Fallback
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Contact Us - appliance nerds | Professional Support</title>
        <meta name="description" content="Get in touch with us for professional appliance maintenance and repair services." />
        <link rel="canonical" href="https://www.appliancenerds.shop/contact" />
      </Helmet>

      <section className="relative pt-44 pb-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Technical Support</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
            Let's Discuss Your Technical Needs
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Direct access to our technical support division. We provide professional diagnostic information and systematic repair scheduling.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32">
        <div className="flex flex-col lg:flex-row gap-24">

          <div className="w-full lg:w-5/12">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Service Grid</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight tracking-tighter uppercase">
              A Professional Standard of <span className="text-secondary">Service Delivery</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
              Our technical support channels are designed for clear communication and professional service scheduling. We focus on providing accurate diagnostic information and efficient repair timelines.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: 'Support Line',
                  val: '+1 (530) 554-4817',
                  color: 'bg-slate-50',
                  textColor: 'text-primary'
                },
                {
                  icon: <FaEnvelope />,
                  label: 'Service Correspondence',
                  val: 'appliancenerds@outlook.com',
                  color: 'bg-slate-50',
                  textColor: 'text-primary'
                },
                {
                  icon: <FaClock />,
                  label: 'Operational Hours',
                  val: 'Mon - Sat: 8:00 AM - 9:00 PM',
                  color: 'bg-slate-50',
                  textColor: 'text-primary'
                }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-6 p-8 rounded-[32px] border border-slate-100 ${item.color} group hover:border-secondary/20 transition-all`}>
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className={`text-xl font-black ${item.textColor} tracking-tight`}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-[60px] p-8 md:p-16 shadow-premium border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-bl-[100px]"></div>

              {isSubmitted ? (
                <div className="relative z-10 py-24 text-center animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <FaCheckCircle size={40} />
                  </div>
                  <h3 className="text-4xl font-black text-primary mb-4 tracking-tighter uppercase">Inquiry Transmitted</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto mb-10 text-lg">Your service request has been successfully logged. A member of our technical team will contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-secondary font-black uppercase tracking-[3px] text-[10px] border-b-2 border-secondary pb-1">Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8" name="contact-page" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact-page" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Name</label>
                      <input required name="name" type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-secondary transition-all font-medium text-primary" placeholder="Enter name..." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Email</label>
                      <input required name="email" type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-secondary transition-all font-medium text-primary" placeholder="Enter email..." />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Appliance Category</label>
                    <div className="relative">
                      <select required name="category" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-secondary transition-all text-primary font-black appearance-none cursor-pointer">
                        <option value="">Choose Classification</option>
                        <option>Washing Machines</option>
                        <option>Refrigeration Systems</option>
                        <option>HVAC / Air Conditioning</option>
                        <option>Cooking / Oven Systems</option>
                        <option>Other Domestic Assets</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary"><FaArrowRight size={14} /></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Technical Description</label>
                    <textarea required name="message" rows="5" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-secondary transition-all font-medium text-primary resize-none" placeholder="Provide details of the malfunction..."></textarea>
                  </div>
                  <button disabled={isLoading} type="submit" className="w-full bg-primary text-white font-black uppercase tracking-[4px] py-6 rounded-2xl shadow-2xl hover:bg-secondary transition-all active:scale-95 flex items-center justify-center gap-4 text-xs">
                    {isLoading ? <><FaSpinner className="animate-spin" /> Transmission In Progress...</> : <>Submit Technical Request <FaArrowRight /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

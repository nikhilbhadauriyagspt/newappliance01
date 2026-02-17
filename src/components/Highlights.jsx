import React from 'react';
import { FaShieldAlt, FaUserCheck, FaTools, FaHeadset } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaShieldAlt />,
    title: "45-Day Warranty",
    desc: "Every repair is backed by our signature Specialized guarantee."
  },
  {
    icon: <FaUserCheck />,
    title: "Certified Techs",
    desc: "Factory-trained engineers for all major luxury brands."
  },
  {
    icon: <FaTools />,
    title: "Genuine Parts",
    desc: "We only install factory-original manufacturer components."
  },

];

const Highlights = () => {
  return (
    <section className="relative z-40 -mt-12 lg:-mt-20 pb-20">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-[32px] shadow-premium border border-slate-100 hover:border-secondary/20 hover:shadow-premium-hover transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500 mb-6 shadow-inner">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h4 className="text-lg font-black text-primary mb-3 uppercase tracking-tighter group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

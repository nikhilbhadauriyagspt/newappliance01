import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote: 'The technician was professional and fixed my washing machine in no time. Highly recommended for any household appliance issues!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Michael Smith',
    role: 'Cafe Owner',
    quote: 'Excellent service for our commercial coffee machine. They saved our busy Monday morning! Fast, reliable, and very knowledgeable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Apartment Manager',
    quote: 'Reliable and affordable. I use Appliance Vista for all my rental properties. Their preventative maintenance plans are a game changer.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className="bg-white p-8 rounded-2xl shadow-2xl relative mt-8 group hover:-translate-y-2 transition-transform duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -top-10 left-8">
                <div className="relative">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-lg shadow-md">
                    <FaQuoteLeft size={12} />
                  </div>
                </div>
              </div>
              
              <div className="pt-10">
                <div className="flex mb-4 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < t.rating ? 'fill-current' : 'text-gray-200'} size={14} />
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <h5 className="font-bold text-gray-900 mb-1">{t.name}</h5>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


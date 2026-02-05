import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <section className="py-24 bg-light" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div className="max-w-xl">
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Latest News</h6>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">Expert Tips & Industry Insights</h2>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors mb-2 border-b-2 border-secondary/30 pb-1">
            View All Posts <FaArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={blog.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={blog.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    Repair Tips
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <FaCalendarAlt className="text-secondary" />
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow">
                  {blog.shortDesc}
                </p>
                
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary group-hover:text-secondary transition-colors"
                >
                  Read Full Article <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors border-b-2 border-secondary/30 pb-1">
            View All Posts <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
